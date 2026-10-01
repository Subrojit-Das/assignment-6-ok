import React from 'react';
import { Exercise } from '@/types/tecnoTypes';
import PlanCardButton from '../components/tecSaved/planCard';
import SavedCardButton from '../components/tecSaved/savedCard';

type TecnoDetailsProps = {
  params: Promise<{
    id: string;
  }>;
};

async function getData(id: string): Promise<Exercise | null> {
  try {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
      cache: 'no-store',
    });

    if (res.ok) {
      const result = await res.json();
      if (Array.isArray(result)) return result[0] || null;
      if (result && result.data) return result.data;
      return result;
    }

    const allRes = await fetch(`https://api.abcz.workers.dev/api/fitlog`, {
      cache: 'no-store',
    });

    if (allRes.ok) {
      const allData = await allRes.json();
      const list = Array.isArray(allData) ? allData : allData.data || [];
      return list.find((ex: Exercise) => String(ex.id) === String(id)) || null;
    }

    return null;
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}

const TecnoDetails = async ({ params }: TecnoDetailsProps) => {
  const { id } = await params;
  const data: Exercise | null = await getData(id);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0d0f12] text-white flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Data Fetch Failed</h2>
        <p className="text-gray-400">Could not find exercise details for ID: {id}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0d0f12] text-white p-6 md:p-12 font-sans flex items-center justify-center container mx-auto">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="w-full h-[480px] lg:h-[580px] rounded-2xl overflow-hidden bg-gray-900 shadow-2xl border border-gray-800">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wider mb-2 text-white">
              {data.name}
            </h1>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {data.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {data.muscleGroups?.map((group: string, index: number) => (
                <span
                  key={index}
                  className="bg-[#ccff00] text-black font-bold text-xs px-3 py-1 rounded-full uppercase"
                >
                  {group}
                </span>
              ))}
            </div>

            <div className="bg-[#16191e] border border-gray-800 rounded-xl p-5 mb-8 space-y-3.5">
              <div className="flex justify-between items-center text-xs tracking-wider">
                <span className="text-gray-400 uppercase font-semibold">EQUIPMENT</span>
                <span className="text-white font-medium">{data.equipment}</span>
              </div>
              <div className="flex justify-between items-center text-xs tracking-wider border-t border-gray-800/80 pt-3.5">
                <span className="text-gray-400 uppercase font-semibold">DIFFICULTY</span>
                <span className="text-white font-medium capitalize">{data.difficulty}</span>
              </div>
              <div className="flex justify-between items-center text-xs tracking-wider border-t border-gray-800/80 pt-3.5">
                <span className="text-gray-400 uppercase font-semibold">SETS</span>
                <span className="text-white font-medium">{data.sets}</span>
              </div>
              <div className="flex justify-between items-center text-xs tracking-wider border-t border-gray-800/80 pt-3.5">
                <span className="text-gray-400 uppercase font-semibold">REPS</span>
                <span className="text-white font-medium">{data.reps}</span>
              </div>
              <div className="flex justify-between items-center text-xs tracking-wider border-t border-gray-800/80 pt-3.5">
                <span className="text-gray-400 uppercase font-semibold">DURATION</span>
                <span className="text-white font-medium">{data.duration} min</span>
              </div>
              <div className="flex justify-between items-center text-xs tracking-wider border-t border-gray-800/80 pt-3.5">
                <span className="text-gray-400 uppercase font-semibold">CALORIES</span>
                <span className="text-white font-medium">{data.caloriesBurned} kcal</span>
              </div>
              <div className="flex justify-between items-center text-xs tracking-wider border-t border-gray-800/80 pt-3.5">
                <span className="text-gray-400 uppercase font-semibold">RATING</span>
                <span className="text-white font-medium">{data.rating}</span>
              </div>
            </div>
            {data.instructions && data.instructions.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white">
                  INSTRUCTIONS
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-xs text-gray-300 leading-relaxed">
                  {data.instructions.map((step: string, idx: number) => (
                    <li key={idx} className="pl-1">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <PlanCardButton data={data} />
            <SavedCardButton data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TecnoDetails;