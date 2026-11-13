import { useEffect, useState } from "react";
import { WEDDING } from "../config.js";

function useCountdown(target) {
  const calc = () => {
    const diff = Math.max(0, new Date(target) - new Date());
    return {
      Jours: Math.floor(diff / 864e5),
      Heures: Math.floor(diff / 36e5) % 24,
      Minutes: Math.floor(diff / 6e4) % 60,
      Secondes: Math.floor(diff / 1e3) % 60,
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, [target]);
  return t;
}

export default function Hero() {
  const time = useCountdown(WEDDING.dateISO);
  return (
    <header className="flex min-h-svh flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="font-display text-[3.4rem] font-medium leading-[1.1] sm:text-8xl">
        Mélodie
        <span className="block text-3xl italic text-bordeaux sm:text-5xl">et</span>
        Bertrand
      </h1>
      <p className="mt-8 font-display text-3xl tracking-[0.2em] text-terre sm:text-4xl">{WEDDING.dateShort}</p>
      <p className="mt-8 max-w-md text-balance text-base leading-relaxed sm:text-lg">{WEDDING.intro}</p>

      <div className="mt-12 grid w-full max-w-md grid-cols-4 gap-2 sm:gap-4" role="timer" aria-label="Compte à rebours">
        {Object.entries(time).map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-trait bg-ivoire py-4">
            <div className="font-display text-3xl tabular-nums sm:text-4xl">{String(value).padStart(2, "0")}</div>
            <div className="mt-1 text-[0.7rem] text-terre sm:text-xs">{label}</div>
          </div>
        ))}
      </div>
    </header>
  );
}