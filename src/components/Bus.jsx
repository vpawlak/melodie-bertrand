import { BUS_IMAGE } from "../config.js";
 
// Petit bus dessiné en SVG aux couleurs de la charte, tourné vers la droite.
// Pour utiliser votre propre image : renseignez BUS_IMAGE dans src/config.js.
export default function Bus() {
  if (BUS_IMAGE) {
    return <img src={BUS_IMAGE} alt="" className="block w-full select-none" draggable="false" />;
  }
  return (
    <svg viewBox="0 0 80 46" className="block w-full" aria-hidden="true">
      <ellipse cx="40" cy="43" rx="30" ry="2.5" className="fill-foret/20" />
      <path d="M6 10a6 6 0 0 1 6-6h46c6 0 11 3 14 9l5 9v14a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z" className="fill-bordeaux" />
      <path d="M6 28h71v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z" className="fill-sauge" />
      <g className="fill-creme">
        <rect x="11" y="10" width="11" height="10" rx="2" />
        <rect x="25" y="10" width="11" height="10" rx="2" />
        <rect x="39" y="10" width="11" height="10" rx="2" />
        <path d="M54 10h6c3 0 5 1.5 6.500 4.500L68 20H54Z" />
      </g>
      <circle cx="75" cy="30" r="1.8" className="fill-creme" />
      {[22, 58].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="37" r="6" className="fill-foret" />
          <circle cx={cx} cy="37" r="2.2" className="fill-creme" />
        </g>
      ))}
    </svg>
  );
}
 