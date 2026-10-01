import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const BannerSection: React.FC = () => {
  return (
    <section className="w-full py-6">
      <div className="container mx-auto px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#121318] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-800">
          
          {/* Text Content */}
          <div className="flex-1 z-10 max-w-xl">
            <span className="text-[#a8ff00] text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 block">
              WORKOUT LIBRARY
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05] mb-4">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>
            <p className="text-gray-400 text-sm md:text-base mb-8 max-w-lg leading-relaxed">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>
            <Link href="#">
              <button className="bg-[#a8ff00] hover:bg-[#96e600] text-black font-bold text-xs md:text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg transition-colors duration-200 cursor-pointer">
                BROWSE WORKOUTS
              </button>
            </Link>
          </div>

          {/* Banner Image */}
          <div className="flex-1 flex justify-center md:justify-end z-10 w-full max-w-md relative min-h-[280px]">
            <Image
              src="/assets/banner.png"
              alt="Workout Equipment"
              width={500}
              height={350}
              priority
              className="w-full h-auto max-h-[350px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BannerSection;