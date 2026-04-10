import React, { useState, useEffect, useRef } from "react";

const slides = [
  "https://images.unsplash.com/photo-1562774053-701939374585?w=1920",
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920",
];

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      setCurrent((prev) => (prev + 1) % slides.length);
    }
    if (touchEndX.current - touchStartX.current > 50) {
      setCurrent((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
      );
    }
  };

  return (
    <section
    className="relative h-[65vh] sm:min-h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          <img
            src={src}
            className={`w-full h-full object-cover transition-transform duration-[6000ms] ${
              i === current ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-orange-900/60 to-orange-500/40" />
        </div>
      ))}

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col justify-start pt-10 px-5 sm:px-12 sm:justify-center sm:h-full">
        <div className="max-w-4xl text-white">

          <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6 shadow-lg">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            <span className="text-sm tracking-wide">
              Admissions Open 2024-25
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            <span className="text-white">Welcome to </span>
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Sri Rama
            </span>
          </h1>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-8 max-w-2xl">
            Blending heritage with education for a brighter tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg hover:bg-orange-500/20 transition">
              Apply Now →
            </button>

            <button className="px-6 py-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg hover:bg-orange-500/20 transition">
              Contact Us →
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 DIVINE IMAGE */}
      <div className="pointer-events-none absolute bottom-4 right-4 sm:bottom-6 sm:right-8 lg:bottom-10 lg:right-12 z-30">

        <div className="relative flex items-center justify-center">

          {/* 🌟 Rotating Aura Ring */}
          <div className="absolute w-[140%] h-[140%] rounded-full border border-orange-400/40 animate-spin-slow" />

          {/* 🔥 Pulsing Glow */}
          <div className="absolute w-[120%] h-[120%] rounded-full bg-orange-500/20 blur-[40px] animate-pulse-slow" />

          {/* ✨ Gradient Halo */}
          <div className="absolute w-[160%] h-[160%] rounded-full bg-gradient-to-r from-orange-400/10 via-yellow-300/20 to-orange-500/10 blur-[80px]" />

          {/* 🧘 Image */}
         <img
  src="https://i.pinimg.com/originals/43/47/be/4347be3795887d7e2bb0f7ea5d0aeaf0.jpg"
  alt="Sri Rama"
  className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[260px] aspect-square object-cover object-[50%_30%] rounded-full border-4 border-orange-400/50 shadow-[0_0_50px_rgba(255,140,0,0.8)] animate-float"
/>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition ${
              i === current
                ? "w-6 h-2 bg-orange-400"
                : "w-3 h-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;