import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BriefcaseBusiness,
  Building2,
  IndianRupee,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Highest Package",
    value: "₹8 LPA",
    description: "Best annual package received by students.",
    icon: IndianRupee,
  },
  {
    title: "Average Package",
    value: "₹3.5 LPA",
    description: "Average salary package offered to students.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Recruiters",
    value: "50+",
    description: "Top companies visiting our campus.",
    icon: Building2,
  },
  {
    title: "Students Placed",
    value: "300+",
    description: "Students successfully placed in recent drives.",
    icon: Users,
  },
];

const PlacementStats = () => {
  return (
    <section className="w-full bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
            Placement Highlights
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Our Placement Performance
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            We provide strong placement support through skill development,
            industry interaction, and career guidance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="rounded-2xl border bg-background shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-3xl font-bold">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlacementStats;