import { User, MapPin, Calendar, Code } from "lucide-react";

const Profile = () => {
  return (
    <section id="profile" className="min-h-screen flex items-center py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="pixel-font text-xl md:text-2xl mb-12 pb-4 border-b-4 border-foreground">
            PROFILE.DAT
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="md:col-span-1">
              <div className="border-4 border-foreground bg-background p-6 sticky top-24">
                {/* Pixel Avatar */}
                <div className="w-full aspect-square border-2 border-foreground mb-4 bg-card flex items-center justify-center">
                  <User className="w-24 h-24" strokeWidth={1} />
                </div>
                
                <div className="space-y-3 font-mono text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground">NAME:</p>
                    <p className="font-bold">Aish Tiwari</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">ROLE:</p>
                    <p className="font-bold">FULLSTACK DEVELOPER</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">LEVEL:</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 border border-foreground bg-foreground"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="md:col-span-2 space-y-6">
              {/* Stats */}
              <div className="border-4 border-foreground bg-background p-6">
                <h3 className="font-mono text-lg font-bold mb-4 uppercase">
                  {'>'} STATS.LOG
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-2 border-foreground p-4 text-center">
                    <p className="pixel-font text-2xl mb-2">5+</p>
                    <p className="font-mono text-xs text-muted-foreground">PROJECTS</p>
                  </div>
                  <div className="border-2 border-foreground p-4 text-center">
                    <p className="pixel-font text-2xl mb-2">2+</p>
                    <p className="font-mono text-xs text-muted-foreground">YEARS EXP</p>
                  </div>
                  <div className="border-2 border-foreground p-4 text-center">
                    <p className="pixel-font text-2xl mb-2">3+</p>
                    <p className="font-mono text-xs text-muted-foreground">CLIENTS</p>
                  </div>
                  <div className="border-2 border-foreground p-4 text-center">
                    <p className="pixel-font text-2xl mb-2">24/7</p>
                    <p className="font-mono text-xs text-muted-foreground">AVAILABLE</p>
                  </div>
                </div>
              </div>
              
              {/* Info Cards */}
              <div className="border-4 border-foreground bg-background p-6">
                <h3 className="font-mono text-lg font-bold mb-4 uppercase">
                  {'>'} INFO.SYS
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div className="font-mono text-sm">
                      <p className="text-xs text-muted-foreground">LOCATION</p>
                      <p>Kanpur, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div className="font-mono text-sm">
                      <p className="text-xs text-muted-foreground">ACTIVE SINCE</p>
                      <p>2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div className="font-mono text-sm">
                      <p className="text-xs text-muted-foreground">SPECIALIZATION</p>
                      <p>Web Development • UI/UX • System Design</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Achievements */}
              <div className="border-4 border-foreground bg-background p-6">
                <h3 className="font-mono text-lg font-bold mb-4 uppercase">
                  {'>'} ACHIEVEMENTS.TXT
                </h3>
                <ul className="space-y-3 font-mono text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-lg">🏆</span>
                    <span>4 Star in JAVA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">⭐</span>
                    <span>Open Source Contributor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">📚</span>
                    <span>Recognised as Python expert by GFG </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">🎓</span>
                    <span>Computer Science Student</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
