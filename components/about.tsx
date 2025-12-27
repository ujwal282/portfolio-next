import { Code2, Zap, Shield, Users } from "lucide-react"

export function About() {
  const strengths = [
    {
      icon: Code2,
      title: "Full-Stack Expertise",
      description: "End-to-end development from database design to responsive UIs",
    },
    {
      icon: Zap,
      title: "Performance-First",
      description: "Optimized applications that scale and deliver fast user experiences",
    },
    {
      icon: Shield,
      title: "Security-Minded",
      description: "Authentication, authorization, and data protection built-in from day one",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Clear communication, clean code, and comprehensive documentation",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-4 mb-8">
          <div className="bg-primary text-primary-foreground p-3 rounded-lg">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">About</h2>
            <p className="text-xl text-muted-foreground max-w-3xl text-pretty leading-relaxed">
              I'm a full-stack developer specializing in the MERN stack, focused on building web applications that solve
              real problems. With experience shipping production applications for startups and enterprises, I bring both
              technical depth and product thinking to every project.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {strengths.map((strength) => (
            <div
              key={strength.title}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <strength.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{strength.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
