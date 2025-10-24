const Projects = () => {
  const projects = [
    {
      title: "PROJECT_ALPHA",
      description: "A modern website built with HTML, CSS and JavaScript",
      tech: ["HTML", "CSS", "JAVASCRIPT"],
      link: "https://github.com/Aish715/import-export"
    },
    {
      title: "PROJECT_BETA",
      description: "Full-stack School-Management platform with real-time features",
      tech: ["JAVA", "SPRING BOOT", "REACT", "MONGODB"],
      link: "https://github.com/Aish715/School-management-system"
    },
    {
      title: "PROJECT_GAMMA",
      description: "You are gioing throught it right now : My Portfolio)",
      tech: ["REACT", "TAILWIND CSS"],
      link: "#"
    },
    {
      title: "PROJECT_DELTA",
      description: " Ticket booking chatbot",
      tech: ["HTML", "CSS", "JAVASCRIPT"],
      link: "https://github.com/Aish715/train-booking-chatbot"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="pixel-font text-xl md:text-2xl mb-12 pb-4 border-b-4 border-foreground">
            PROJECTS.DIR
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="border-4 border-foreground bg-background p-6 hover:translate-x-1 hover:translate-y-1 transition-transform"
              >
                <h3 className="font-mono text-lg font-bold mb-3">
                  {'>'} {project.title}
                </h3>
                <p className="font-mono text-sm mb-4 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="border border-foreground px-2 py-1 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-block border-2 border-foreground bg-foreground text-background px-4 py-2 font-mono text-sm hover:bg-background hover:text-foreground transition-colors"
                >
                  VIEW_PROJECT →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
