// App is intentionally kept as a simple layout shell — all logic lives inside each section component
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function App() {
  return (
    // Fragment avoids an unnecessary wrapper div around the fixed navbar + main content
    <>
      <Navbar />
      {/* main wraps all scroll sections so screen readers understand the page structure */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
