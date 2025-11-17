import About from './About';
import Background from './Background';
import Contact from './Contact';
import Experience from './Experience';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-slate-100">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
