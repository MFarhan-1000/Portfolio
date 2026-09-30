// components/About.jsx
import React from 'react'

function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen scroll-mt-0 items-center justify-center px-4 py-2 sm:px-6 sm:py-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-text sm:mb-12 sm:text-5xl md:text-6xl">
          About <span className="text-secondary">Me</span>
        </h2>

        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16">
          {/* Image */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 -z-10 rounded-full bg-secondary/30 blur-3xl" />
            <img
              src="https://i.pravatar.cc/400?img=15"
              alt="Farhan"
              className="h-40 w-40 rounded-2xl border-2 border-secondary/50 object-cover shadow-xl sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-72 lg:w-72"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-text sm:text-3xl lg:text-4xl">
              A passionate <span className="text-secondary">MERN Stack Developer</span>
            </h3>

            <p className="mt-4 text-base leading-relaxed text-text/70 sm:mt-6 sm:text-lg lg:text-xl">
              I'm Muhammad Farhan, a full-stack (MERN) developer who loves building fast, clean
              and responsive websites. I care about how an app looks and how well it
              works behind the scenes, from the React interface to the Node.js
              API and the MongoDB database.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-text/60 sm:mt-4 sm:text-base lg:text-lg">
              I'm always learning new tools, improving my projects, and turning
              ideas into real products that people can actually use.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-secondary/30 pt-5 text-center sm:mt-8 sm:gap-4 sm:pt-6 md:text-left">
              <div>
                <p className="text-2xl font-bold text-secondary sm:text-3xl">1+</p>
                <p className="text-xs text-text/70 sm:text-sm">Years experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary sm:text-3xl">10+</p>
                <p className="text-xs text-text/70 sm:text-sm">Projects built</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary sm:text-3xl">5+</p>
                <p className="text-xs text-text/70 sm:text-sm">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About