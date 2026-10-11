import { useState } from "react";
import TripForm from "./components/TripForm";
import DayCard from "./components/DayCard";
import { createPlan } from "./api";
import type { TripPlan, TripRequest } from "./types";
import "./App.css";

export default function App() {
  const [plan, setPlan] = useState<TripPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(req: TripRequest) {
    setLoading(true);
    setError("");
    try {
      const result = await createPlan(req);
      setPlan(result);
    } catch {
      setError("Something went wrong. Is the server running?");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <h1>AI Travel Planner</h1>
      <TripForm onSubmit={handleSubmit} />

      {loading && <p>Planning your trip...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {plan && !loading && (
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