import { useEffect, useRef, useState } from "react";
import { Clock, Info, MapPin } from "lucide-react";
import { MAP_IMAGE, MAP_POINTS } from "../config.js";
import Bus from "./Bus.jsx";

const TRAVEL_MS = 1100; // durée du trajet du bus

export default function MapSection() {
  const [activeId, setActiveId] = useState(MAP_POINTS[0].id); // lieu affiché dans l'encadré
  const [busId, setBusId] = useState(MAP_POINTS[0].id);       // lieu où se trouve le bus
  const [bus, setBus] = useState({ dir: 1, angle: 0, moving: false });
  const [imageOk, setImageOk] = useState(true);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const point = (id) => MAP_POINTS.find((p) => p.id === id);
  const active = point(activeId);
  const busPoint = point(busId);

  function goTo(id) {
    setActiveId(id);
    if (id === busId) return;
    const from = point(busId), to = point(id);
    const dx = to.x - from.x, dy = to.y - from.y;
    const dir = Math.abs(dx) < 1 ? bus.dir : dx > 0 ? 1 : -1;
    // Inclinaison : le museau du bus suit la pente du trajet (carte en 4/3, donc dy × 0,75).
    const angle = Math.max(-18, Math.min(18, (Math.atan2(dy * 0.75, Math.abs(dx)) * 180) / Math.PI)) * dir;
    setBus({ dir, angle, moving: true });
    setBusId(id);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setBus((b) => ({ ...b, angle: 0, moving: false })), TRAVEL_MS);
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-20" aria-labelledby="carte">
      <h2 id="carte" className="text-center font-display text-4xl sm:text-5xl">Les lieux</h2>
      <p className="mt-3 text-center text-sm text-terre">
        Retrouvez toutes les adresses pour ce weekend.
      </p>

      <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-3xl border border-trait bg-gradient-to-br from-sauge/40 to-bordeaux/15">
        {imageOk && (
          <img src={MAP_IMAGE} alt="Carte des lieux du mariage à Sciez" className="h-full w-full object-cover"
               onError={() => setImageOk(false)} />
        )}

        {MAP_POINTS.map(({ id, label, icon: Icon, x, y }) => {
          const on = id === activeId;
          return (
            <button
              key={id}
              type="button"
              aria-label={label}
              aria-pressed={on}
              onMouseEnter={() => setActiveId(id)}
              onFocus={() => setActiveId(id)}
              onClick={() => goTo(id)}
              style={{ left: `${x}%`, top: `${y}%` }}
              className={`absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-creme shadow-md transition-transform duration-200 ${
                on ? "scale-125 bg-bordeaux text-creme" : "bg-foret text-creme hover:scale-110"
              }`}
            >
              <Icon size={18} strokeWidth={1.75} aria-hidden />
            </button>
          );
        })}

        {/* Le bus : se déplace (left/top), s'incline (rotate) et se retourne selon la direction (scaleX) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-10 w-14 sm:w-20"
          style={{
            left: `${busPoint.x}%`,
            top: `${busPoint.y}%`,
            transform: "translate(-50%, -85%)",
            transition: `left ${TRAVEL_MS}ms cubic-bezier(.65,0,.35,1), top ${TRAVEL_MS}ms cubic-bezier(.65,0,.35,1)`,
          }}
        >
          <div style={{ transform: `rotate(${bus.angle}deg)`, transition: "transform 450ms ease-out" }}>
            <div style={{ transform: `scaleX(${bus.dir})`, transition: "transform 300ms ease-out" }}>
              <div className={bus.moving ? "bus-wobble" : ""}>
                <Bus />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-trait bg-ivoire p-6" aria-live="polite">
        <h3 className="font-display text-2xl">{active.label}</h3>
        <p className="mt-3 flex items-start gap-2">
          <Clock size={16} className="mt-1 shrink-0 text-terre" aria-hidden />
          <span className="min-w-0 whitespace-pre-line break-words">{active.time}</span>
        </p>
        <p className="mt-2 flex items-start gap-2">
          <MapPin size={16} className="mt-1 shrink-0 text-terre" aria-hidden />
          <span className="min-w-0 whitespace-pre-line break-words">{active.address}</span>
        </p>
        {active.detail && (
          <p className="mt-2 flex items-start gap-2 text-sm italic text-terre">
            <Info size={16} className="mt-0.5 shrink-0" aria-hidden />
            <span className="min-w-0 whitespace-pre-line break-words">{active.detail}</span>
          </p>
        )}
      </div>
    </section>
  );
}