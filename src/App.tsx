import { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Campus from './components/Campus';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CRTBackground from './components/CRTBackground';

const AppContext = createContext({
  isDark: false,
  toggleTheme: () => {},
  language: 'zh' as 'zh' | 'en',
  toggleLanguage: () => {},
  activeSection: 'home',
});

export const useAppContext = () => useContext(AppContext);

function App() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDark(initialDark);
    
    const savedLang = localStorage.getItem('language') as 'zh' | 'en';
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLanguage = () => setLanguage(language === 'zh' ? 'en' : 'zh');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = ['home', 'about', 'skills', 'internships', 'campus', 'portfolio', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const contextValue = {
    isDark,
    toggleTheme,
    language,
    toggleLanguage,
    activeSection,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen transition-colors duration-300">
        <CRTBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <div style={{ backgroundColor: isDark ? '#121212' : '#ffffff' }}>
              <About />
              <Skills />
              <Internships />
              <Campus />
              <Portfolio />
              <Contact />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
