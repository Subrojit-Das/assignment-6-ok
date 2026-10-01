import React from "react";
import SavedPlansClient from "../components/SavedPlansClient";

export const metadata = {
  title: "Saved Plans | TecnoFit",
};

export default function SavedPlansPage() {
  return (
    <div className="container mx-auto p-5 text-white">
      <div>
        <h1 className="text-3xl font-bold pb-2">MY PLAN</h1>
        <p className="text-gray-400 text-sm">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <SavedPlansClient />
    </div>
  );
}