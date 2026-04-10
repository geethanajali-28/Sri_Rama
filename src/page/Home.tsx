import React from 'react';
import HeroSection from '../components/home/HeroSection';
import RankHolders from '../components/home/RankHolders';
import Spotlight from '../components/home/Spotlight';
import Testimonials from '../components/home/Testimonials';
import PlacementSection from '../components/home/PlacementSection';
import AboutCampus from '../components/home/AboutCampus';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* HERO */}
      <div className="relative">
        <HeroSection />
      </div>

      <RankHolders />
      <Spotlight />
      <Testimonials />
      <AboutCampus />
      
      

    </div>
  );
};

export default Home;