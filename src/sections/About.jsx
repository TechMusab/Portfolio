import { Code2, Smartphone, Cloud, Brain } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Dev",
    description:
      "Building scalable applications with React, Next.js, Node.js, Express, ASP.NET Core, and REST APIs.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Dev",
    description:
      "Developing cross-platform mobile experiences with React Native and backend API integrations.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description:
      "Working with AWS, Docker, Linux, CI/CD, Kubernetes, Git, and GitHub workflows.",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description:
      "Strong foundation in OOP, data structures, algorithms, DBMS, SDLC, and clean software design.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building efficient,
              <span className="font-serif italic font-normal text-white">
                {" "}
                real-world software solutions.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Software Engineering graduate from FAST National
                University of Computer & Emerging Sciences in Islamabad, with
                hands-on experience across full-stack web, mobile, and
                AI-powered frontend applications.
              </p>
              <p>
                My technical toolkit includes React.js, Next.js, React Native,
                TypeScript, Node.js, Express.js, ASP.NET Core, REST APIs, and
                databases such as PostgreSQL, MySQL, and MongoDB.
              </p>
              <p>
                I focus on practical engineering habits: reusable components,
                clean architecture, reliable API integrations, and production
                features that are easy for teams to maintain.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build optimized, secure, and user-centric
                applications with clean, reusable code."
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={item.title}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
