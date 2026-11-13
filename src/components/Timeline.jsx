import { PROGRAMME } from "../config.js";
 
export default function Timeline() {
  return (
    <section className="mx-auto max-w-xl px-6 py-20" aria-labelledby="programme">
      <h2 id="programme" className="text-center font-display text-4xl sm:text-5xl">Le programme du week-end</h2>
 
      <div className="mt-14 space-y-14">
        {PROGRAMME.map(({ day, items }) => (
          <div key={day}>
            <h3 className="mb-6 font-display text-2xl italic text-bordeaux">{day}</h3>
            <ol className="relative ml-5 border-l border-trait">
              {items.map(({ time, title, icon: Icon }) => (
                <li key={title} className="relative pb-8 pl-10 last:pb-0">
                  <span className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-trait bg-ivoire text-terre">
                    <Icon size={18} strokeWidth={1.5} aria-hidden />
                  </span>
                  <p className="pt-1.5 text-sm text-terre">{time || "Horaire à venir"}</p>
                  <p className="text-lg">{title}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
 