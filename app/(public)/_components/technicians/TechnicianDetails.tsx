import { getTechnicianById } from "../../_actions/technicians/techniciansActions";
import TechnicianHero from "./TechnicianHero";
import TechnicianAvailability from "./TechnicianAvailability";
import TechnicianStats from "./TechnicianStats";
import AboutTechnician from "./AboutTechnician";
import TechnicianSkills from "./TechnicianSkills";
import TechnicianServices from "./TechnicianService";
import TechnicianReviews from "./TechnicianReviews";
import BookingCard from "./BookingCard";
import MobileBookingBar from "./MobileBookingBar";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const TechnicianDetailsPage = async ({ params }: Props) => {
  const { id } = await params;

  const response = await getTechnicianById(id);

  if (!response?.success || !response.data) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold">Technician Not Found</h2>

          <p className="text-muted-foreground">
            The technician you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  const technician = response.data;

  return (
    <main className="bg-muted/30">
      {/* Hero */}
      <section className="border-b bg-background">
        <div className="container mx-auto px-4 py-10 lg:py-14">
          <TechnicianHero technician={technician} />
        </div>
      </section>

      {/* Main */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid gap-8 xl:grid-cols-12">
          {/* Left */}
          <div className="space-y-8 xl:col-span-8">
            <TechnicianStats technician={technician} />

            <AboutTechnician technician={technician} />

            <TechnicianSkills skills={technician.skills} />

            <TechnicianServices services={technician.services} />

            <TechnicianAvailability
              availabilities={technician.availabilities}
            />

            <TechnicianReviews
              reviews={technician.reviews}
              averageRating={technician.averageRating}
              totalReviews={technician.totalReviews}
            />
          </div>

          {/* Right */}
          <aside className="xl:col-span-4">
            <div className="sticky top-24">
              <BookingCard technician={technician} />
            </div>
          </aside>
        </div>
      </section>

      {/* Mobile CTA */}
      {/* <MobileBookingBar /> */}
    </main>
  );
};

export default TechnicianDetailsPage;
