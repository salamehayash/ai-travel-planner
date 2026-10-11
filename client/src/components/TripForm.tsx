import { useState } from "react";
import type { TripRequest } from "../types";

export default function TripForm({ onSubmit }: { onSubmit: (req: TripRequest) => void }) {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState(1000);
  const [days, setDays] = useState(3);
  const [interests, setInterests] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({ destination, budget, days, interests });
  }

  return (
    <form onSubmit={handleSubmit} className="trip-form">
      <input
        placeholder="Where to?"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Budget (USD)"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Days"
        min={1}
        max={14}
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
      />
      <input
        placeholder="Interests (food, hiking, museums...)"
        value={interests}
        onChange={(e) => setInterests(e.target.value)}
      />
      <button type="submit">Plan my trip</button>
    </form>
  );
}