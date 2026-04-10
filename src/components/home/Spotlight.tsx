import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS = [
  {
    title: "Sports",
    sub: "Athletics",
    image:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=700",
  },
  {
    title: "Infrastructure",
    sub: "Campus",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700",
  },
  {
    title: "Cafeteria",
    sub: "Dining",
    image:
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=700",
  },
  {
    title: "Lab & Research",
    sub: "Innovation",
    image:
      "https://images.unsplash.com/photo-1532094349884-543559c08671?w=700",
  },
  {
    title: "Library",
    sub: "Knowledge Hub",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700",
  },
];

export default function UltraCarousel() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // 🔁 Infinite auto slide
  useEffect(() => {
    const id = setInterval(() => next(), 3500);
    return () => clearInterval(id);
  }, [index]);

  const next = () => setIndex((prev) => (prev + 1) % ITEMS.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + ITEMS.length) % ITEMS.length);

  // 📱 Swipe
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
    <section className="ultra-section">
      {/* 🔥 Glow Background */}
      <div className="glow glow1" />
      <div className="glow glow2" />

      {/* Header */}
      <div className="ultra-header">
        <h2>Spotlight</h2>
        <p>Explore campus excellence in a premium experience</p>
      </div>

      {/* Carousel */}
      <div
        className="ultra-carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {ITEMS.map((item, i) => {
          const offset = (i - index + ITEMS.length) % ITEMS.length;

          let position = offset;
          if (offset > ITEMS.length / 2) position -= ITEMS.length;

          return (
            <div
              key={i}
              className="ultra-card"
              style={{
                transform: `
                  translateX(${position * 120}%)
                  scale(${position === 0 ? 1.2 : 0.8})
                  rotateY(${position * -25}deg)
                `,
                zIndex: position === 0 ? 10 : 5,
                opacity: Math.abs(position) > 2 ? 0 : 1,
              }}
            >
              <div className="card-inner">
                <img src={item.image} alt={item.title} />

                <div className="overlay" />

                <div className="content">
                  <p>{item.sub}</p>
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrows */}
      <div className="ultra-nav">
        <button onClick={prev}>
          <ChevronLeft />
        </button>
        <button onClick={next}>
          <ChevronRight />
        </button>
      </div>

      {/* 🔥 STYLES */}
      <style>{`
        .ultra-section {
          position: relative;
          padding: 4rem 1rem;
          background: #0f0a08;
          overflow: hidden;
          text-align: center;
        }

        /* Glow */
        .glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.3;
        }
        .glow1 {
          width: 400px;
          height: 400px;
          background: #ea580c;
          top: -100px;
          left: -100px;
        }
        .glow2 {
          width: 300px;
          height: 300px;
          background: #fbbf24;
          bottom: -80px;
          right: 10%;
        }

        /* Header */
        .ultra-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(90deg, #fb923c, #fde68a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ultra-header p {
          color: rgba(255,255,255,0.5);
          margin-top: 8px;
        }

        /* Carousel */
        .ultra-carousel {
          position: relative;
          height: 320px;
          margin-top: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1200px;
        }

        .ultra-card {
          position: absolute;
          width: 220px;
          height: 220px;
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1),
                      opacity 0.5s;
        }

        .card-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          box-shadow: 0 20px 60px rgba(234,88,12,0.4);
        }

        .card-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, transparent 40%, rgba(0,0,0,0.8));
        }

        .content {
          position: absolute;
          bottom: 20px;
          width: 100%;
          text-align: center;
          color: white;
        }

        .content p {
          font-size: 10px;
          color: #fb923c;
          letter-spacing: 2px;
        }

        .content h3 {
          font-size: 14px;
          font-weight: bold;
        }

        /* Nav */
        .ultra-nav {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .ultra-nav button {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(251,146,60,0.3);
          color: #fb923c;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }

        .ultra-nav button:hover {
          background: #ea580c;
          color: white;
          transform: scale(1.1);
        }

        /* Mobile */
        @media (max-width: 640px) {
          .ultra-carousel {
            height: 260px;
          }

          .ultra-card {
            width: 180px;
            height: 180px;
          }
        }
      `}</style>
    </section>
  );
}