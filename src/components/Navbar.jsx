import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  const links = [
    { path: "#", name: "Home" },
    { path: "#about", name: "About" },
    { path: "#skills", name: "Skills"},
    { path: "#projects", name: "Projects" },
    { path: "#contact", name: "Contact" },
  ]

  return (
    <div className="sticky top-3 z-50 px-4 sm:px-2">
      <nav className="flex items-center justify-between rounded-xl border border-secondary/40 bg-primary/70 px-5 py-3 shadow-lg shadow-black/20 backdrop-blur-md">
        <Link to="/" className="text-xl font-bold tracking-wide text-text">
          Far<span className="text-secondary">han</span>
        </Link>

<ul className="flex items-center gap-8 text-sm font-medium text-text">
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

        <div className="w-16 hidden sm:block" />
      </nav>

      
    </div>
  )
}

export default Navbar