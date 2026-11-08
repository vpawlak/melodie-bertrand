import { Church, Wine, UtensilsCrossed, Music, Coffee, BedDouble } from "lucide-react";

// ⚠️ À vérifier : le titre indiquait 27.03.2026 et le texte « 23 mars 2027 ».
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
export const FORM_URL = "";

// Programme : à compléter plus tard (laissez time: "" tant que ce n’est pas défini).
export const PROGRAMME = [
  { day: "Vendredi", items: [
    { time: "", title: "Accueil des invités", icon: BedDouble },
    { time: "", title: "Apéritif de bienvenue", icon: Wine },
  ]},
  { day: "Samedi", items: [
    { time: "", title: "Cérémonie", icon: Church },
    { time: "", title: "Cocktail", icon: Wine },
    { time: "", title: "Dîner", icon: UtensilsCrossed },
    { time: "", title: "Soirée dansante", icon: Music },
  ]},
  { day: "Dimanche", items: [
    { time: "", title: "Brunch", icon: Coffee },
  ]},
];

// Carte : placez votre image dans /public/carte.jpg
// x et y = position du bouton sur l’image, en %.
export const MAP_IMAGE = "/carte.jpg";
export const MAP_POINTS = [
  { id: "ceremonie", label: "Cérémonie", icon: Church, x: 30, y: 40, time: "À définir", address: "Adresse à définir, Sciez" },
  { id: "reception", label: "Réception", icon: UtensilsCrossed, x: 62, y: 58, time: "À définir", address: "Adresse à définir, Sciez" },
  { id: "hebergement", label: "Hébergement", icon: BedDouble, x: 48, y: 26, time: "À définir", address: "Adresse à définir, Sciez" },
];
