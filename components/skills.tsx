import { Database, Layout, Server, Wrench } from "lucide-react"

const skillCategories = [
  {
    icon: Layout,
    title: "Frontend",
    description: "Building responsive, accessible user interfaces with modern React patterns",
    skills: [
      "React & React Hooks",
      "Redux & Context API",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    description: "Creating robust APIs and server-side logic with Node.js ecosystem",
    skills: [
      "Node.js & Express",
      "RESTful APIs",
      "GraphQL",
      "Authentication (JWT, OAuth)",
      "WebSockets",
      "API Security",
    ],
  },
  {
    icon: Database,
    title: "Database & Tools",
    description: "Managing data with NoSQL and SQL databases, ensuring optimal performance",
    skills: ["MongoDB & Mongoose", "PostgreSQL", "Redis", "Database Design", "Query Optimization", "Data Modeling"],
  },
  {
    icon: Wrench,
    title: "DevOps & Tools",
    description: "Deploying and maintaining applications with modern development workflows",
    skills: [
      "Git & GitHub",
      "Docker",
      "AWS (EC2, S3, Lambda)",
      "CI/CD Pipelines",
      "Nginx",
      "Testing (Jest, React Testing Library)",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive full-stack expertise across the modern web development ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 text-primary p-3 rounded-lg">
                  <category.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="bg-muted px-3 py-2 rounded text-sm font-medium text-foreground">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
