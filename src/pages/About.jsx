// components/About.jsx
import React from 'react'

function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen scroll-mt-0 items-center justify-center px-6 py-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-12 text-center text-5xl font-extrabold tracking-tight text-text sm:text-6xl">
          About <span className="text-secondary">Me</span>
        </h2>

        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Image */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 -z-10 rounded-full bg-secondary/30 blur-3xl" />
            <img
              src="https://i.pravatar.cc/400?img=15"
              alt="Farhan"
              className="h-72 w-72 rounded-2xl border-2 border-secondary/50 object-cover shadow-xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-text sm:text-4xl">
              A passionate <span className="text-secondary">MERN Stack Developer</span>
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-text/70 sm:text-xl">
              I'm Muhammad Farhan, a full-stack (MERN) developer who loves building fast, clean
              and responsive websites. I care about how an app looks and how well it
              works behind the scenes, from the React interface to the Node.js
              API and the MongoDB database.
            </p>

            <p className="mt-4 text-base leading-relaxed text-text/60 sm:text-lg">
              I'm always learning new tools, improving my projects, and turning
              ideas into real products that people can actually use.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-secondary/30 pt-6 text-center md:text-left">
              <div>
                <p className="text-3xl font-bold text-secondary">1+</p>
                <p className="text-sm text-text/70">Years experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">10+</p>
                <p className="text-sm text-text/70">Projects built</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">5+</p>
                <p className="text-sm text-text/70">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About