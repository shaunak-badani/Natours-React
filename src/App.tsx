import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FrontBanner from './pages/FrontBanner';
import GridTest from './pages/GridTest';
import About from './pages/About'

function App() {

  return (
    <>
      <section>
        <FrontBanner />
        {/* <GridTest /> */}
        <main>
          <About />
        </main>
      </section>
    </>
  )
}

export default App
