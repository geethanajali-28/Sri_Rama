import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Globe, Laptop2 } from "lucide-react";

const recruiters = [
  { name: "Infosys", role: "IT Services & Consulting", icon: Laptop2 },
  { name: "TCS", role: "Technology Services", icon: Building2 },
  { name: "Wipro", role: "Software Solutions", icon: Globe },
  { name: "Capgemini", role: "Consulting & IT Services", icon: Laptop2 },
  { name: "HCL", role: "Engineering & Technology", icon: Building2 },
  { name: "Cognizant", role: "Digital & Technology Services", icon: Globe },
];

const RecruitersSection = () => {
  return (
    <section className="w-full bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
            Top Recruiters
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Companies Visiting Our Campus
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Our students receive opportunities from reputed companies across
            various sectors.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recruiters.map((company) => {
            const Icon = company.icon;

            return (
              <Card
                key={company.name}
                className="rounded-2xl border bg-background shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{company.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {company.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecruitersSection;