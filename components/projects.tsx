"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Minimize2, X } from "lucide-react"

const projects = [
  {
    title: "TaskFlow Pro",
    problem: "Teams struggle with fragmented project management across multiple tools",
    features: [
      "Real-time collaboration with WebSocket integration",
      "Kanban boards with drag-and-drop functionality",
      "Custom workflows and automated task assignments",
      "Advanced analytics dashboard with MongoDB aggregation",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Redux"],
    github: "#",
    demo: "#",
  },
  {
    title: "ShopHub Commerce",
    problem: "Small businesses need affordable, scalable e-commerce solutions",
    features: [
      "Stripe payment integration with webhook handling",
      "Inventory management with low-stock alerts",
      "Customer order tracking and email notifications",
      "Admin dashboard with sales analytics and reporting",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    title: "DevConnect",
    problem: "Developers need a platform to showcase work and connect with peers",
    features: [
      "User profiles with GitHub integration and portfolio showcase",
      "Post sharing with markdown support and code highlighting",
      "Real-time messaging system between developers",
      "Job board with filtering and application tracking",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Passport.js", "AWS S3"],
    github: "#",
    demo: "#",
  },
  {
    title: "HealthTrack",
    problem: "Users lack a unified platform to monitor daily health metrics",
    features: [
      "Daily health logging with customizable metrics",
      "Data visualization with interactive charts",
      "Goal setting and progress tracking",
      "Export reports to PDF for sharing with healthcare providers",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "PDF-lib"],
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Production-ready applications built with the MERN stack, deployed and battle-tested
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-xl transition-shadow">
              {/* OS-style window header */}
              <div className="bg-muted px-4 py-3 flex items-center justify-between border-b">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm font-medium ml-2">{project.title}</span>
                </div>
                <div className="flex gap-1">
                  <button className="text-muted-foreground hover:text-foreground">
                    <Minimize2 className="w-4 h-4" />
                  </button>
                  <button className="text-muted-foreground hover:text-foreground">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">
                  <strong>Problem:</strong> {project.problem}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
