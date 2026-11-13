import { ExternalLink } from "lucide-react";
import { FORM_URL } from "../config.js";

export default function RsvpForm() {
  return (
    <section className="bg-sauge/20 px-4 py-20" aria-labelledby="presence">
      <div className="mx-auto max-w-xl text-center">
        <h2 id="presence" className="font-display text-4xl sm:text-5xl">Confirmez votre présence</h2>
        <p className="mt-4 text-base">Merci de répondre avant le 27 janvier 2027.</p>

        {FORM_URL ? (
          <>
            <iframe
              src={FORM_URL}
              title="Formulaire de présence"
              className="mt-8 h-[900px] w-full rounded-2xl border border-trait"
              loading="lazy"
            >
              Chargement…
            </iframe>
            <a href={FORM_URL.replace("?embedded=true", "")} target="_blank" rel="noreferrer"
               className="mt-4 inline-flex items-center gap-2 text-sm text-terre underline underline-offset-4">
              <ExternalLink size={14} aria-hidden /> Ouvrir le formulaire dans un nouvel onglet
            </a>
          </>
        ) : (
          <p className="mt-8 rounded-2xl border border-dashed border-trait p-8 text-sm text-terre">
            Le formulaire apparaîtra ici. Ajoutez son lien dans <code>src/config.js</code> (FORM_URL).
          </p>
        )}
      </div>
    </section>
  );
}