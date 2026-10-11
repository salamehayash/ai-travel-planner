import type { Day } from "../types";

export default function DayCard({ day }: { day: Day }) {
  return (
    <div className="day-card">
      <h3>Day {day.day}</h3>
      {day.activities.map((a, i) => (
        <div key={i} className="activity">
          <strong>{a.time}: {a.title}</strong> (${a.cost})
          <p>{a.description}</p>
        </div>
      ))}
    </div>
  );
}