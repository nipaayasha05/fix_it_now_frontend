import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            This is a simple card built with Shadcn UI.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground">
            Add any content here, such as text, images, forms, or statistics.
          </p>
        </CardContent>

        <CardFooter>
          <Button variant="outline" className="w-full">
            Get Started
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
