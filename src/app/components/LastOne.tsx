import React from "react";
import LastOneClient from "./LastTwo";
import { Exercise } from "@/types/tecnoTypes";

interface LastOneProps {
  items: Exercise[];
}

export default function LastOne({ items }: LastOneProps) {
  return <LastOneClient items={items} />;
}