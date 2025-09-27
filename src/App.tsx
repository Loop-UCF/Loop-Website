import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import EventsSection from './components/EventsSection';
import OfficersSection from './components/OfficersSection';
import SignupSection from './components/SignupSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <EventsSection />
        <OfficersSection />
        <SignupSection />
      </main>
      <Footer />
    </div>
  );
}