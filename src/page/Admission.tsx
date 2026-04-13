
import React from "react";
import { Outlet } from "react-router-dom";

const Admission: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* HEADER */}
      <div className="bg-white py-10 text-center shadow-sm">
        <h1 className="text-4xl font-bold text-black">Admissions</h1>
        <p className="text-gray-600 mt-2">
          Apply for Academic Year 2026–27
        </p>
      </div>

      {/* ✅ Child pages will render here */}
      <Outlet />

    </div>
  );
};

export default Admission;