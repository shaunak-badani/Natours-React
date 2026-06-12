import './App.css'
import FrontBanner from './pages/FrontBanner';
import About from './pages/About'
import "./pages/Feature.scss";
import Feature from './pages/Feature';

function App() {
  return (
    <>
      <section>
        <FrontBanner />
        {/* <GridTest /> */}
        <main>
          <About />
          <Feature />
        </main>
      </section>
    </>
  )
}

export default App
