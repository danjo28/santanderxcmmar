import { useState, useEffect } from "react";

const targetDate = new Date("2026-08-15T08:00:00");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = targetDate.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <div className="gap-4 md:gap-8 flex-row flex items-center justify-center text-left font-light font-mono text-2xl mx-[5px]">
      {units.map((u) => (
        <div key={u.label} className="text-center">
          <div className="font-heading text-4xl md:text-6xl text-foreground">{String(u.value).padStart(2, "0")}</div>
          <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{u.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
