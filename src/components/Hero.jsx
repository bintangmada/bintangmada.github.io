const Hero = ({ data }) => {
    const { personal, ui } = data;

    return (
        <section id="home" className="pt-16 pb-16 flex flex-col-reverse md:flex-row items-center gap-12 justify-between">
            <div className="flex-1 flex flex-col items-start text-left w-full md:max-w-xl">
    <span className="text-sm font-medium uppercase text-text-muted-light dark:text-text-muted-dark mb-2 block">
      HI, I'M
    </span>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-text-main-light dark:text-text-main-dark">
                    Bintang <span className="text-accent-light dark:text-accent-dark-text">Mada</span>
                </h1>
                
                <h2 className="text-xl md:text-2xl mb-8 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                    I build web applications<br/>and solve real problems.
                </h2>
                
                <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-4 mb-8">
                    <a href="#projects" className="px-6 py-3 rounded-full font-semibold text-sm bg-accent-light hover:bg-accent-hover-light text-white transition-colors text-center shadow-sm">
                        {ui.viewProjects || "View My Work"} &rarr;
                    </a>
                    <a href="/assets/files/CV_Bintang_Mada_Suharsono.pdf?v=2" download="CV_Bintang_Mada.pdf" className="px-6 py-3 rounded-full font-semibold text-sm border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-center flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                        Download CV
                    </a>
                </div>

                <div className="flex items-center gap-6">
                    <a href={personal.github} target="_blank" rel="noreferrer" className="text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-text-main-dark transition-colors">
                        <span className="sr-only">GitHub</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    </a>
                    <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-text-muted-light dark:text-text-muted-dark hover:text-blue-600 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                    </a>
                    <a href={`mailto:${personal.email}`} className="text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-text-main-dark transition-colors">
                        <span className="sr-only">Email</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </a>
                </div>
            </div>

            <div className="flex-1 w-full flex justify-center md:justify-end mb-8 md:mb-0">
                <div className="w-full max-w-md h-64 md:h-80 bg-gray-100 dark:bg-card-dark rounded-3xl overflow-hidden shadow-md">
                    {personal.image && personal.image !== "" ? (
                        <img src={personal.image} alt={personal.name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                            Avatar
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
