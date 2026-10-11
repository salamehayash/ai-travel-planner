import { useState } from "react";
import TripForm from "./components/TripForm";
import DayCard from "./components/DayCard";
import { getFakePlan } from "./fakeplan";
import type { TripPlan, TripRequest } from "./types";
import "./App.css";

export default function App() {
  const [plan, setPlan] = useState<TripPlan | null>(null);

  function handleSubmit(req: TripRequest) {
    setPlan(getFakePlan(req));
  }

  return (
    <div className="app">
      <h1>AI Travel Planner</h1>
      <TripForm onSubmit={handleSubmit} />
      {plan && (
        <div>
          <h2>{plan.destination} (about ${plan.totalCost})</h2>
          {plan.days.map((d) => (
            <DayCard key={d.day} day={d} />
          ))}
        </div>
      )}
    </div>
  );
}