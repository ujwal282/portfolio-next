export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MERN Stack Developer. Built with React & Next.js.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="w-2 h-2 rounded-full bg-red-500" />
            </div>
            <span className="text-xs font-mono text-muted-foreground">v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
