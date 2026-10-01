"use server";

import { revalidatePath } from "next/cache";

export async function removePlanAction(id: number, type: "today" | "saved") {
  try {
    revalidatePath("/savedPlans");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to remove item" };
  }
}