import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const aboutItemsLeft = [
  "About the Institution",
  "Vision and Mission",
  "About The Principal",
  "Vice Principal’s Message",
  "Administration",
  "Strategic Plan",
  "Feedback",
];

const aboutItemsRight = [
  "Governing Bodies",
  "Faculty",
  "Location",
  "Affiliation",
  "Scholarship",
  "Best Practices",
  "Institutional Distinctiveness",
  "Committees",
];

const AboutSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const navigate = useNavigate();
  const { section } = useParams();

  const sectionToItem = useMemo(
    () =>
      ({
        affiliations: "Affiliation",
        "governing-body": "Governing Bodies",
        "principal-message": "About The Principal",
        scholarship: "Scholarship",
      }) as Record<string, string>,
    []
  );

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  useEffect(() => {
    if (!section) return;
    const item = sectionToItem[section];
    if (!item) return;
    setOpenItem(item);
    queueMicrotask(() => {
      document.getElementById(`about-${slugify(item)}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [section, sectionToItem]);

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  const handleItemClick = (item: string) => {
    if (item === "Location") {
      navigate("/about/location");
      return;
    }

    toggleItem(item);
  };

  const renderItem = (item: string) => (
    <div id={`about-${slugify(item)}`} key={item} className="border-b border-gray-200">
      <button
        onClick={() => handleItemClick(item)}
        className="w-full flex justify-between items-center py-3 text-left text-gray-700 hover:text-black transition"
      >
        <span>{item}</span>

        {/* Arrow */}
        <span
          className={`transform transition-transform duration-300 ${
            openItem === item ? "rotate-90" : ""
          }`}
        >
          ▶
        </span>
      </button>

      {/* Content */}
      {item !== "Location" && openItem === item && (
        <div className="pb-3 text-sm text-gray-500">
          This section contains information about <b>{item}</b>.
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="bg-white p-10 rounded-lg shadow-md max-w-7xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-4xl font-semibold mb-4 text-black">
              About Us
            </h1>

            <p className="text-gray-600 leading-relaxed">
              Welcome to Shree Devi Institute of Technology (SDIT), Kenjar
              Mangalore – a premier institution dedicated to excellence in
              engineering education and holistic development.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* LEFT COLUMN */}
            <div>
              {aboutItemsLeft.map((item) => renderItem(item))}
            </div>

            {/* RIGHT COLUMN */}
            <div>
              {aboutItemsRight.map((item) => renderItem(item))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;