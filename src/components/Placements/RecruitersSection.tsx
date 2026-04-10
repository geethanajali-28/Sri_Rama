import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

import PlacementStats from "@/components/Placements/PlacementStats";
import RecruitersSection from "@/components/Placements/RecruitersSection";
import TrainingPrograms from "@/components/Placements/TrainingPrograms";

const Placements = () => {
  return (
    <div className="w-full">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl">
            <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
              Placements
            </Badge>

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <BriefcaseBusiness className="h-8 w-8" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Empowering Students for a Successful Career
            </h1>

            <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
              Our placement cell bridges the gap between academic learning and
              industry expectations by offering career guidance, training, and
              campus recruitment opportunities.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="rounded-xl">
                View Recruiters
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button size="lg" variant="outline" className="rounded-xl">
                Explore Training
              </Button>
            </div>
          </div>
        </div>
      </section>

      <RecruitersSection />
      <TrainingPrograms />
      <PlacementStats />
    </div>
  );
};

export default Placements;