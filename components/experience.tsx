"use client"

import { Briefcase, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechVentures Inc.",
    period: "2023 - Present",
    responsibilities: [
      "Architected and deployed microservices infrastructure serving 100K+ monthly users",
      "Led migration from REST to GraphQL, reducing API response times by 40%",
      "Mentored junior developers on MERN best practices and code review",
    ],
  },
  {
    title: "MERN Stack Developer",
    company: "StartupLab",
    period: "2021 - 2023",
    responsibilities: [
      "Built MVP from scratch that secured $2M seed funding",
      "Implemented real-time features using Socket.io and Redis",
      "Collaborated with design team to create responsive, accessible UI components",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2021",
    responsibilities: [
      "Developed client-facing applications using React and Node.js",
      "Integrated third-party APIs including Stripe, SendGrid, and AWS services",
      "Optimized database queries, reducing load times by 60%",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between mb-12 flex-wrap gap-4">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Delivering results across startups and established tech companies
            </p>
          </div>

          {/* OS-style draggable resume card */}
          <div className="bg-card border-2 border-border rounded-lg shadow-lg overflow-hidden">
            <div className="bg-muted px-3 py-2 flex items-center gap-2 border-b">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <FileText className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-mono">Resume.pdf</span>
            </div>
            <div className="p-4">
              <Button size="sm" variant="outline" className="w-full bg-transparent">
                Download Resume
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-lg">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span className="text-foreground leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
