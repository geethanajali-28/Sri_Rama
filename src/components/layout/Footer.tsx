import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Campus', path: '/campus' },
    { name: 'Placements', path: '/placements' },
    { name: 'IQAC', path: '/iqac' },
    { name: 'Contact', path: '/contact' },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Sri Rama Degree College, Main Road, Hyderabad - 500001' },
    { icon: Phone, text: '+91 9876543210' },
    { icon: Mail, text: 'info@sriramacollege.edu.in' },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-4 mx-2 sm:mx-0 rounded-xl sm:rounded-none overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-10">

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

          {/* About */}
          <div className="col-span-2 md:col-span-1 min-w-0">
            <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-4">
              Sri Rama College
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm break-words">
              Empowering students with quality education and holistic development since 1995.
              Committed to excellence in higher education.
            </p>

            <div className="flex space-x-3 mt-3">
              <FaFacebook className="h-5 w-5 cursor-pointer hover:text-blue-500" />
              <FaTwitter className="h-5 w-5 cursor-pointer hover:text-sky-400" />
              <FaInstagram className="h-5 w-5 cursor-pointer hover:text-pink-500" />
              <FaYoutube className="h-5 w-5 cursor-pointer hover:text-red-500" />
            </div>
          </div>

          {/* Links */}
          <div className="min-w-0">
            <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary text-xs sm:text-sm break-words"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex gap-2 text-gray-400 items-start min-w-0">
                  <item.icon className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="text-xs sm:text-sm break-words">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1 min-w-0">
            <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-4">
              Newsletter
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm mb-2 break-words">
              Get updates about admissions and events.
            </p>

            <div className="flex gap-2 min-w-0">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 min-w-0 px-2 py-1 text-xs sm:text-sm rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
              />
              <button className="px-3 py-1 text-xs sm:text-sm bg-primary text-white rounded whitespace-nowrap">
                Go
              </button>
            </div>
          </div>

        </div>

        {/* 🔥 DIVINE LINE */}
        <div className="mt-8 text-center">
          <p className="text-sm sm:text-lg md:text-xl font-bold tracking-wide bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,140,0,0.5)]">
            Lokah Samasta Sukhino Bhavantu
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2026 VINYASA. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;