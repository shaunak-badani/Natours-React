import './App.css'
import FrontBanner from './pages/FrontBanner';
import About from './pages/About'
import "./pages/Feature.scss";
import Feature from './pages/Feature';
import "./pages/Tours.scss";
import "./components/Card.scss";
import Tours from './pages/SectionTours';
import Stories from './pages/Stories';
import Booking from './pages/Booking';
import Footer from './pages/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <FrontBanner />
      {/* <GridTest /> */}
      <main>
        <About />
        <Feature />
        <Tours />
        <Stories />
        <Booking />
      </main>
      <Footer />
    </>
  )
}

export default App
