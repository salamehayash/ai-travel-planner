import type { TripPlan, TripRequest } from "./types";

const API_URL = "http://localhost:3000";

export async function createPlan(req: TripRequest): Promise<TripPlan> {
  const res = await fetch(`${API_URL}/api/plans`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  });

  if (!res.ok) {
    throw new Error("Failed to create plan");
  }

  return res.json();
}