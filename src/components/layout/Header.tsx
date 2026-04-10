import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import logo from "@/assets/logo1.jpeg"; 

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      {/* TOP NAVBAR */}
    <div className="w-full max-w-7xl mx-auto pl-0 pr-4 sm:pl-1 sm:pr-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 -ml-2">
          <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-white p-[1px] flex items-center justify-center">
  <img
    src={logo}
    alt="Logo"
    className="h-full w-full object-cover rounded-full scale-105"
  />
</div>
            <div className="block">
              <span className="font-semibold text-sm sm:text-lg leading-tight">
                Sri Rama First Grade College
              </span>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
Hanuman Nagara,Kalladka             </p>
            </div>
          </Link>

          {/* Navbar */}
          <Navbar onAboutClick={handleAboutClick} />
        </div>
      </div>

      {/* ✅ MARQUEE SECTION */}
      <div className="w-full bg-white text-black border-t border-gray-200 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee py-2 text-sm font-medium">
          🎓 Admissions Open 2026 &nbsp;&nbsp;|&nbsp;&nbsp; 📢 New Courses Available &nbsp;&nbsp;|&nbsp;&nbsp; 🏆 100% Placement Assistance &nbsp;&nbsp;|&nbsp;&nbsp; 📅 Apply Now for Scholarships
        </div>
      </div>
    </header>
  );
};

export default Header;