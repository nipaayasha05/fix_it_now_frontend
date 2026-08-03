"use client";

import { useState } from "react";
import { CalendarDays, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Switch } from "@/components/ui/switch";
import {
  createAvailability,
  CreateAvailabilityPayload,
} from "@/app/dashboard/_actions/technician/createAvailability";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const days = [
  { value: "MONDAY", label: "Monday" },
  { value: "TUESDAY", label: "Tuesday" },
  { value: "WEDNESDAY", label: "Wednesday" },
  { value: "THURSDAY", label: "Thursday" },
  { value: "FRIDAY", label: "Friday" },
  { value: "SATURDAY", label: "Saturday" },
  { value: "SUNDAY", label: "Sunday" },
];

// type CreateAvailabilityPayload = {
//   day: string;
//   startTime: string;
//   endTime: string;
//   isAvailable: boolean;
// };

const CreateAvailability = () => {
  const [day, setDay] = useState<string | null>(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  //   const [isAvailable, setIsAvailable] = useState(true);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: CreateAvailabilityPayload = {
      slots: [
        {
          day: day || "",
          startTime,
          endTime,
          isAvailable: true,
        },
      ],
    };

    try {
      const result = await createAvailability(payload);
      if (result.success) {
        toast.success("Availability created successfully");
        setDay(null);
        setStartTime("");
        setEndTime("");
        router.refresh();
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    }

    // console.log(payload);
  };

  return (
    <Dialog>
      <DialogTrigger className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
        <Plus className="mr-2 h-4 w-4" />
        Add Availability
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-primary" />
            Availability Scheduler
          </DialogTitle>

          <DialogDescription>
            Set your working hours and block unavailable time.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label>Day</Label>

            <Select value={day} onValueChange={(value) => setDay(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a day" />
              </SelectTrigger>

              <SelectContent>
                {days.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Time</Label>

              <Input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>End Time</Label>

              <Input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>

          {/* <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <h4 className="font-medium">Available</h4>

              <p className="text-sm text-muted-foreground">
                Turn off to block this time slot.
              </p>
            </div>

            <Switch checked={isAvailable} onCheckedChange={setIsAvailable} />
          </div> */}

          <Button type="submit" className="w-full">
            Save Availability
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAvailability;
