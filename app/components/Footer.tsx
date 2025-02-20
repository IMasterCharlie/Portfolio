"use client";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop; // Get exact position
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 flex justify-center space-x-12" aria-label="Footer">
          {[
            { name: "Work", id: "portfolioGrid" },
            { name: "About", id: "wearYourStory" },
            { name: "Experience", id: "experience" },
            { name: "Contact", id: "contact" },
          ].map(({ name, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-sm leading-6 text-muted-foreground hover:text-foreground"
            >
              {name}
            </button>
          ))}
        </nav>
        <p className="mt-10 text-center text-sm leading-5 text-muted-foreground">
          Designed & Developed by Mohammed Mehraj. © 2022 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
