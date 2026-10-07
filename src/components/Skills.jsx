const Skills = () => {
    const skills = [
        { name: "Java", icon: "☕" },
        { name: "Spring Boot", icon: "🍃" },
        { name: "React", icon: "⚛️" },
        { name: "JavaScript", icon: "🟨" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Oracle", icon: "🔴" },
        { name: "Redis", icon: "🧱" },
        { name: "Docker", icon: "🐳" },
        { name: "Git", icon: "🌿" },
        { name: "GitHub", icon: "🐙" },
        { name: "HTML", icon: "🟠" },
        { name: "CSS", icon: "🔵" }
    ];

    return (
        <section id="skills" className="flex flex-col gap-8">
            <div>

                <h2 className="text-3xl font-bold">Technologies I work with</h2>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 mt-4">
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 px-4 py-3 bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark-text transition-colors">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-semibold text-text-main-light dark:text-text-main-dark">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
