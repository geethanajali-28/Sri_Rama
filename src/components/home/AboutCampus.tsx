import React from "react";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Established in",
    value: "1944",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600",
  },
  {
    title: "PG | Int. PG Programmes",
    value: "20 | 1",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",
  },
  {
    title: "Students",
    value: "4000+",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
  },
  {
    title: "PhD Programmes",
    value: "7",
    image:
      "https://images.unsplash.com/photo-1581091012184-5c2e3c52b3b3?w=600",
  },
];

export default function AboutSection() {
  return (
    <section className="relative bg-[#0f0a08] py-16 px-5 sm:px-10 overflow-hidden">

      {/* 🔥 Glow Background */}
      <div className="absolute w-[400px] h-[400px] bg-orange-500/20 blur-[120px] top-[-100px] left-[-100px] rounded-full" />
      <div className="absolute w-[300px] h-[300px] bg-yellow-400/20 blur-[120px] bottom-[-80px] right-[10%] rounded-full" />

      {/* MAIN GRID */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
            About Us
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
            SH College, located in Kochi, Kerala, is a renowned institution
            affiliated with Mahatma Gandhi University and managed by the
            Carmelites of Mary Immaculate.
          </p>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
            Rooted in the motto “A Righteous Heart Seeks After Wisdom,” SH
            College is committed to nurturing a morally grounded,
            intellectually vibrant, and socially responsible community.
          </p>

          {/* CTA */}
          <button className="flex items-center gap-3 font-semibold text-orange-400 group">
            Read More
            <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-full shadow-lg group-hover:scale-110 transition">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_30px_80px_rgba(234,88,12,0.4)]"
            >
              {/* IMAGE */}
              <img
                src={card.image}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition duration-500"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="relative p-6 h-full flex flex-col justify-end">

                <p className="text-gray-300 text-sm mb-1">
                  {card.title}
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                  {card.value}
                </h3>

                {/* Glow line */}
                <div className="mt-3 h-[2px] w-10 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full" />
              </div>

              {/* BORDER GLOW */}
              <div className="absolute inset-0 rounded-2xl border border-orange-400/20 group-hover:border-orange-400/50 transition" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}