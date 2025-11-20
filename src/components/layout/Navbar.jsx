// src/components/layout/Navbar.jsx

const NAV_LINKS = [
  { id: "home", label: "Home", href: "#" },
  { id: "about", label: "About", href: "#" },
  { id: "services", label: "Services", href: "#" },
  { id: "projects", label: "Projects", href: "#" },
  { id: "contact", label: "Contact", href: "#" },
];

function Navbar({ active = "home", variant = "home" }) {
  const paddingY =
    variant === "home"
      ? "py-10 md:py-12" // taller on homepage
      : "py-6 md:py-8";  // slightly shorter elsewhere

  return (
    <header className="bg-white">
      {/* Full-width, edge-to-edge bar */}
      <div className={`w-full ${paddingY}`}>
        {/* This flex row is what pushes logo left / links right */}
        <div className="flex items-center justify-between px-6 md:px-24">
          {/* Logo / Wordmark (temp text until SVG) */}
          <div className="flex flex-col leading-tight">
            <span className="font-display text-3xl tracking-[0.18em] uppercase text-cheatham-gray">
              Cheatham
            </span>
            <span className="mt-1 font-body text-xs tracking-[0.32em] uppercase text-cheatham-gray">
              Contracting &amp; Design
            </span>
          </div>

          {/* Nav links */}
          <nav className="ml-auto">
            <ul className="flex items-center gap-3 md:gap-4">
              {NAV_LINKS.map((link) => {
                const isActive = link.id === active;

                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className={[
                        "inline-flex items-center justify-center",
                        "px-4 py-2 text-xs md:text-sm",
                        "font-body tracking-[0.22em] uppercase",
                        "border border-cheatham-gray",
                        "rounded-none", // square buttons
                        "transition-colors duration-150",
                        isActive
                          ? "bg-cheatham-gray text-white"
                          : "bg-white text-cheatham-gray hover:bg-cheatham-gray/10",
                      ].join(" ")}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
