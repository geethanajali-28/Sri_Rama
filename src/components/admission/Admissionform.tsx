
import { useState } from "react";
import {
  User,
  Mail,
  Calendar,
  MapPin,
  Globe,
  BookOpen,
  GraduationCap,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  FileText,
  Phone,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  // Step 1 – Application For
  applicationFor: string;
  specialization: string;

  // Step 2 – Personal Info
  fullName: string;
  gender: string;
  dob: string;
  email: string;
  phone: string;
  nationality: string;
  motherTongue: string;
  languages: string;
  placeOfBirth: string;
  state: string;
  religion: string;
  caste: string;
  category: string;

  // Step 3 – SSLC / 10th
  sslcSchool: string;
  sslcBoard: string;
  sslcPercentage: string;
  sslcYear: string;

  // Step 4 – PUC / 10+2
  pucSchool: string;
  pucBoard: string;
  pucPercentage: string;
  pucYear: string;
  pucSubjects: string;

  // Step 5 – Degree (optional)
  degreeCollege: string;
  degreeBoard: string;
  degreePercentage: string;
  degreeYear: string;
  degreeTotalMarks: string;

  // Step 6 – Declaration
  declaration: boolean;
}

const initialForm: FormData = {
  applicationFor: "",
  specialization: "",
  fullName: "",
  gender: "",
  dob: "",
  email: "",
  phone: "",
  nationality: "",
  motherTongue: "",
  languages: "",
  placeOfBirth: "",
  state: "",
  religion: "",
  caste: "",
  category: "",
  sslcSchool: "",
  sslcBoard: "",
  sslcPercentage: "",
  sslcYear: "",
  pucSchool: "",
  pucBoard: "",
  pucPercentage: "",
  pucYear: "",
  pucSubjects: "",
  degreeCollege: "",
  degreeBoard: "",
  degreePercentage: "",
  degreeYear: "",
  degreeTotalMarks: "",
  declaration: false,
};

const specializationMap: Record<string, string[]> = {
  BCA: [
    "BCA (Regular)",
    "BCA with AI & ML",
    "BCA with Supply Chain & Logistic Management",
  ],
  "B.Com": [
    "B.Com (Regular)",
    "B.Com with CA Coaching",
    "B.Com with AI & ML",
    "B.Com with Supply Chain & Logistic Management",
  ],
  "B.A": [
    "B.A (Regular)",
    "B.A with AI & ML",
    "B.A with Supply Chain & Logistic Management",
    "Teachers Learning Programme (BHAVISH)",
  ],
};

const steps = [
  { label: "Course", icon: BookOpen },
  { label: "Personal", icon: User },
  { label: "SSLC / 10th", icon: FileText },
  { label: "PUC / 10+2", icon: FileText },
  { label: "Degree", icon: GraduationCap },
  { label: "Submit", icon: CheckCircle },
];

// ── Reusable Field Components ─────────────────────────────────────────────────
function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition placeholder:text-slate-400 bg-white";

const selectCls =
  "w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white";

