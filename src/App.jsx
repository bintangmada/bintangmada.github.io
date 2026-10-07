import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioDict from './data/portfolio.json';

function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'id';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const data = portfolioDict[lang];

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-0">
        <Navbar data={data} lang={lang} setLang={setLang} />

        <main className="flex flex-col gap-24 md:gap-32 pb-12">
          <Hero data={data} />
          <Projects data={data} />
          <About data={data} />
          <Skills />
          <Education data={data} />
          <Experience data={data} />
          <Contact data={data} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
