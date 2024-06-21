import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Projects from './components/Projects';
import ScrollToTop from './components/ui/ScrollToTop';

export default function App() {
  return (
    <div className='relative flex flex-col gap-12 overflow-x-hidden text-foreground'>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
