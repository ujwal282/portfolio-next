import { Database, Layout, Server, Wrench } from "lucide-react"

const skillCategories = [
  {
    icon: Layout,
    title: "Frontend",
    description: "Building responsive and interactive UIs with React ecosystem",
    skills: [
      "React",
      "React Hooks",
      "React Router",
      "Context API",
      "Vite",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    description: "Building REST APIs and authentication systems with Node.js",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "bcrypt Password Hashing",
      "Middleware",
    ],
  },
  {
    icon: Database,
    title: "Database",
    description: "Working with NoSQL database for full-stack applications",
    skills: [
      "MongoDB",
      "Mongoose",
      "CRUD Operations",
      "Schema Design",
      "Data Relationships",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Deployment",
    description: "Version control and deployment workflows",
    skills: [
      "Git & GitHub",
      "Postman",
      "Vercel Deployment",
      "Render Deployment",
      "NPM",
      "VS Code",
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
