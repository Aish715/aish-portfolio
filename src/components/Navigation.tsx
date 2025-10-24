const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('hero')}
            className="pixel-font text-xs hover:bg-foreground hover:text-background px-2 py-1 transition-colors"
          >
            AISH TIWARI PORTFOLIO
          </button>
          <div className="flex gap-4">
            {['profile', 'about', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="font-mono text-sm uppercase hover:bg-foreground hover:text-background px-3 py-1 border border-transparent hover:border-foreground transition-all"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
