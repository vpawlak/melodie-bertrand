import Hero from "./components/Hero.jsx";
import Timeline from "./components/Timeline.jsx";
import RsvpForm from "./components/RsvpForm.jsx";
import MapSection from "./components/MapSection.jsx";

export default function App() {
  return (
    <main>
      <Hero />
      <Timeline />
      <RsvpForm />
      <MapSection />
      <footer className="py-10 text-center font-display text-lg italic text-lac">
        Mélodie & Bertrand · 27.03.2027
      </footer>
    </main>
  );
}
