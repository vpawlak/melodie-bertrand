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
    { time: "", title: "Brunch convivial à la maison", icon: Coffee },
  ]},
];

// Carte : image dans /public/carte.webp
// x et y = position du bouton sur l’image, en %.
export const MAP_IMAGE = "/src/public/carte.webp";
export const MAP_POINTS = [
  { id: "ceremonie", label: "Cérémonie", icon: Church, x: 47, y: 43, time: "À définir", address: "Mairie de Sciez" },
  { id: "cocktail", label: "Cocktail", icon: Wine, x: 85, y: 27, time: "À définir", address: "Adresse à définir, Sciez" },
  { id: "soiree", label: "Dîner & soirée", icon: Music, x: 17, y: 12, time: "À définir", address: "Adresse à définir, Sciez" },
  { id: "hebergement", label: "Hébergement", icon: BedDouble, x: 15, y: 85, time: "À définir", address: "Adresse à définir, Sciez" },
];
