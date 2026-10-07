import GithubActivity from './GithubActivity';

const About = ({ data }) => {
    const { about, ui, personal, projects } = data;

    return (
        <section id="about" className="flex flex-col gap-16">
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between items-center md:items-start">
                <div className="flex-1 w-full">

                    <h2 className="text-3xl font-bold mb-6">{ui.aboutMe || "A bit about me"}</h2>
                    
                    <div className="flex flex-col gap-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-8 text-justify">
                        {about.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <a href="#about" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
                        More about me &rarr;
                    </a>
                </div>

                <div className="flex-1 w-full">
                  <img src={personal.image} alt="Profile picture" className="w-full h-64 md:h-72 object-cover rounded-3xl shadow-sm" />
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-border-light dark:border-border-dark">
                    <svg className="w-8 h-8 text-accent-light dark:text-accent-dark-text mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    <span className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-1">3+</span>
                    <span className="text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider font-semibold">Years Experience</span>
                </div>
                
                <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-border-light dark:border-border-dark">
                    <svg className="w-8 h-8 text-accent-light dark:text-accent-dark-text mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    <span className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-1">10+</span>
                    <span className="text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider font-semibold">Technologies</span>
                </div>

                <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-border-light dark:border-border-dark">
                    <svg className="w-8 h-8 text-accent-light dark:text-accent-dark-text mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                    <span className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-1">{projects?.filter(p => !p.hidden).length || 0}</span>
                    <span className="text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider font-semibold">Projects</span>
                </div>

                <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-border-light dark:border-border-dark">
                    <svg className="w-8 h-8 text-accent-light dark:text-accent-dark-text mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    <span className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-1">Always</span>
                    <span className="text-xs text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider font-semibold">Learning</span>
                </div>
            </div>

            <GithubActivity ui={ui} />
        </section>
    );
};

export default About;
