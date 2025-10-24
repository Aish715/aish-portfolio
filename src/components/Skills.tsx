const Skills = () => {
  const skillCategories = [
    {
      category: "FRONTEND",
      skills: ["HTML", "CSS", "React", "Next.js", "Vue.js"]
    },
    {
      category: "BACKEND",
      skills: ["Node.js", "Python", "Java", "MongoDB", "PostgreSQL"]
    },
    {
      category: "TOOLS",
      skills: ["Git", "Docker", "VS Code", "Figma", "Linux"]
    },
    {
      category: "SOFT_SKILLS",
      skills: ["Problem Solving", "Team Work", "Communication", "Agile", "Leadership"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="pixel-font text-xl md:text-2xl mb-12 pb-4 border-b-4 border-foreground">
            SKILLS.JSON
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="border-2 border-foreground p-6 bg-card"
              >
                <h3 className="font-mono text-lg font-bold mb-4 uppercase">
                  {'{}'} {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li 
                      key={i}
                      className="font-mono text-sm flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-foreground"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
