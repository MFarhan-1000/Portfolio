// components/Hero.jsx
import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section id='#' className=" mx-auto flex min-h-[85vh] max-w-6xl flex-col-reverse items-center justify-center gap-12 px-6 pt-8 pb-10 sm:pb-16 md:flex-row md:justify-between">
      {/* Left text */}
      <div className="flex-1 text-center md:text-left">
        

        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-text md:text-7xl lg:text-8xl">
         Muhammad <span className="text-secondary">Farhan</span>
        </h1>

        <h2 className="mt-3 text-2xl font-bold text-text/90 sm:text-4xl">
          MERN Stack <span className="text-secondary">Developer</span>
        </h2>

        <p className="mt-6 max-w-xl text-lg text-text/70">
          I build fast, clean and scalable website with MongoDB, Express,
          React and Node.js. Turning ideas into real products is what I enjoy
          most.From designing REST APIs and JWT authentication to building responsive
          interfaces.
        </p>

        {/* Skills */}
        <ul className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
          <li className="rounded-full border border-secondary/40 bg-primary px-4 py-1.5 text-sm font-medium text-text">React</li>
          <li className="rounded-full border border-secondary/40 bg-primary px-4 py-1.5 text-sm font-medium text-text">MongoDB</li>
          <li className="rounded-full border border-secondary/40 bg-primary px-4 py-1.5 text-sm font-medium text-text">Express</li>
          <li className="rounded-full border border-secondary/40 bg-primary px-4 py-1.5 text-sm font-medium text-text">Node.js</li>
          <li className="rounded-full border border-secondary/40 bg-primary px-4 py-1.5 text-sm font-medium text-text">Tailwind CSS</li>
        </ul>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <a href="#projects" className="rounded-lg bg-secondary px-8 py-3.5 text-base font-semibold text-bg transition hover:opacity-90">
            View Projects
          </a>

          <a href="#contact" className="rounded-lg border border-secondary px-8 py-3.5 text-base font-semibold text-text transition hover:bg-secondary/10">
            Contact Me
          </a>
          
        </div>

        {/* Socials Links  */}
        <div className="mt-8 flex justify-center gap-6 text-base text-text/70 md:justify-start">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-secondary">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-secondary">LinkedIn</a>
        </div>
      </div>

      {/* Right side image */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 rounded-full bg-secondary/30 blur-3xl" />
        <img
          src="https://i.pravatar.cc/400?img=12"
          alt="My-Pic"
          className="h-54 w-54 rounded-full border-4 border-secondary/60 object-cover shadow-xl md:h-80 md:w-80 lg:h-96 lg:w-96"
        />
      </div>
    </section>
  )
}

export default Hero