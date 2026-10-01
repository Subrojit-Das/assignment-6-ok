import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b0c0f] text-white py-6 border-t border-gray-800/80 container mx-auto">
      <div className="w-full h-16 flex items-center justify-between px-8 container mx-auto">
        
        <div className="flex items-center gap-2">
          <img 
            src="/assets/logo.png" 
            alt="FitLog Logo" 
            className="w-6 h-6 object-contain"
          />
          <span className="font-extrabold text-base tracking-wider uppercase">
            FITLOG
          </span>
        </div>

        <div className="text-gray-400 text-xs md:text-sm font-normal text-center md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </div>

      </div>
    </footer>
  );
};

export default Footer;