
import { useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp, Star, Award, BookOpen, Cpu, TrendingUp, GraduationCap } from "lucide-react";

const courses = [
  {
    id: "bca",
    degree: "BCA",
    fullName: "Bachelor of Computer Application",
    icon: Cpu,
    color: "from-blue-600 to-blue-800",
    accent: "#2563eb",
    lightBg: "bg-blue-50",
    border: "border-blue-200",
    streams: [
      { name: "BCA (Regular)", desc: "Core computer applications curriculum" },
      { name: "BCA with AI & ML", desc: "Artificial Intelligence & Machine Learning specialization" },
      { name: "BCA with Supply Chain & Logistic Management", desc: "Tech-driven supply chain focus" },
    ],
    eligibility: [
      "Passed 10+2 (PUC / HSC) or equivalent from a recognized board",
      "Any stream — Science, Commerce, or Arts",
      "Minimum 35% aggregate marks in qualifying exam",
      "No age bar for regular admission",
      "Karnataka CET / Management quota seats available",
    ],
    scholarships: [
      { label: "95% & above in 10+2", benefit: "FREE Education", color: "bg-green-600" },
      { label: "92% & above in 10+2", benefit: "50% FREE Education", color: "bg-blue-600" },
    ],
    perks: ["Free Computer Education", "Free Mid Day Meal"],
  },
  {
    id: "bcom",
    degree: "B.Com",
    fullName: "Bachelor of Commerce",
    icon: TrendingUp,
    color: "from-emerald-600 to-emerald-800",
    accent: "#059669",
    lightBg: "bg-emerald-50",
    border: "border-emerald-200",
    streams: [
      { name: "B.Com (Regular)", desc: "Core commerce and accounting curriculum" },
      { name: "B.Com with CA Coaching", desc: "Integrated Chartered Accountancy preparation" },
      { name: "B.Com with AI & ML", desc: "Commerce meets artificial intelligence" },
      { name: "B.Com with Supply Chain & Logistic Management", desc: "Commerce with logistics specialization" },
    ],
    eligibility: [
      "Passed 10+2 (PUC / HSC) or equivalent from a recognized board",
      "Commerce stream preferred; Science & Arts also eligible",
      "Minimum 35% aggregate marks in qualifying exam",
      "Basic Mathematics / Business Studies knowledge beneficial",
      "Karnataka CET / Management quota seats available",
    ],
    scholarships: [
      { label: "95% & above in 10+2", benefit: "FREE Education", color: "bg-green-600" },
      { label: "92% & above in 10+2", benefit: "50% FREE Education", color: "bg-emerald-600" },
    ],
    perks: ["Free Computer Education", "Free Mid Day Meal"],
  },
  {
    id: "ba",
    degree: "B.A",
    fullName: "Bachelor of Arts",
    icon: BookOpen,
    color: "from-amber-600 to-amber-800",
    accent: "#d97706",
    lightBg: "bg-amber-50",
    border: "border-amber-200",
    streams: [
      { name: "B.A (Regular)", desc: "Humanities and social sciences curriculum" },
      { name: "B.A with AI & ML", desc: "Arts meets cutting-edge technology" },
      { name: "B.A with Supply Chain & Logistic Management", desc: "Arts with modern management skills" },
      { name: "Teachers Learning Programme (BHAVISH)", desc: "Specialized teacher training pathway" },
    ],
    eligibility: [
      "Passed 10+2 (PUC / HSC) or equivalent from a recognized board",
      "Any stream — Science, Commerce, or Arts",
      "Minimum 35% aggregate marks in qualifying exam",
      "No specific subject requirements",
      "Karnataka CET / Management quota seats available",
    ],
    scholarships: [
      { label: "95% & above in 10+2", benefit: "FREE Education", color: "bg-green-600" },
      { label: "92% & above in 10+2", benefit: "50% FREE Education", color: "bg-amber-600" },
    ],
    perks: ["Free Computer Education", "Free Mid Day Meal"],
  },
];

const generalDocs = [
  "10th (SSLC) Marks Card & Certificate",
  "12th (PUC / HSC) Marks Card & Certificate",
  "Transfer Certificate (TC) from previous institution",
  "Migration Certificate (if from outside Karnataka)",
  "Study Certificate",
  "Aadhar Card / Valid Government ID Proof",
  "Caste & Income Certificate (for SC/ST/OBC/EWS)",
  "Passport-size Photographs (4–6 copies)",
  "CET Rank Card (if applicable)",
];

