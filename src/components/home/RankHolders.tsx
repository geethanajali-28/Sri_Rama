import React, { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const rankHolders = [
  {
    name: "Ms. Ashwini",
    rank: "2nd Rank",
    course: "MBA",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Ms. Prathima S",
    rank: "10th Rank",
    course: "MBA",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Ms. Meghala",
    rank: "6th Rank",
    course: "MCA",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Mr. Sohan Shetty",
    rank: "9th Rank",
    course: "M.Tech",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

export default function RankHoldersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-16 px-4 sm:px-10 bg-[#0b0706] overflow-hidden">

      {/* Glow BG */}
      <div className="absolute w-[350px] h-[350px] bg-orange-500/20 blur-[120px] top-[-100px] left-[-80px] rounded-full" />
      <div className="absolute w-[300px] h-[300px] bg-yellow-400/20 blur-[120px] bottom-[-80px] right-[10%] rounded-full" />

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-14 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
          Rank Holders
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Celebrating our top achievers and academic excellence.
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative max-w-7xl mx-auto">

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-2"
        >
          {rankHolders.map((student, index) => (
            <div
              key={index}
              className="snap-center min-w-[250px] sm:min-w-[280px] flex-shrink-0"
            >
              <div className="group relative">

                {/* IMAGE */}
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* LIGHT OVERLAY (Reduced for clarity) */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* SMALL GLASS CARD */}
                <div className="absolute bottom-3 left-3 right-3 backdrop-blur-lg bg-white/10 border border-white/10 rounded-xl px-3 py-2 shadow-xl transition-all duration-300 group-hover:translate-y-[-5px]">

                  <h3 className="text-white font-semibold text-sm leading-tight">
                    {student.name}
                  </h3>

                  <p className="text-orange-400 font-semibold text-xs">
                    {student.rank}
                  </p>

                  <div className="flex items-center justify-between mt-1">
                    <span className="text-gray-300 text-xs">
                      {student.course}
                    </span>

                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-md hover:scale-110 transition">
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* HOVER SHINE EFFECT */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />

                {/* BORDER GLOW */}
                <div className="absolute inset-0 rounded-3xl border border-orange-400/20 group-hover:border-orange-400/60 transition" />

              </div>
            </div>
          ))}
        </div>

        {/* ARROWS */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-[-10px] top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md border border-orange-400/30 p-3 rounded-full text-orange-400 hover:bg-orange-500 hover:text-white transition"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-[-10px] top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md border border-orange-400/30 p-3 rounded-full text-orange-400 hover:bg-orange-500 hover:text-white transition"
        >
          <ChevronRight size={18} />
        </button>

      </div>
    </section>
  );
}