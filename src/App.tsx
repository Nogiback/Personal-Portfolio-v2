import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Projects from './components/Projects';

// bg-gradient-to-tl from-background via-foreground/5 to-background

export default function App() {
  return (
    <>
      <NavBar />
      <div className='flex flex-col gap-12 text-foreground'>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
