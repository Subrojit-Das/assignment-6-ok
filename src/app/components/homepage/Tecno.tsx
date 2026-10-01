import React from 'react';
import Link from 'next/link';
import { Exercise } from '@/types/tecnoTypes';

const getExercises = async (): Promise<Exercise[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: 'no-store'
  });
  return res.json();
};

export default async function LibraryPage() {
  const exercises = await getExercises();

  return (
    <div className="bg-[#0d0f12] text-white p-6 md:p-12 font-sans container mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-black tracking-wider uppercase mb-1">
          THE LIBRARY
        </h1>
        <p className="text-gray-400 text-sm">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((item) => (
          <Link
            key={item.id}
            href={`/${item.id}`}
            className="bg-[#16191e] border border-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between hover:border-gray-600 transition-colors cursor-pointer"
          >
            <div className="relative w-full h-52 bg-gray-900">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.muscleGroups.map((group, index) => (
                    <span
                      key={index}
                      className="bg-[#ccff00] text-black font-bold text-[11px] px-2.5 py-0.5 rounded-full uppercase"
                    >
                      {group}
                    </span>
                  ))}
                </div>

                <h2 className="text-lg font-bold uppercase tracking-wide text-white leading-tight">
                  {item.name}
                </h2>

                <p className="text-gray-400 text-xs mt-1 mb-4">
                  {item.equipment}
                </p>
              </div>

              <div className="flex items-center gap-4 text-gray-400 text-xs border-t border-gray-800/60 pt-3">
                <div className="flex items-center gap-1.5">
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg></span>
                  <span>{item.duration} min</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M655-80 513-222l56-56 85 85 170-170 56 57L655-80ZM480-470Zm-68 260 89 89q-5 0-10.5.5t-10.5.5q-134 0-227-93t-93-227q0-129 86.5-245T480-880v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-698l18-22q74 42 117 117t43 163h-80q0-25-5-48.5t-14-46q-9-22.5-22.5-42.5T648-614q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-730q-78 66-119.5 140.5T240-440q0 82 48.5 145T412-210Z"/></svg></span>
                  <span>{item.caloriesBurned} kcal</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-yellow-400"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg></span>
                  <span>{item.rating}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}