"use client";
import React, { useState } from "react";
import {
  createTechnician,
  CreateTechnicianPayload,
} from "../../_actions/technician/createTechnician";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

const CreateProfile = () => {
  const [bio, setBio] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: CreateTechnicianPayload = {
      bio,
      experience: Number(experience),
      location,
      skills: skills.split(",").map((skill) => skill.trim()),
    };

    try {
      const result = await createTechnician(payload);
      if (result.success) {
        toast.success("Technician created successfully");

        router.refresh();
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };
  return (
    <div>
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Create Technician Profile</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Write a short introduction..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Experience (Years)</Label>
              <Input
                id="experience"
                type="number"
                min={0}
                placeholder="Enter experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">Skills</Label>
              <Input
                id="skills"
                type="text"
                placeholder="Electrical, Plumbing, AC Repair"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                required
              />
              <p className="text-sm text-muted-foreground">
                Separate multiple skills with commas.
              </p>
            </div>

            <Button type="submit" className="w-full">
              Create Profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateProfile;