export default function Eligibility() {
  const [openCourse, setOpenCourse] = useState<string | null>("bca");

  const toggle = (id: string) => setOpenCourse(openCourse === id ? null : id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* ── Hero Banner ── */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#c2410c] via-[#ea580c] to-[#c2410c] py-16 px-4">
        {/* Decorative circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-yellow-400/10 blur-2xl" />
        <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-blue-400/10 blur-2xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <GraduationCap className="w-4 h-4" />
            Admissions Open — Academic Year 2026–27
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Eligibility Criteria
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Sri Rama First Grade College, Hanuman Nagara, Kalladka
            <br />
            <span className="text-sm text-orange-200">
              Affiliated to Mangalore University · Managed by Sri Rama Vidyakendra Trust(R)
            </span>
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { label: "Courses Offered", value: "3 Degrees" },
              { label: "Specializations", value: "10+" },
              { label: "University", value: "Mangalore" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-yellow-400">{s.value}</p>
                <p className="text-orange-200 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── General Notice ── */}
      <div className="max-w-5xl mx-auto px-4 -mt-6 relative z-20">
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 shadow-sm">
          <Star className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 font-medium">
            <strong>Scholarship Alert:</strong> Students scoring 95% &amp; above get{" "}
            <span className="text-green-700 font-bold">FREE Education</span>. Students scoring 92% &amp;
            above get <span className="text-blue-700 font-bold">50% FREE Education</span>. Free Computer
            Education &amp; Free Mid Day Meal for all enrolled students.
          </p>
        </div>
      </div>

      {/* ── Course Accordion ── */}
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-5">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Course-wise Eligibility
        </h2>

        {courses.map((course) => {
          const Icon = course.icon;
          const isOpen = openCourse === course.id;

          return (
            <div
              key={course.id}
              className={`rounded-2xl border-2 overflow-hidden shadow-sm transition-all duration-300 ${
                isOpen ? course.border + " shadow-md" : "border-slate-200"
              }`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggle(course.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-md`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">
                      {course.degree}
                    </h3>
                    <p className="text-sm text-slate-500">{course.fullName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="hidden sm:inline-block text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: course.accent }}
                  >
                    {course.streams.length} Specializations
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  )}
                </div>
              </button>

              {/* Accordion Body */}
              {isOpen && (
                <div className={`px-6 pb-7 ${course.lightBg} border-t ${course.border}`}>
                  <div className="grid md:grid-cols-2 gap-8 mt-6">
                    {/* Left: Streams + Eligibility */}
                    <div className="space-y-6">
                      {/* Streams */}
                      <div>
                        <h4 className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-3">
                          Available Streams
                        </h4>
                        <div className="space-y-2">
                          {course.streams.map((s) => (
                            <div
                              key={s.name}
                              className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-slate-100 shadow-sm"
                            >
                              <div
                                className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                                style={{ backgroundColor: course.accent }}
                              />
                              <div>
                                <p className="text-sm font-semibold text-slate-800">{s.name}</p>
                                <p className="text-xs text-slate-500">{s.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Eligibility */}
                      <div>
                        <h4 className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-3">
                          Eligibility Criteria
                        </h4>
                        <ul className="space-y-2">
                          {course.eligibility.map((e) => (
                            <li key={e} className="flex items-start gap-2 text-sm text-slate-700">
                              <CheckCircle
                                className="w-4 h-4 mt-0.5 shrink-0"
                                style={{ color: course.accent }}
                              />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right: Scholarships + Perks */}
                    <div className="space-y-6">
                      {/* Scholarships */}
                      <div>
                        <h4 className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-3">
                          Fee Waiver / Scholarships
                        </h4>
                        <div className="space-y-3">
                          {course.scholarships.map((sc) => (
                            <div
                              key={sc.label}
                              className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-slate-100 shadow-sm"
                            >
                              <div className="flex items-center gap-2">
                                <Award className="w-4 h-4 text-yellow-500" />
                                <span className="text-sm text-slate-700">{sc.label}</span>
                              </div>
                              <span
                                className={`${sc.color} text-white text-xs font-bold px-3 py-1 rounded-full`}
                              >
                                {sc.benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Additional Perks */}
                      <div>
                        <h4 className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-3">
                          Additional Benefits
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {course.perks.map((p) => (
                            <span
                              key={p}
                              className="inline-flex items-center gap-1.5 bg-white border text-sm font-medium px-3 py-2 rounded-xl shadow-sm"
                              style={{ borderColor: course.accent, color: course.accent }}
                            >
                              <CheckCircle className="w-3.5 h-3.5" />
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <a
                        href="/admissions/application-form"
                        className="inline-flex items-center justify-center w-full gap-2 text-white font-semibold py-3 px-6 rounded-xl bg-orange-600 hover:bg-orange-700 transition-all shadow-md mt-2"
                        
                      >
                        Apply for {course.degree}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Documents Required ── */}
      <div className="max-w-5xl mx-auto px-4 pb-14">
        <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-[#1a2356] to-[#1e3a8a] px-6 py-5">
            <h2 className="text-xl font-bold text-white">Documents Required at Admission</h2>
            <p className="text-orange-200 text-sm mt-1">
              Applicable for all courses — B.A, B.Com, BCA
            </p>
          </div>
          <div className="p-6 grid sm:grid-cols-2 gap-3">
            {generalDocs.map((doc, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100"
              >
                <span className="w-6 h-6 rounded-full bg-[#1e3a8a] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-slate-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Contact CTA ── */}
      <div className="bg-gradient-to-r from-[#1a2356] to-[#1e3a8a] py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Need Help with Admissions?</h2>
        <p className="text-orange-200 mb-6">Our team is ready to assist you through the process.</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
          {["96632 63049", "99805 40907", "99642 80734"].map((num) => (
            <a
              key={num}
              href={`tel:${num.replace(/\s/g, "")}`}
              className="bg-yellow-400 hover:bg-yellow-300 text-[#1a2356] px-5 py-3 rounded-xl transition-colors shadow"
            >
              📞 {num}
            </a>
          ))}
        </div>
        <p className="text-orange-200 text-sm mt-4">
          ✉️{" "}
          <a href="mailto:srfgck@gmail.com" className="underline hover:text-white">
            srfgck@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}