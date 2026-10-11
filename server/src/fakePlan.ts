import type { TripPlan, TripRequest } from "./types";

export function getFakePlan(req: TripRequest): TripPlan {
  const days = Array.from({ length: req.days }, (_, i) => ({
    day: i + 1,
    activities: [
      { time: "Morning", title: "Walking tour", description: "Explore the old town.", cost: 20 },
      { time: "Afternoon", title: "Local lunch", description: "Try a famous local dish.", cost: 25 },
      { time: "Evening", title: "Sunset viewpoint", description: "Relax and take photos.", cost: 0 },
    ],
  }));

  return { destination: req.destination, totalCost: req.days * 45, days };
}