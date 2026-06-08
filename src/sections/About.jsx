import { Code2, Smartphone, Cloud, Brain } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Dev",
    description:
      "Proficient in React, Next.js, Node.js, and Express to build end-to-end applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Dev",
    description:
      "Hands-on experience developing cross-platform mobile apps with React Native.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Familiar with AWS, Docker, Kubernetes, Linux, and CI/CD workflows.",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description:
      "Solid foundation in data structures, algorithms, and clean system design.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
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
                I'm an aspiring Software Engineer currently pursuing my BS in Software Engineering at FAST National University, Islamabad. I have a strong passion for developing robust, scalable applications that solve real-world problems.
              </p>
              <p>
                My technical toolkit includes modern web frameworks like React.js, Next.js, and backend technologies like Node.js, Express, and databases such as PostgreSQL, MySQL, and MongoDB. I also specialize in cross-platform mobile development using React Native.
              </p>
              <p>
                With hands-on experience in cloud and DevOps tools (AWS, Docker, CI/CD), I focus on the entire lifecycle of software engineering — from architecture design to final deployment.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build highly optimized, secure, and user-centric applications, leveraging the best design patterns and maintaining clean, reusable code."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
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
