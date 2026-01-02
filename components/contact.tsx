"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Looking for a MERN developer? Let's discuss how I can help bring your project to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form - OS-style window */}
          <div className="bg-card border-2 border-border rounded-lg shadow-xl overflow-hidden">
            <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm font-mono">contact-form.app</span>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-2 block">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium mb-2 block">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="mailto:ujwalpaudel12345@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="bg-primary/10 text-primary p-2 rounded">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>ujwalpaudel12345@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ujwal-paudel-364650319/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="bg-primary/10 text-primary p-2 rounded">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span>linkedin.com/in/ujwal-paudel</span>
                </a>
                <a
                  href="https://github.com/ujwal282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="bg-primary/10 text-primary p-2 rounded">
                    <Github className="w-5 h-5" />
                  </div>
                  <span>ujwal282</span>
                </a>
              </div>
            </div>

            {/* OS-style availability indicator */}
            <div className="bg-card border-2 border-border rounded-lg shadow-lg overflow-hidden">
              <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm font-mono">status.txt</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-semibold">Available for Work</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Currently accepting new projects and freelance opportunities. Typical response time: within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
