const Projects = ({ data }) => {
  const { projects, personal, ui } = data;

  return (
    <section id="projects" className="flex flex-col gap-8">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>

            <h2 className="text-3xl font-bold">{ui.projects || "Some things I've built"}</h2>
        </div>
        <a href={personal.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-text-main-dark flex items-center gap-1 transition-colors">
          {ui.viewGithub || "View all"} &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-card-light dark:bg-card-dark rounded-3xl p-6 border border-border-light dark:border-border-dark flex flex-col hover:shadow-md transition-shadow">
            
            <div className="w-full h-48 md:h-56 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden mb-6">
              {project.image && project.image !== "" ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Project Image
                  </div>
              )}
            </div>

            <div className="flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-6 leading-relaxed flex-1">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white dark:bg-gray-900 text-text-muted-light dark:text-text-muted-dark text-xs font-semibold rounded-md border border-gray-200 dark:border-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark-text transition-colors p-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
              </div>
            </div>
            
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Projects;
