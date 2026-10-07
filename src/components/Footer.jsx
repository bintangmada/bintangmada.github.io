const Footer = () => {
    return (
        <footer className="py-8 md:py-12 bg-transparent border-t border-border-light dark:border-border-dark mt-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                
                <div className="flex flex-col items-center md:items-start">
                    <span className="font-bold text-lg tracking-tight mb-1 text-text-main-light dark:text-text-main-dark">
                        Bintang Mada
                    </span>
                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">
                        Building, learning, and sharing.
                    </span>
                </div>

                <div className="flex items-center space-x-6 text-sm font-medium">
                    <a href="#home" className="text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark-text transition-colors">Home</a>
                    <a href="#projects" className="text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark-text transition-colors">Work</a>
                    <a href="#about" className="text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark-text transition-colors">About</a>
                    <a href="#experience" className="text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark-text transition-colors">Experience</a>
                    <a href="#contact" className="text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark-text transition-colors">Contact</a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
