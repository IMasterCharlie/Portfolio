"use client"

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = element.offsetTop
      window.scrollTo({ top: offset, behavior: "smooth" })
    }
  }

  const links = [
    { name: "Work", id: "portfolioGrid" },
    { name: "About", id: "wearYourStory" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <nav className="flex justify-center flex-wrap gap-x-12 gap-y-4" aria-label="Footer">
          {links.map(({ name, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              role="link"
            >
              {name}
            </button>
          ))}
          {/* Privacy Policy link opens in a new page */}
          <a
            href="/privacypolicy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            Privacy Policy
          </a>
        </nav>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Designed & Developed by <span className="text-foreground font-semibold">Mohammed Mehraj</span>. © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
