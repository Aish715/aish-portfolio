const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="pixel-font text-xl md:text-2xl mb-12 pb-4 border-b-4 border-foreground">
            ABOUT.TXT
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-foreground p-6 bg-card">
              <h3 className="font-mono text-lg font-bold mb-4 uppercase">
                {'>'} WHO_AM_I
              </h3>
              <div className="font-mono space-y-3 text-sm leading-relaxed">
                <p>
                  I'm a passionate developer who loves creating clean, efficient, and user-friendly applications and websites.
                </p>
                <p>
                  With expertise in modern web technologies, I transform ideas into pixel-perfect digital experiences.
                </p>
                <p className="text-muted-foreground">
                  [When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or enjoying a good book.]
                </p>
              </div>
            </div>
            
            <div className="border-2 border-foreground p-6 bg-card">
              <h3 className="font-mono text-lg font-bold mb-4 uppercase">
                {'>'} EXPERIENCE
              </h3>
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <p className="font-bold">SENIOR DEVELOPER</p>
                  <p className="text-muted-foreground">Company Name • 2020-Present</p>
                </div>
                <div>
                  <p className="font-bold">FULLSTACK DEVELOPER</p>
                  <p className="text-muted-foreground">Another Company • 2018-2020</p>
                </div>
                <div>
                  <p className="font-bold">JUNIOR DEVELOPER</p>
                  <p className="text-muted-foreground">First Company • 2016-2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
