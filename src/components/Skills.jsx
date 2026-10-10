import { FaJava, FaReact, FaDocker, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiSpringboot, SiJavascript, SiPostgresql, SiGit } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { GrOracle } from "react-icons/gr";

const Skills = () => {
    const skills = [
        { name: "Java", icon: <FaJava className="text-xl text-[#007396]" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-xl text-[#6DB33F]" /> },
        { name: "React", icon: <FaReact className="text-xl text-[#61DAFB]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-xl text-[#F7DF1E]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-xl text-[#4169E1]" /> },
        { name: "Oracle", icon: <GrOracle className="text-xl text-[#F80000]" /> },
        { name: "Redis", icon: <DiRedis className="text-xl text-[#DC382D]" /> },
        { name: "Docker", icon: <FaDocker className="text-xl text-[#2496ED]" /> },
        { name: "Git", icon: <SiGit className="text-xl text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="text-xl text-black dark:text-white" /> },
        { name: "HTML", icon: <FaHtml5 className="text-xl text-[#E34F26]" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-xl text-[#1572B6]" /> }
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