// ── Main Component ────────────────────────────────────────────────────────────
export default function ApplicationForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const set = (key: keyof FormData, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = (): boolean => {
    const newErr: Partial<Record<keyof FormData, string>> = {};

    if (step === 0) {
      if (!form.applicationFor) newErr.applicationFor = "Please select a course.";
      if (!form.specialization) newErr.specialization = "Please select a specialization.";
    }
    if (step === 1) {
      if (!form.fullName.trim()) newErr.fullName = "Full name is required.";
      if (!form.gender) newErr.gender = "Please select gender.";
      if (!form.dob) newErr.dob = "Date of birth is required.";
      if (!form.email.trim()) newErr.email = "Email is required.";
      if (!form.phone.trim()) newErr.phone = "Phone number is required.";
    }
    if (step === 2) {
      if (!form.sslcSchool.trim()) newErr.sslcSchool = "School name is required.";
      if (!form.sslcBoard.trim()) newErr.sslcBoard = "Board name is required.";
      if (!form.sslcPercentage.trim()) newErr.sslcPercentage = "Percentage is required.";
      if (!form.sslcYear.trim()) newErr.sslcYear = "Year of passing is required.";
    }
    if (step === 3) {
      if (!form.pucSchool.trim()) newErr.pucSchool = "School/College name is required.";
      if (!form.pucBoard.trim()) newErr.pucBoard = "Board name is required.";
      if (!form.pucPercentage.trim()) newErr.pucPercentage = "Percentage is required.";
      if (!form.pucYear.trim()) newErr.pucYear = "Year of passing is required.";
    }
    if (step === 5) {
      if (!form.declaration) newErr.declaration = "You must agree to the declaration.";
    }

    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };

  const next = () => { if (validate()) setStep((s) => Math.min(s + 1, steps.length - 1)); };
  const prev = () => { setErrors({}); setStep((s) => Math.max(s - 1, 0)); };

  const handleSubmit = () => {
    if (!validate()) return;
    setSubmitted(true);
  };

  // ── Success Screen ──────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Application Submitted!</h2>
          <p className="text-slate-500 text-sm mb-2">
            Thank you, <strong>{form.fullName}</strong>. Your application for{" "}
            <strong>{form.specialization}</strong> has been received.
          </p>
          <p className="text-slate-500 text-sm mb-6">
            Our admissions team will contact you at{" "}
            <strong>{form.email}</strong> or <strong>{form.phone}</strong> shortly.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 text-sm text-blue-800 mb-6">
            For queries, call us at <br />
            <span className="font-bold">96632 63049 / 99805 40907 / 99642 80734</span>
          </div>
          <button
            onClick={() => { setSubmitted(false); setForm(initialForm); setStep(0); }}
            className="w-full bg-[#1e3a8a] text-white font-semibold py-3 rounded-xl hover:bg-blue-800 transition"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  // ── Progress Bar ────────────────────────────────────────────────────────────
  const progress = Math.round((step / (steps.length - 1)) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* ── Header ── */}
      <div className="bg-gradient-to-r from-[#c2410c] via-[#ea580c] to-[#c2410c] py-10 px-4 text-center">
        <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">
          Academic Year 2026–27
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">Application Form</h1>
        <p className="text-orange-200 text-sm mt-1">
          Sri Rama First Grade College, Hanuman Nagara, Kalladka
        </p>
      </div>

      {/* ── Step Indicator ── */}
      <div className="max-w-3xl mx-auto px-4 pt-8">
        {/* Progress bar */}
        <div className="relative mb-8">
          <div className="h-1.5 bg-slate-200 rounded-full">
            <div
              className="h-1.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-3">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const done = i < step;
              const active = i === step;
              return (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      done
                        ? "bg-orange-600 text-white"
                        : active
                        ? "bg-white border-2 border-orange-600 text-orange-600"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {done ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Icon className="w-4 h-4" />
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-semibold hidden sm:block ${
                      active ? "text-blue-700" : done ? "text-blue-500" : "text-slate-400"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Form Card ── */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden mb-12">
          {/* Card Header */}
          <div className="bg-slate-50 border-b border-slate-100 px-6 py-4">
            <h2 className="text-lg font-bold text-slate-800">
              Step {step + 1} — {steps[step].label}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Fields marked with <span className="text-red-500">*</span> are required
            </p>
          </div>

          <div className="px-6 py-7 space-y-6">

            {/* ── STEP 0: Course Selection ── */}
            {step === 0 && (
              <>
                <Field label="Application For" required>
                  <select
                    className={selectCls}
                    value={form.applicationFor}
                    onChange={(e) => {
                      set("applicationFor", e.target.value);
                      set("specialization", "");
                    }}
                  >
                    <option value="">-- Select Course --</option>
                    <option value="BCA">BCA – Bachelor of Computer Application</option>
                    <option value="B.Com">B.Com – Bachelor of Commerce</option>
                    <option value="B.A">B.A – Bachelor of Arts</option>
                  </select>
                  {errors.applicationFor && (
                    <p className="text-red-500 text-xs">{errors.applicationFor}</p>
                  )}
                </Field>

                {form.applicationFor && (
                  <Field label="Specialization / Stream" required>
                    <select
                      className={selectCls}
                      value={form.specialization}
                      onChange={(e) => set("specialization", e.target.value)}
                    >
                      <option value="">-- Select Specialization --</option>
                      {specializationMap[form.applicationFor]?.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.specialization && (
                      <p className="text-red-500 text-xs">{errors.specialization}</p>
                    )}
                  </Field>
                )}

                {/* Scholarship notice */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-amber-800">
                  <p className="font-bold mb-1">🎓 Scholarship Reminder</p>
                  <p>95% & above → <strong className="text-green-700">FREE Education</strong></p>
                  <p>92% & above → <strong className="text-blue-700">50% FREE Education</strong></p>
                  <p className="mt-1">All students get Free Computer Education & Free Mid Day Meal.</p>
                </div>
              </>
            )}

            {/* ── STEP 1: Personal Info ── */}
            {step === 1 && (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name (as per certificate)" required>
                    <input
                      className={inputCls}
                      placeholder="Enter your full name"
                      value={form.fullName}
                      onChange={(e) => set("fullName", e.target.value)}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
                  </Field>

                  <Field label="Gender" required>
                    <select
                      className={selectCls}
                      value={form.gender}
                      onChange={(e) => set("gender", e.target.value)}
                    >
                      <option value="">-- Select --</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
                  </Field>

                  <Field label="Date of Birth (dd/mm/yyyy)" required>
                    <input
                      type="date"
                      className={inputCls}
                      value={form.dob}
                      onChange={(e) => set("dob", e.target.value)}
                    />
                    {errors.dob && <p className="text-red-500 text-xs">{errors.dob}</p>}
                  </Field>

                  <Field label="Email ID" required>
                    <input
                      type="email"
                      className={inputCls}
                      placeholder="example@email.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                  </Field>

                  <Field label="Phone Number" required>
                    <input
                      type="tel"
                      className={inputCls}
                      placeholder="10-digit mobile number"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                  </Field>

                  <Field label="Nationality">
                    <input
                      className={inputCls}
                      placeholder="e.g. Indian"
                      value={form.nationality}
                      onChange={(e) => set("nationality", e.target.value)}
                    />
                  </Field>

                  <Field label="Mother Tongue">
                    <input
                      className={inputCls}
                      placeholder="e.g. Kannada"
                      value={form.motherTongue}
                      onChange={(e) => set("motherTongue", e.target.value)}
                    />
                  </Field>

                  <Field label="Languages (read, write & speak)">
                    <input
                      className={inputCls}
                      placeholder="e.g. Kannada, English, Hindi"
                      value={form.languages}
                      onChange={(e) => set("languages", e.target.value)}
                    />
                  </Field>

                  <Field label="Place of Birth (Place, Taluk & District)">
                    <input
                      className={inputCls}
                      placeholder="e.g. Kalladka, Bantwal, DK"
                      value={form.placeOfBirth}
                      onChange={(e) => set("placeOfBirth", e.target.value)}
                    />
                  </Field>

                  <Field label="State">
                    <input
                      className={inputCls}
                      placeholder="e.g. Karnataka"
                      value={form.state}
                      onChange={(e) => set("state", e.target.value)}
                    />
                  </Field>

                  <Field label="Religion">
                    <input
                      className={inputCls}
                      placeholder="e.g. Hindu"
                      value={form.religion}
                      onChange={(e) => set("religion", e.target.value)}
                    />
                  </Field>

                  <Field label="Caste">
                    <input
                      className={inputCls}
                      placeholder="Enter caste"
                      value={form.caste}
                      onChange={(e) => set("caste", e.target.value)}
                    />
                  </Field>

                  <Field label="Category">
                    <select
                      className={selectCls}
                      value={form.category}
                      onChange={(e) => set("category", e.target.value)}
                    >
                      <option value="">-- Select --</option>
                      <option>General / OC</option>
                      <option>OBC</option>
                      <option>SC</option>
                      <option>ST</option>
                      <option>EWS</option>
                    </select>
                  </Field>
                </div>
              </>
            )}

            {/* ── STEP 2: SSLC ── */}
            {step === 2 && (
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <Field label="Name and Address of the School (SSLC / Matric)" required>
                    <textarea
                      className={inputCls + " resize-none"}
                      rows={2}
                      placeholder="Enter full school name and address"
                      value={form.sslcSchool}
                      onChange={(e) => set("sslcSchool", e.target.value)}
                    />
                    {errors.sslcSchool && <p className="text-red-500 text-xs">{errors.sslcSchool}</p>}
                  </Field>
                </div>

                <Field label="Name of the Board / University (SSLC / Matric)" required>
                  <input
                    className={inputCls}
                    placeholder="e.g. KSEEB, CBSE, ICSE"
                    value={form.sslcBoard}
                    onChange={(e) => set("sslcBoard", e.target.value)}
                  />
                  {errors.sslcBoard && <p className="text-red-500 text-xs">{errors.sslcBoard}</p>}
                </Field>

                <Field label="Year of Passing (SSLC / Matric)" required>
                  <input
                    className={inputCls}
                    placeholder="e.g. 2022"
                    value={form.sslcYear}
                    onChange={(e) => set("sslcYear", e.target.value)}
                  />
                  {errors.sslcYear && <p className="text-red-500 text-xs">{errors.sslcYear}</p>}
                </Field>

                <div className="sm:col-span-2">
                  <Field label="Percentage and Class in which Passed (SSLC / Matric)" required>
                    <input
                      className={inputCls}
                      placeholder="e.g. 85% – First Class with Distinction"
                      value={form.sslcPercentage}
                      onChange={(e) => set("sslcPercentage", e.target.value)}
                    />
                    {errors.sslcPercentage && <p className="text-red-500 text-xs">{errors.sslcPercentage}</p>}
                  </Field>
                </div>
              </div>
            )}

            {/* ── STEP 3: PUC / 10+2 ── */}
            {step === 3 && (
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <Field label="Name and Address of the School / College (PUC / 10+2 or Equivalent)" required>
                    <textarea
                      className={inputCls + " resize-none"}
                      rows={2}
                      placeholder="Enter full college name and address"
                      value={form.pucSchool}
                      onChange={(e) => set("pucSchool", e.target.value)}
                    />
                    {errors.pucSchool && <p className="text-red-500 text-xs">{errors.pucSchool}</p>}
                  </Field>
                </div>

                <Field label="Name of the Board / University (PUC / 10+2)" required>
                  <input
                    className={inputCls}
                    placeholder="e.g. PUC Board Karnataka, CBSE"
                    value={form.pucBoard}
                    onChange={(e) => set("pucBoard", e.target.value)}
                  />
                  {errors.pucBoard && <p className="text-red-500 text-xs">{errors.pucBoard}</p>}
                </Field>

                <Field label="Year of Passing (PUC / 10+2)" required>
                  <input
                    className={inputCls}
                    placeholder="e.g. 2024"
                    value={form.pucYear}
                    onChange={(e) => set("pucYear", e.target.value)}
                  />
                  {errors.pucYear && <p className="text-red-500 text-xs">{errors.pucYear}</p>}
                </Field>

                <div className="sm:col-span-2">
                  <Field label="Percentage and Class in which Passed (PUC / 10+2)" required>
                    <input
                      className={inputCls}
                      placeholder="e.g. 92% – First Class with Distinction"
                      value={form.pucPercentage}
                      onChange={(e) => set("pucPercentage", e.target.value)}
                    />
                    {errors.pucPercentage && <p className="text-red-500 text-xs">{errors.pucPercentage}</p>}
                  </Field>
                </div>

                <div className="sm:col-span-2">
                  <Field label="Total Marks & Percentage in Physics, Chemistry, Mathematics / Biology at 10+2 level">
                    <input
                      className={inputCls}
                      placeholder="e.g. PCM – 280/300, 93.3%  (Leave blank if not applicable)"
                      value={form.pucSubjects}
                      onChange={(e) => set("pucSubjects", e.target.value)}
                    />
                  </Field>
                </div>
              </div>
            )}

            {/* ── STEP 4: Degree (Optional) ── */}
            {step === 4 && (
              <>
                <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-sm text-blue-800 mb-2">
                  This section is <strong>optional</strong>. Fill only if you have completed or are
                  pursuing a Degree (applicable for PG applicants or lateral entry).
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <Field label="Name and Address of the College (Degree Examination)">
                      <textarea
                        className={inputCls + " resize-none"}
                        rows={2}
                        placeholder="Enter full college name and address"
                        value={form.degreeCollege}
                        onChange={(e) => set("degreeCollege", e.target.value)}
                      />
                    </Field>
                  </div>

                  <Field label="Name of the Board / University (Degree)">
                    <input
                      className={inputCls}
                      placeholder="e.g. Mangalore University"
                      value={form.degreeBoard}
                      onChange={(e) => set("degreeBoard", e.target.value)}
                    />
                  </Field>

                  <Field label="Year of Passing (Degree)">
                    <input
                      className={inputCls}
                      placeholder="e.g. 2026"
                      value={form.degreeYear}
                      onChange={(e) => set("degreeYear", e.target.value)}
                    />
                  </Field>

                  <div className="sm:col-span-2">
                    <Field label="Percentage and Class in which Passed (Degree)">
                      <input
                        className={inputCls}
                        placeholder="e.g. 78% – First Class"
                        value={form.degreePercentage}
                        onChange={(e) => set("degreePercentage", e.target.value)}
                      />
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <Field label="Total Marks obtained and Percentage secured in PCM / PCB at 10+2 level">
                      <input
                        className={inputCls}
                        placeholder="e.g. Total: 560/600 – 93.3%"
                        value={form.degreeTotalMarks}
                        onChange={(e) => set("degreeTotalMarks", e.target.value)}
                      />
                    </Field>
                  </div>
                </div>
              </>
            )}

            {/* ── STEP 5: Review & Declaration ── */}
            {step === 5 && (
              <>
                {/* Summary */}
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-700 text-sm uppercase tracking-widest">
                    Application Summary
                  </h3>

                  {[
                    {
                      section: "Course",
                      rows: [
                        ["Course", form.applicationFor],
                        ["Specialization", form.specialization],
                      ],
                    },
                    {
                      section: "Personal",
                      rows: [
                        ["Full Name", form.fullName],
                        ["Gender", form.gender],
                        ["Date of Birth", form.dob],
                        ["Email", form.email],
                        ["Phone", form.phone],
                        ["Nationality", form.nationality],
                        ["State", form.state],
                        ["Category", form.category],
                      ],
                    },
                    {
                      section: "SSLC / 10th",
                      rows: [
                        ["School", form.sslcSchool],
                        ["Board", form.sslcBoard],
                        ["Percentage", form.sslcPercentage],
                        ["Year", form.sslcYear],
                      ],
                    },
                    {
                      section: "PUC / 10+2",
                      rows: [
                        ["College", form.pucSchool],
                        ["Board", form.pucBoard],
                        ["Percentage", form.pucPercentage],
                        ["Year", form.pucYear],
                      ],
                    },
                  ].map(({ section, rows }) => (
                    <div key={section} className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
                      <div className="bg-[#ea580c] px-4 py-2">
                        <p className="text-white text-xs font-bold uppercase tracking-wider">{section}</p>
                      </div>
                      <div className="divide-y divide-slate-100">
                        {rows.map(([label, val]) =>
                          val ? (
                            <div key={label} className="flex px-4 py-2.5 gap-4">
                              <p className="text-xs text-slate-500 w-32 shrink-0">{label}</p>
                              <p className="text-xs font-medium text-slate-800">{val}</p>
                            </div>
                          ) : null
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Declaration */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-sm text-amber-900 font-semibold mb-2">Declaration</p>
                  <p className="text-xs text-amber-800 mb-3 leading-relaxed">
                    I hereby declare that all the information furnished in this application form is true,
                    complete and correct to the best of my knowledge and belief. I understand that in the
                    event of any information being found false or incorrect, my admission is liable to be
                    cancelled.
                  </p>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-0.5 accent-orange-600"
                      checked={form.declaration}
                      onChange={(e) => set("declaration", e.target.checked)}
                    />
                    <span className="text-xs text-amber-900 font-medium">
                      I agree to the above declaration.
                      <span className="text-red-500"> *</span>
                    </span>
                  </label>
                  {errors.declaration && (
                    <p className="text-red-500 text-xs mt-1">{errors.declaration}</p>
                  )}
                </div>
              </>
            )}
          </div>

          {/* ── Navigation Buttons ── */}
          <div className="px-6 py-5 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
            <button
              onClick={prev}
              disabled={step === 0}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            {step < steps.length - 1 ? (
              <button
                onClick={next}
                className="flex items-center gap-2 bg-[#ea580c] hover:bg-orange-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition shadow-md"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition shadow-md"
              >
                <CheckCircle className="w-4 h-4" />
                Submit Application
              </button>
            )}
          </div>
        </div>

        {/* ── Contact Footer ── */}
        <div className="text-center pb-10 text-sm text-slate-500">
          Need help?{" "}
          <span className="font-semibold text-blue-700">96632 63049 / 99805 40907</span>
          {" · "}
          <a href="mailto:srfgck@gmail.com" className="text-orange-600 underline">
            srfgck@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}