import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contacts = [
    { icon: Mail, label: "EMAIL", value: "tiwariaish96@gmail.com", link: "mailto:tiwariaish96@gmail.com" },
    { icon: Github, label: "GITHUB", value: "github.com/Aish715", link: "https://github.com/Aish715" },
    { icon: Linkedin, label: "LINKEDIN", value: "linkedin.com/in/Aish Tiwari", link: "https://www.linkedin.com/in/aish-tiwari-228235330/" },
    { icon: Twitter, label: "TWITTER", value: "@Aish_Tiwari715", link: "https://x.com/Aish_Tiwari715" }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="pixel-font text-xl md:text-2xl mb-12 pb-4 border-b-4 border-foreground">
            CONTACT.EXE
          </h2>
          
          <div className="border-4 border-foreground bg-background p-8">
            <p className="font-mono text-lg mb-8 text-center">
              {'>'} LET'S BUILD SOMETHING TOGETHER
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  className="border-2 border-foreground p-6 hover:bg-foreground hover:text-background transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <contact.icon className="w-6 h-6" />
                    <div>
                      <p className="font-mono text-xs text-muted-foreground group-hover:text-background">
                        {contact.label}
                      </p>
                      <p className="font-mono text-sm font-bold">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="font-mono text-sm text-muted-foreground">
                [ CURRENTLY AVAILABLE FOR FREELANCE WORK ]
              </p>
            </div>
          </div>
          
          <footer className="mt-12 text-center font-mono text-sm text-muted-foreground">
            <p>© 2025 • BUILT WITH REACT & LOTS OF EFFORT</p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
