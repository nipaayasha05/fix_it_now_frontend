"use client";

import { useMemo, useState } from "react";
import {
  BadgeCheck,
  CalendarDays,
  Clock3,
  MapPin,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import { TAvailability, TService, TTechnician } from "@/lib/type";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

type BookingCardProps = {
  technician: TTechnician;
};

export default function BookingCard({ technician }: BookingCardProps) {
  const [selectedServiceId, setSelectedServiceId] = useState(
    technician.services[0]?.id ?? "",
  );

  const [selectedAvailabilityId, setSelectedAvailabilityId] = useState("");

  const [note, setNote] = useState("");

  /**
   * Selected Service
   */
  //   const selectedService = useMemo(() => {
  //     return (
  //       technician.services.find(
  //         (service: TService) => service.id === selectedServiceId,
  //       ) ?? technician.services[0]
  //     );
  //   }, [selectedServiceId, technician.services]);

  /**
   * Selected Slot
   */
  const selectedSlot = useMemo(() => {
    return technician.availabilities.find(
      (slot: TAvailability) => slot.id === selectedAvailabilityId,
    );
  }, [selectedAvailabilityId, technician.availabilities]);

  /**
   * Group slots by day
   */
  const groupedSlots = useMemo(() => {
    return technician.availabilities.reduce(
      (acc: Record<string, TAvailability[]>, slot: TAvailability) => {
        if (!slot.isAvailable) return acc;

        if (!acc[slot.day]) {
          acc[slot.day] = [];
        }

        acc[slot.day].push(slot);

        return acc;
      },
      {} as Record<string, TAvailability[]>,
    );
  }, [technician.availabilities]);

  const handleBooking = () => {
    if (!selectedService) return;

    if (!selectedSlot) {
      alert("Please select an available slot.");
      return;
    }

    // console.log({
    //   serviceId: selectedService.id,
    //   availabilityId: selectedSlot.id,
    //   note,
    // });

    /**
     * TODO:
     * call booking api
     */
  };

  const selectedService = technician.services.find(
    (service) => service.id === selectedServiceId,
  );

  return (
    <Card className="border-0 shadow-xl">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Book This Technician</CardTitle>

          <Badge
            className={
              technician.status === "AVAILABLE"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }
          >
            {technician.status}
          </Badge>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4" />

          {technician.location}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* SERVICE */}

        <div className="space-y-2">
          <Label>Select Service</Label>

          <Select
            value={selectedServiceId}
            onValueChange={(value) => setSelectedServiceId(value ?? "")}
          >
            <SelectTrigger className="w-full">
              <SelectValue>
                {selectedService?.title ?? "Choose a service"}
              </SelectValue>
            </SelectTrigger>

            <SelectContent>
              {technician.services.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* PRICE */}

        <div className="rounded-xl border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wallet className="size-4 text-primary" />

              <span className="text-sm text-muted-foreground">Price</span>
            </div>

            <span className="font-bold text-primary">
              ৳{selectedService?.price}
            </span>
          </div>

          <Separator className="my-3" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock3 className="size-4 text-primary" />

              <span className="text-sm text-muted-foreground">Duration</span>
            </div>

            <span className="font-medium">
              {selectedService?.duration} Minutes
            </span>
          </div>
        </div>

        {/* AVAILABLE SLOTS */}

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <CalendarDays className="size-4 text-primary" />

            <Label>Available Slots</Label>
          </div>

          {Object.keys(groupedSlots).length === 0 ? (
            <div className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
              No available slots.
            </div>
          ) : (
            Object.entries(groupedSlots).map(([day, slots]) => (
              <div key={day} className="space-y-3">
                <h4 className="font-medium text-sm">{day}</h4>

                <div className="flex flex-wrap gap-2">
                  {slots.map((availability) => {
                    const isSelected =
                      selectedAvailabilityId === availability.id;

                    return (
                      <Button
                        key={availability.id}
                        type="button"
                        variant={isSelected ? "default" : "outline"}
                        onClick={() =>
                          setSelectedAvailabilityId(availability.id)
                        }
                        className="rounded-full"
                      >
                        {availability.startTime} - {availability.endTime}
                      </Button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        <Separator />

        {/* NOTE */}

        {/* <div className="space-y-2">
          <Label>Additional Note (Optional)</Label>

          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={4}
            placeholder="Describe your problem..."
          />
        </div> */}

        <Separator />

        {/* SUMMARY */}

        <div className="rounded-xl bg-muted/40 p-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span>Selected Service</span>

            <span className="font-medium">{selectedService?.title}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Selected Slot</span>

            <span className="font-medium">
              {selectedSlot
                ? `${selectedSlot.day} (${selectedSlot.startTime} - ${selectedSlot.endTime})`
                : "Not Selected"}
            </span>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <span className="font-semibold">Total</span>

            <span className="text-xl font-bold text-primary">
              ৳{selectedService?.price ?? 0}
            </span>
          </div>
        </div>

        {/* BOOK BUTTON */}

        <Button
          className="w-full h-11 bg-cta hover:bg-cta/90"
          disabled={
            technician.status !== "AVAILABLE" || !selectedAvailabilityId
          }
          onClick={handleBooking}
        >
          Book Now
        </Button>

        {/* INFO */}

        <div className="space-y-3 rounded-xl border bg-muted/30 p-4">
          <div className="flex items-center gap-2 text-sm">
            <BadgeCheck className="size-4 text-green-600" />
            <span>Verified Technician</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <ShieldCheck className="size-4 text-blue-600" />
            <span>Secure Booking</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Clock3 className="size-4 text-orange-600" />
            <span>Instant Booking Request</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
