import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

type PlaceholderPageProps = {
  title?: string;
};

function titleFromPath(pathname: string) {
  const segment = pathname.split("?")[0].split("/").filter(Boolean).slice(-1)[0] ?? "";
  if (!segment) return "Page";
  return segment
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (ch) => ch.toUpperCase());
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  const location = useLocation();
  const params = useParams();

  const paramTitle =
    (params.item || params.section) && typeof (params.item || params.section) === "string"
      ? String(params.item || params.section)
          .replace(/[-_]+/g, " ")
          .replace(/\b\w/g, (ch) => ch.toUpperCase())
      : undefined;

  const pageTitle = title ?? paramTitle ?? titleFromPath(location.pathname);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Card className="bg-white">
          <CardContent className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{pageTitle}</h1>
            <p className="mt-3 text-gray-600">
              This section will be updated with content soon.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlaceholderPage;
