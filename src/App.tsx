import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Projects from './components/Projects';
import ScrollToTop from './components/ui/ScrollToTop';

export default function App() {
  return (
    <div className='flex flex-col gap-12 text-foreground'>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
