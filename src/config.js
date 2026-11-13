import { Church, Wine, UtensilsCrossed, Music, Coffee, BedDouble, Bus, House } from "lucide-react";

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
    { time: "8h30", title: "Départ en bus", icon: Bus },
    { time: "9h", title: "Cérémonie à la Mairie de Sciez", icon: House },
    { time: "", title: "Départ pour Thollon-Les-Mémises", icon: Bus },
    { time: "", title: "Déjeuner", icon: UtensilsCrossed },
    { time: "17h", title: "Dernier téléphérique pour la redescente ", icon: Bus },
    { time: "18h", title: "Dîner et Soirée", icon: Music },
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
