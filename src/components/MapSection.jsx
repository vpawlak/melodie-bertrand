import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { MAP_IMAGE, MAP_POINTS } from "../config.js";

export default function MapSection() {
  const [activeId, setActiveId] = useState(MAP_POINTS[0].id);
  const [imageOk, setImageOk] = useState(true);
  const active = MAP_POINTS.find((p) => p.id === activeId);

  return (
    <section className="mx-auto max-w-3xl px-4 py-20" aria-labelledby="carte">
      <h2 id="carte" className="text-center font-display text-4xl sm:text-5xl">Les lieux</h2>
      <p className="mt-3 text-center text-sm text-terre">Survolez ou touchez un repère pour voir les détails.</p>

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
              onClick={() => setActiveId(id)}
              style={{ left: `${x}%`, top: `${y}%` }}
              className={`absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-creme shadow-md transition-transform duration-200 ${
                on ? "scale-125 bg-bordeaux text-creme" : "bg-foret text-creme hover:scale-110"
              }`}
            >
              <Icon size={18} strokeWidth={1.75} aria-hidden />
            </button>
          );
        })}
      </div>

      <div className="mt-4 rounded-2xl border border-trait bg-ivoire p-6" aria-live="polite">
        <h3 className="font-display text-2xl">{active.label}</h3>
        <p className="mt-3 flex items-center gap-2"><Clock size={16} className="text-terre" aria-hidden /> {active.time}</p>
        <p className="mt-2 flex items-center gap-2"><MapPin size={16} className="text-terre" aria-hidden /> {active.address}</p>
      </div>
    </section>
  );
}