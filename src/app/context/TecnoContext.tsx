"use client";

import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { Exercise } from "@/types/tecnoTypes";

interface ContextType {
  planItems: Exercise[];
  savedItems: Exercise[];
  addToPlan: (data: Exercise) => void;
  saveForLater: (data: Exercise) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

const TecnoContextData = createContext<ContextType | undefined>(undefined);

export default function TecnoContext({ children }: { children: React.ReactNode }) {
  const [planItems, setPlanItems] = useState<Exercise[]>([]);
  const [savedItems, setSavedItems] = useState<Exercise[]>([]);

  const addToPlan = (data: Exercise) => {
    const isExist = planItems.find((item) => item.id === data.id);

    if (isExist) {
      toast.error(data.name + " already added");
    } else {
      setPlanItems([...planItems, data]);
      toast.success(data.name + " added to Plan!");
    }
  };

  const saveForLater = (data: Exercise) => {
    const isExist = savedItems.find((item) => item.id === data.id);

    if (isExist) {
      toast.error(data.name + " already saved!");
    } else {
      setSavedItems([...savedItems, data]);
      toast.success(data.name + " saved for later!");
    }
  };

  const removeFromPlan = (id: number) => {
    const filtered = planItems.filter((item) => item.id !== id);
    setPlanItems(filtered);
  };

  const removeFromSaved = (id: number) => {
    const filtered = savedItems.filter((item) => item.id !== id);
    setSavedItems(filtered);
  };

  return (
    <TecnoContextData.Provider
      value={{
        planItems,
        savedItems,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </TecnoContextData.Provider>
  );
}

export const useTecno = () => {
  const context = useContext(TecnoContextData);
  if (!context) {
    throw new Error("useTecno must be used inside TecnoContext Provider");
  }
  return context;
};