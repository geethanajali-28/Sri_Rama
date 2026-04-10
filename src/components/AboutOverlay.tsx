import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  onClose?: () => void;
}

const AboutOverlay: React.FC<Props> = ({ onClose }) => {
  const navigate = useNavigate();

  const itemsLeft = [
    "About the Institution",
    "Vision and Mission",
    "About The Principal",
    "Vice Principal’s Message",
    "Administration",
    "Strategic Plan",
    "Feedback",
  ];

  const itemsRight = [
    "Governing Bodies",
    "Faculty",
    "Location",
    "Affiliation",
    "Best Practices",
    "Institutional Distinctiveness",
    "Committees",
  ];

  const handleItemClick = (item: string) => {
    if (item === "Location") {
      navigate("/about/location");
      onClose?.();
    }
  };

  const renderItem = (item: string) => (
    <div
      key={item}
      className="border-b border-gray-200"
    >
      <button
        type="button"
        onClick={() => handleItemClick(item)}
        className="w-full flex items-center gap-3 py-4 text-[14px] text-gray-700 hover:text-gray-900 transition-colors"
      >
        <span className="text-gray-500 text-xs leading-none">▶</span>
        <span className="text-left">{item}</span>
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 z-40 overscroll-contain" onClick={onClose}>
      <div
        className="absolute top-16 left-1/2 -translate-x-1/2 w-[min(920px,calc(100vw-2rem))] rounded-none border border-gray-200 bg-white shadow-2xl p-6 md:p-7 animate-in fade-in slide-in-from-top-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-[1fr_1.25fr] gap-8 md:gap-10">

          {/* LEFT */}
          <div className="pt-2">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-gray-700">
              About Us
            </h1>
            <p className="mt-4 text-[14px] leading-relaxed text-gray-600 max-w-xl">
              Welcome to Shree Devi Institute of Technology (SDIT), Kenjar Mangalore – a premier institution
              dedicated to excellence in engineering education and holistic development.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            <div>{itemsLeft.map(renderItem)}</div>
            <div>{itemsRight.map(renderItem)}</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutOverlay;