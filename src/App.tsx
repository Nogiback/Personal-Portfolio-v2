import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className='bg-gradient-to-tl from-background via-foreground/5 to-background text-foreground'>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
