import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Philomina Ida Lobo",
    role: "Academic Advisor",
    content:
      "With 32 years of heartfelt service, my goal is to nurture every child to be confident, ethical, and inspired to grow.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mahesh J Shetty",
    role: "Secretary",
    content:
      "Our management team ensures academic excellence and character development.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Prahallada J Shetty",
    role: "President",
    content:
      "Our school stands as a beacon of knowledge and innovation.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

export default function PremiumTestimonials() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  // swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section className="relative py-16 px-4 bg-[#0f0a08] overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-orange-500/20 blur-[120px] top-[-100px] left-[-100px] rounded-full" />
      <div className="absolute w-[300px] h-[300px] bg-orange-400/20 blur-[120px] bottom-[-80px] right-[10%] rounded-full" />

      {/* 🔥 Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
          Testimonials
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
          Hear from our students, alumni, and faculty as they share their experiences.
        </p>
      </div>

      {/* 🔥 Cards */}
      <div
        className="max-w-5xl mx-auto flex items-center justify-center gap-6 relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {testimonials.map((t, i) => {
          const isActive = i === index;

          return (
            <div
              key={i}
              className={`relative transition-all duration-500 ${
                isActive
                  ? "scale-100 opacity-100 z-10"
                  : "scale-90 opacity-40 hidden sm:block"
              }`}
            >
              {/* Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-orange-400/20 rounded-3xl px-6 pt-14 pb-8 text-center shadow-[0_20px_60px_rgba(234,88,12,0.3)] w-[280px] sm:w-[320px]">

                {/* Avatar */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <div className="p-1 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-[#0f0a08]"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="mt-2 text-white font-semibold text-lg">
                  {t.name}
                </h3>
                <p className="text-orange-400 text-sm mb-3">{t.role}</p>

                {/* Stars */}
                <div className="flex justify-center mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  “{t.content}”
                </p>

                {/* Quote icon */}
                <div className="text-orange-500 text-6xl mt-4 opacity-30">
                  “
                </div>
              </div>
            </div>
          );
        })}
      </div>

     
    </section>
  );
}