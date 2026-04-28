"use client"

import { Briefcase, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    title: "Backend Developer (Learning & Building)",
    company: "Personal Projects",
    period: "2024 - Present",
    responsibilities: [
      "Building REST APIs using Node.js and Express.js for real-world scenarios",
      "Implementing authentication systems using JWT and bcrypt",
      "Designing database schemas using MongoDB and MySQL",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Personal Projects",
    period: "2023 - Present",
    responsibilities: [
      "Developed responsive web interfaces using React, HTML, CSS, and JavaScript",
      "Built reusable UI components and implemented basic state management",
      "Integrated frontend with backend APIs for dynamic data handling",
    ],
  },
  {
    title: "Full-Stack Project Development",
    company: "Academic / Personal",
    period: "2023 - 2024",
    responsibilities: [
      "Developed Online Vehicle Parking Management System using PHP and MySQL",
      "Implemented booking system and admin features for managing parking slots",
      "Designed database structure and built responsive frontend UI",
    ],
  },
];

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
