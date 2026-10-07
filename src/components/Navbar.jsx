import { useState, useEffect } from 'react';

const Navbar = ({ data, lang, setLang }) => {
    const links = [
        { name: 'Home', href: '#home' },
        { name: 'Work', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme === 'dark';
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = links.map(link => link.href.substring(1));
            let current = 'home';
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 3) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Init on mount
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <nav className="sticky top-0 w-full pt-4 pb-4 flex justify-between items-center z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="font-bold text-lg tracking-tight">
                Bintang Mada
            </div>

            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                {links.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className={`transition-colors ${
                                isActive 
                                    ? 'text-accent-light dark:text-accent-dark-text font-bold' 
                                    : 'text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark-text'
                            }`}
                        >
                            {link.name}
                        </a>
                    );
                })}
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                    <button 
                        onClick={() => setLang('id')}
                        className={`cursor-pointer transition-colors ${lang === 'id' ? 'text-accent-light dark:text-accent-dark-text' : 'text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark-text'}`}
                    >
                        ID
                    </button>
                    <span className="text-text-muted-light dark:text-text-muted-dark">|</span>
                    <button 
                        onClick={() => setLang('en')}
                        className={`cursor-pointer transition-colors ${lang === 'en' ? 'text-accent-light dark:text-accent-dark-text' : 'text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark-text'}`}
                    >
                        EN
                    </button>
                </div>

                <button
                    onClick={() => setIsDark(!isDark)}
                    className="text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark-text transition-colors p-2 cursor-pointer"
                    aria-label="Toggle Dark Mode"
                >
                    {isDark ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    )}
                </button>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 -mr-2 text-text-main-light dark:text-text-main-dark cursor-pointer"
                    aria-label="Toggle Menu"
                    aria-expanded={menuOpen}
                    id="mobile-menu-toggle"
                >
                    {menuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    )}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden absolute top-full right-0 mt-2 w-44 flex flex-col py-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-lg rounded-2xl">
                    {links.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`px-4 py-2 text-sm font-medium text-right transition-colors ${
                                    isActive
                                        ? 'text-accent-light dark:text-accent-dark-text font-bold'
                                        : 'text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark-text'
                                }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
