import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { path: "#", name: "Home" },
    { path: "#about", name: "About" },
    { path: "#skills", name: "Skills" },
    { path: "#projects", name: "Projects" },
    { path: "#contact", name: "Contact" },
  ]

  return (
    <div className="sticky top-3 z-50 px-4 sm:px-2">
      <nav className="flex items-center justify-between rounded-xl border border-secondary/40 bg-primary/70 px-5 py-3 shadow-lg shadow-black/20 backdrop-blur-md">
        <Link to="/" className="text-xl font-bold tracking-wide text-text">
          Far<span className="text-secondary">han</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-text md:flex">
          {links.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                className="relative py-1 transition-colors duration-300 hover:text-secondary after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:rounded-full after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Keeps desktop links visually centered */}
        <div className="hidden w-16 md:block" />

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="text-text md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="mt-2 flex flex-col gap-1 rounded-xl border border-secondary/40 bg-primary/90 p-3 text-sm font-medium text-text shadow-lg shadow-black/20 backdrop-blur-md md:hidden">
          {links.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary/10 hover:text-secondary"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Navbar