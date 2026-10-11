export type Activity = {
  time: string;
  title: string;
  description: string;
  cost: number;
};

export type Day = {
  day: number;
  activities: Activity[];
};

export type TripPlan = {
  destination: string;
  totalCost: number;
  days: Day[];
};

export type TripRequest = {
  destination: string;
  budget: number;
  days: number;
  interests: string;
};