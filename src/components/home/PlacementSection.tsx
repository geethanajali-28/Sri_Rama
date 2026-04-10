import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const recruiters = [
  { name: "Intuit", logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Intuit_logo_2022.svg" },
  { name: "Harman", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Harman_logo.svg" },
  { name: "Bosch", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Bosch-logo.svg" },
  { name: "Tesco", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Tesco_Logo.svg" },
  { name: "ITC Infotech", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/ITC_Limited_Logo.svg" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
];

const RecruitersCarousel = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(5);

  // 📱 Responsive visible items
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 768) setVisible(2);
      else if (window.innerWidth < 1024) setVisible(3);
      else setVisible(5);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // ⏱ Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + 1 > recruiters.length - visible ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [visible]);

  const next = () => {
    setIndex((prev) =>
      prev + 1 > recruiters.length - visible ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? recruiters.length - visible : prev - 1
    );
  };

  return (
    <section className="relative py-12 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
          OUR TOP RECRUITERS
        </h2>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500"
            style={{
              transform: `translateX(-${index * (100 / visible)}%)`,
            }}
          >
            {recruiters.map((item, i) => (
              <div
                key={i}
                className="min-w-[100%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[20%]"
              >
                <div className="bg-white rounded-xl flex items-center justify-center p-5 shadow-md hover:shadow-xl transition group h-24">
                  <img
                    src={item.logo}
                    alt={item.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/120x40?text=Logo";
                    }}
                    className="h-10 object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={prev}
            className="bg-white text-black p-3 rounded-full shadow hover:bg-gray-200 active:scale-95 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="bg-white text-black p-3 rounded-full shadow hover:bg-gray-200 active:scale-95 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default RecruitersCarousel;