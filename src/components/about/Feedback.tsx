import { useState, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast.ts";
import { Star, CheckCircle, Loader2 } from "lucide-react";

export default function FeedbackPage() {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message || rating === 0) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      toast({
        title: "Feedback Submitted 🎉",
        description: "Thank you! Your feedback helps us improve.",
        duration: 3000,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-6 md:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Student Feedback Portal
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Help us improve your college experience with your valuable feedback.
        </p>
      </motion.div>

      {/* Success State */}
      {submitted ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <CheckCircle className="text-green-500" size={64} />
          <h2 className="text-2xl font-semibold mt-4 text-gray-900">Thank You!</h2>
          <p className="text-gray-600 mt-2">
            Your feedback has been submitted successfully.
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Card className="max-w-3xl mx-auto shadow-xl rounded-3xl border border-gray-200 bg-white">
            <CardContent className="p-8 space-y-6">
              {/* Name */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">Full Name *</label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="bg-gray-100 border-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">Email *</label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="bg-gray-100 border-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {/* Course */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">Course</label>
                <Input
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  placeholder="Enter your course"
                  className="bg-gray-100 border-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">Rating *</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={32}
                      className={`cursor-pointer transition transform hover:scale-125 ${
                        star <= rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">Your Feedback *</label>
                <Textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your feedback here..."
                  className="bg-gray-100 border-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {/* Submit */}
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white py-3 rounded-xl flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Submitting...
                  </>
                ) : (
                  "Submit Feedback"
                )}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">We Listen. We Improve.</h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Your feedback directly shapes the future of our college experience.
        </p>
      </motion.div>
    </div>
  );
}
