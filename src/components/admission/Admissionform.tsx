import { useState } from "react";
import {
  User,
  BookOpen,
  GraduationCap,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  FileText,
} from "lucide-react";

// ── Types ──
interface FormData {
  applicationFor: string;
  specialization: string;
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
  sslcSchool: string;
  sslcBoard: string;
  sslcPercentage: string;
  sslcYear: string;
  pucSchool: string;
  pucBoard: string;
  pucPercentage: string;
  pucYear: string;
  pucSubjects: string;
  degreeCollege: string;
  degreeBoard: string;
  degreePercentage: string;
  degreeYear: string;
  degreeTotalMarks: string;
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

const steps = [
  { label: "Course", icon: BookOpen },
  { label: "Personal", icon: User },
  { label: "SSLC", icon: FileText },
  { label: "PUC", icon: FileText },
  { label: "Degree", icon: GraduationCap },
  { label: "Submit", icon: CheckCircle },
];

// ── Styles (UPDATED TO ORANGE) ──
const inputCls =
  "w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white";

const selectCls = inputCls;

// ── Component ──
export default function ApplicationForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof FormData, v: any) =>
    setForm((p) => ({ ...p, [k]: v }));

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
          <CheckCircle className="mx-auto text-green-600 w-12 h-12" />
          <h2 className="text-xl font-bold mt-4">Application Submitted!</h2>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm(initialForm);
              setStep(0);
            }}
            className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  const progress = (step / (steps.length - 1)) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      
      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#c2410c] via-[#ea580c] to-[#c2410c] text-center py-10 text-white">
        <h1 className="text-3xl font-bold">Application Form</h1>
        <p className="text-orange-200">Academic Year 2026–27</p>
      </div>

      <div className="max-w-3xl mx-auto p-4">

        {/* PROGRESS */}
        <div className="mb-6">
          <div className="h-2 bg-slate-200 rounded-full">
            <div
              className="h-2 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* CARD */}
        <div className="bg-white p-6 rounded-2xl shadow">

          {/* STEP CONTENT */}
          {step === 0 && (
            <>
              <select
                className={selectCls}
                onChange={(e) => set("applicationFor", e.target.value)}
              >
                <option>Select Course</option>
                <option>BCA</option>
                <option>B.Com</option>
                <option>B.A</option>
              </select>
            </>
          )}

          {step === 1 && (
            <input
              className={inputCls}
              placeholder="Full Name"
              onChange={(e) => set("fullName", e.target.value)}
            />
          )}

          {step === 5 && (
            <div>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  className="accent-orange-600"
                  onChange={(e) => set("declaration", e.target.checked)}
                />
                Accept Declaration
              </label>
            </div>
          )}

          {/* BUTTONS */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prev}
              disabled={step === 0}
              className="px-4 py-2 border rounded-lg"
            >
              <ChevronLeft />
            </button>

            {step < steps.length - 1 ? (
              <button
                onClick={next}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg"
              >
                Next <ChevronRight />
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}