"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* OS-style floating widget */}
      <div className="absolute top-8 right-8 hidden lg:block">
        <div className="bg-card border-2 border-border rounded-lg shadow-lg p-4 w-48">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
          <div className="font-mono text-xs text-muted-foreground">{time.toLocaleTimeString()}</div>
          <div className="mt-2 flex items-center gap-2 text-xs">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Status: Available</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
          Building reliable, scalable <span className="text-primary">MERN applications</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8">
          Full-stack developer crafting production-ready web applications with MongoDB, Express, React, and Node.js
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8" asChild>
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Terminal-style accent */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-card border-2 border-border rounded-lg shadow-xl overflow-hidden">
            <div className="bg-muted px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs font-mono text-muted-foreground">terminal</span>
            </div>
            <div className="p-6 font-mono text-left text-sm">
              <div className="text-primary">$ whoami</div>
              <div className="text-foreground mt-2">Full-Stack MERN Developer</div>
              <div className="text-primary mt-4">$ cat skills.txt</div>
              <div className="text-muted-foreground mt-2">MongoDB • Express.js • React • Node.js • TypeScript</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
