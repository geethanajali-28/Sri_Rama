import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const LocationPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">

      {/* HERO */}
      <div className="relative h-[300px] md:h-[380px] w-full overflow-hidden">
        <img
          src="/college.jpg"
          alt="Sri Rama College"
          className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold uppercase text-white drop-shadow-lg leading-tight">
                OUR LOCATION
              </h1>
              <p className="mt-4 text-sm tracking-widest uppercase text-white/80">
                HOME » ABOUT » LOCATION
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-16">

        <Card className="backdrop-blur-lg bg-white/80 shadow-xl rounded-2xl border border-gray-200">
          <CardContent className="p-8 md:p-12">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* LEFT INFO */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Visit Our Campus
                </h2>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  Sri Rama College is located in Kalladka, Bantwal Taluk of
                  Dakshina Kannada district, Karnataka. The campus provides a
                  peaceful and ideal environment for academic excellence.
                </p>

                <div className="space-y-6">

                  {/* ADDRESS */}
                  <div className="flex gap-4 group">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Address</p>
                      <p className="text-gray-600 text-sm">
                        Sri Rama College, Kalladka <br />
                        Bantwal Taluk, Dakshina Kannada <br />
                        Karnataka, India
                      </p>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex gap-4 group">
                    <div className="bg-green-100 text-green-600 p-3 rounded-lg group-hover:bg-green-600 group-hover:text-white transition">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <a
                        href="tel:+919876543210"
                        className="text-gray-600 text-sm hover:text-primary transition"
                      >
                        +91 9876543210
                      </a>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="flex gap-4 group">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <a
                        href="mailto:info@sriramacollege.edu"
                        className="text-gray-600 text-sm hover:text-primary transition"
                      >
                        info@sriramacollege.edu
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* MAP */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 group">
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

                  <iframe
                    src="https://www.google.com/maps?q=Sri+Rama+College+Kalladka&output=embed"
                    width="100%"
                    height="350"
                    loading="lazy"
                    className="border-0"
                  ></iframe>
                </div>
              </div>

            </div>

          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default LocationPage;