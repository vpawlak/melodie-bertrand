import { Church, Wine, Utensils, Music, Coffee, BedDouble, Bus, House, EggFried, CableCar, Utensils } from "lucide-react";

// J'ai retenu le samedi 27 mars 2027. Modifiez ici, tout le site se met à jour.
export const WEDDING = {
  names: "Mélodie & Bertrand",
  dateISO: "2027-03-27T15:00:00",
  dateShort: "27.03.2027",
  place: "Sciez",
  intro:
    "Mélodie et Bertrand ont l’honneur de vous convier à leur mariage le week-end du 27 mars 2027 à Sciez.",
};

// Collez ici le lien « Envoyer » > « < > Intégrer » de votre Google Forms (l’URL du src de l’iframe).
// Exemple : https://docs.google.com/forms/d/e/XXXXXXXX/viewform?embedded=true
export const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeb8hhAcJh7KHZQJS9d86oNeJNPshm9d4BZ9AjjqXEJitAHcQ/viewform?usp=publish-editor";

// Programme : à compléter plus tard (laissez time: "" tant que ce n’est pas défini).
export const PROGRAMME = [
  { day: "Vendredi", items: [
    { time: "", title: "Accueil des invités", icon: BedDouble },
    { time: "", title: "Dîner façon Auberge Espagnole", icon: Wine },
  ]},
  { day: "Samedi", items: [
    { time: "8h30", title: "Départ en bus depuis Excenevex", icon: Bus },
    { time: "9h", title: "Cérémonie à la Mairie de Sciez", icon: House },
    { time: "10h30", title: "Départ pour Thollon-Les-Mémises", icon: Bus },
    { time: "12h", title: "Déjeuner", icon: Utensils },
    { time: "17h", title: "Dernier téléphérique pour la redescente ", icon: CableCar },
    { time: "18h", title: "Dîner et Soirée", icon: Music },
  ]},
  { day: "Dimanche", items: [
    { time: "11h", title: "Brunch convivial à la maison", icon: Coffee },
  ]},
];

// Carte : image dans /public/carte.webp
// x et y = position du bouton sur l’image, en %.
export const MAP_IMAGE = "/src/public/carte.png";
// Votre propre image de bus (PNG/WebP transparent, tourné vers la droite) : placez-la dans /public
// puis indiquez par exemple "/bus.png". Laissez vide pour garder le bus dessiné par défaut.
export const BUS_IMAGE = "/src/public/bus.png";
export const MAP_POINTS = [
  { id: "ceremonie", label: "Cérémonie", icon: Church, x: 47, y: 60, time: "9h", address: "Mairie de Sciez, \n614 Av. de Sciez,\n 74140 Sciez" },
  { id: "cocktail", label: "Cocktail et déjeuner", icon: Wine, x: 85, y: 40, time: "12h", address: "Les Balcons du Lac\n70 imp du Schuss\n74500 Thollon-les-Mémises" },
  { id: "soiree", label: "Dîner & soirée", icon: Music, x: 17, y: 28, time: "18h", address: "Centre de vacances Stelia Airbus \n1191 Rte du Lac \n74140 Excenevex" },
  { id: "brunch", label: "Brunch à la maison", icon: EggFried , x: 15, y: 65, time: "Dimanche - 11h", address: "73 chemin des Huches \n74140 Sciez" },
];
