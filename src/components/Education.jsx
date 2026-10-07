const Education = ({ data }) => {
    const { educations, trainings, ui } = data;

    return (
        <section id="education" className="flex flex-col gap-16">
            
            {/* Formal Education Section */}
            <div className="flex flex-col gap-8">
                <div>

                    <h2 className="text-3xl font-bold">{ui.education}</h2>
                </div>
                
                <div className="relative border-l-2 border-accent-light/30 dark:border-accent-dark-bg ml-3 md:ml-0 md:border-none mt-6 flex flex-col gap-12">
                    {educations.map((edu, index) => (
                        <div key={index} className="relative pl-8 md:pl-0 md:flex group">
                            
                            {/* Timeline dot & line for desktop */}
                            <div className="absolute md:left-[25%] md:-ml-[8px] top-1 md:top-1.5 w-4 h-4 bg-accent-light dark:bg-accent-dark-text rounded-full border-4 border-bg-light dark:border-bg-dark z-10 hidden md:block"></div>
                            <div className="absolute left-[25%] -ml-[1px] top-0 bottom-[-3rem] w-0.5 bg-accent-light/20 dark:bg-accent-dark-bg hidden md:block"></div>

                            {/* Mobile dot */}
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-accent-light dark:bg-accent-dark-text rounded-full border-4 border-bg-light dark:border-bg-dark z-10 md:hidden"></div>

                            <div className="md:w-1/4 flex flex-col pt-1">
                                <span className="text-sm font-semibold text-text-muted-light dark:text-text-muted-dark md:text-right md:pr-12">
                                    {edu.year}
                                </span>
                            </div>
                            
                            <div className="md:w-3/4 flex flex-col gap-2 md:pl-10">
                                <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">
                                    {edu.degree}
                                </h3>
                                <span className="text-sm font-semibold text-accent-light dark:text-accent-dark-text">
                                    {edu.institution}
                                </span>
                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mt-2 max-w-2xl text-justify">
                                    {edu.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Trainings Section */}
            {trainings && trainings.length > 0 && (
                <div className="flex flex-col gap-8">
                    <div>

                        <h2 className="text-3xl font-bold">{ui.training}</h2>
                    </div>
                    
                    <div className="relative border-l-2 border-accent-light/30 dark:border-accent-dark-bg ml-3 md:ml-0 md:border-none mt-6 flex flex-col gap-12">
                        {trainings.map((train, index) => (
                            <div key={index} className="relative pl-8 md:pl-0 md:flex group">
                                
                                {/* Timeline dot & line for desktop */}
                                <div className="absolute md:left-[25%] md:-ml-[8px] top-1 md:top-1.5 w-4 h-4 bg-accent-light dark:bg-accent-dark-text rounded-full border-4 border-bg-light dark:border-bg-dark z-10 hidden md:block"></div>
                                <div className="absolute left-[25%] -ml-[1px] top-0 bottom-[-3rem] w-0.5 bg-accent-light/20 dark:bg-accent-dark-bg hidden md:block"></div>

                                {/* Mobile dot */}
                                <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-accent-light dark:bg-accent-dark-text rounded-full border-4 border-bg-light dark:border-bg-dark z-10 md:hidden"></div>

                                <div className="md:w-1/4 flex flex-col pt-1">
                                    <span className="text-sm font-semibold text-text-muted-light dark:text-text-muted-dark md:text-right md:pr-12">
                                        {train.year}
                                    </span>
                                </div>
                                
                                <div className="md:w-3/4 flex flex-col gap-2 md:pl-10">
                                    <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">
                                        {train.degree}
                                    </h3>
                                    <span className="text-sm font-semibold text-accent-light dark:text-accent-dark-text">
                                        {train.institution}
                                    </span>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mt-2 max-w-2xl text-justify">
                                        {train.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Education;
