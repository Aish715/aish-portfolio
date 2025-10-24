const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="border-4 border-foreground p-8 bg-card">
            <h1 className="pixel-font text-2xl md:text-4xl mb-6 leading-relaxed">
              HELLO_WORLD
            </h1>
            <div className="space-y-4 font-mono text-lg">
              <p className="text-muted-foreground">
                {'>'} DEVELOPER.EXE
              </p>
              <p className="text-xl font-bold">
                I BUILD DIGITAL EXPERIENCES
              </p>
              <p className="text-muted-foreground">
                [ FRONTEND • BACKEND • DESIGN ]
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
