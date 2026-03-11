import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoStrip from './components/InfoStrip';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Booking from './components/Booking';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoStrip />
      <Services />
      <About />
      <Team />
      <Booking />
      <Footer />
      <ChatWidget />
    </>
  );
}
