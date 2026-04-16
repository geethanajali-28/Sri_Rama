import { useState } from "react";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Star,
  Award,
  BookOpen,
  Cpu,
  TrendingUp,
  GraduationCap,
} from "lucide-react";

const courses = [
  {
    id: "bca",
    degree: "BCA",
    fullName: "Bachelor of Computer Application",
    icon: Cpu,
    color: "from-orange-600 to-orange-800",
    accent: "#ea580c",
    lightBg: "bg-orange-50",
    border: "border-orange-200",
    streams: [
      { name: "BCA (Regular)", desc: "Core computer applications curriculum" },
      { name: "BCA with AI & ML", desc: "Artificial Intelligence & Machine Learning specialization" },
      { name: "BCA with Supply Chain & Logistic Management", desc: "Tech-driven supply chain focus" },
    ],
    eligibility: [
      "Passed 10+2 (PUC / HSC) or equivalent",
      "Any stream — Science, Commerce, or Arts",
      "Minimum 35% aggregate marks",
    ],
    scholarships: [
      { label: "95% & above", benefit: "FREE Education", color: "bg-green-600" },
      { label: "92% & above", benefit: "50% FREE", color: "bg-orange-600" },
    ],
    perks: ["Free Computer Education", "Free Mid Day Meal"],
  },
  {
    id: "bcom",
    degree: "B.Com",
    fullName: "Bachelor of Commerce",
    icon: TrendingUp,
    color: "from-orange-500 to-orange-700",
    accent: "#f97316",
    lightBg: "bg-orange-50",
    border: "border-orange-200",
    streams: [
      { name: "B.Com (Regular)", desc: "Core commerce curriculum" },
      { name: "B.Com with CA Coaching", desc: "CA preparation" },
    ],
    eligibility: [
      "Passed 10+2",
      "Minimum 35% aggregate marks",
    ],
    scholarships: [
      { label: "95% & above", benefit: "FREE Education", color: "bg-green-600" },
      { label: "92% & above", benefit: "50% FREE", color: "bg-orange-600" },
    ],
    perks: ["Free Computer Education", "Free Mid Day Meal"],
  },
  {
    id: "ba",
    degree: "B.A",
    fullName: "Bachelor of Arts",
    icon: BookOpen,
    color: "from-orange-600 to-amber-700",
    accent: "#fb923c",
    lightBg: "bg-orange-50",
    border: "border-orange-200",
    streams: [
      { name: "B.A (Regular)", desc: "Arts curriculum" },
      { name: "B.A with AI & ML", desc: "Tech integration" },
    ],
    eligibility: [
      "Passed 10+2",
      "Minimum 35% aggregate marks",
    ],
    scholarships: [
      { label: "95% & above", benefit: "FREE Education", color: "bg-green-600" },
      { label: "92% & above", benefit: "50% FREE", color: "bg-orange-600" },
    ],
    perks: ["Free Computer Education", "Free Mid Day Meal"],
  },
];

export default function Eligibility() {
  const [openCourse, setOpenCourse] = useState<string | null>("bca");

  const toggle = (id: string) => {
    setOpenCourse(openCourse === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">

      {/*  HERO */}
      <div className="bg-gradient-to-r from-[#c2410c] via-[#ea580c] to-[#c2410c] py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Eligibility Criteria</h1>
        <p className="text-orange-200">Admissions Open 2026–27</p>
      </div>

      {/*  COURSES */}
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-5">
        {courses.map((course) => {
          const Icon = course.icon;
          const isOpen = openCourse === course.id;

          return (
            <div
              key={course.id}
              className={`rounded-xl border-2 ${isOpen ? course.border : "border-gray-200"}`}
            >
              {/* HEADER */}
              <button
                onClick={() => toggle(course.id)}
                className="w-full flex justify-between items-center p-5"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${course.color}`}>
                    <Icon className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">{course.degree}</h2>
                    <p className="text-sm text-gray-500">{course.fullName}</p>
                  </div>
                </div>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
              </button>

              {/* BODY */}
              {isOpen && (
                <div className={`p-5 ${course.lightBg}`}>
                  {/* Streams */}
                  <h3 className="font-semibold mb-2">Streams</h3>
                  {course.streams.map((s) => (
                    <p key={s.name} className="text-sm mb-1">• {s.name}</p>
                  ))}

                  {/* Eligibility */}
                  <h3 className="font-semibold mt-4 mb-2">Eligibility</h3>
                  {course.eligibility.map((e) => (
                    <div key={e} className="flex gap-2 text-sm">
                      <CheckCircle size={16} style={{ color: course.accent }} />
                      {e}
                    </div>
                  ))}

                  {/* CTA */}
                  <a
                    href="/admissions/application-form"
                    className="block mt-4 text-center text-white py-2 rounded-lg"
                    style={{ backgroundColor: course.accent }}
                  >
                    Apply Now
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* FOOTER CTA */}
      <div className="bg-gradient-to-r from-[#c2410c] to-[#ea580c] text-white text-center py-10">
        <p>Need help? Call us</p>
        <p className="font-bold mt-2">96632 63049</p>
      </div>
    </div>
  );
}