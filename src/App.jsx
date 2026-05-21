import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
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
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 selection:bg-blue-200 dark:selection:bg-blue-900">
      <Navbar data={data} lang={lang} setLang={setLang} />

      <main>
        <Hero data={data} />
        <About data={data} />
        <Education data={data} />
        <Experience data={data} />
        <Projects data={data} />
        <Contact data={data} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
