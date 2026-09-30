// components/Skills.jsx
import React from 'react'

function Skills() {
  return (
    <section
      id="skills"
      className="flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: intro */}
        <div className="text-center lg:text-left">
          <p className="text-lg font-semibold text-secondary sm:text-xl">
            What I work with
          </p>
          <h2 className="mt-2 text-5xl font-extrabold tracking-tight text-text sm:text-6xl">
            My <span className="text-secondary">Skills</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text/70 sm:text-lg lg:mx-0">
                I turn ideas into full-stack web apps, from clean React interfaces to secure
                APIs and well-structured databases. Here are the tools I use most and how
                confident I am with each.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            <span className="rounded-full border border-secondary/40 bg-primary px-4 py-1.5 text-sm text-text">JWT Auth</span>
            <span className="rounded-full border border-secondary/40 bg-primary px-4 py-1.5 text-sm text-text">REST APIs</span>
            <span className="rounded-full border border-secondary/40 bg-primary px-4 py-1.5 text-sm text-text">Hoppscotch</span>
            <span className="rounded-full border border-secondary/40 bg-primary px-4 py-1.5 text-sm text-text">Git & GitHub</span>
            <span className="rounded-full border border-secondary/40 bg-primary px-4 py-1.5 text-sm text-text">Vercel</span>
          </div>
        </div>

        {/* Right: skill bars */}
        <div className="rounded-2xl border border-secondary/30 bg-primary p-6 shadow-xl shadow-black/20 sm:p-8">
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex justify-between text-sm font-medium text-text">
                <span>React</span>
                <span className="text-secondary">90%</span>
              </div>
              <div className="h-2.5 rounded-full bg-secondary/20">
                <div className="h-full w-[90%] rounded-full bg-secondary" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm font-medium text-text">
                <span>Node.js & Express</span>
                <span className="text-secondary">85%</span>
              </div>
              <div className="h-2.5 rounded-full bg-secondary/20">
                <div className="h-full w-[85%] rounded-full bg-secondary" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm font-medium text-text">
                <span>MongoDB</span>
                <span className="text-secondary">80%</span>
              </div>
              <div className="h-2.5 rounded-full bg-secondary/20">
                <div className="h-full w-[80%] rounded-full bg-secondary" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm font-medium text-text">
                <span>Tailwind CSS</span>
                <span className="text-secondary">90%</span>
              </div>
              <div className="h-2.5 rounded-full bg-secondary/20">
                <div className="h-full w-[90%] rounded-full bg-secondary" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm font-medium text-text">
                <span>JavaScript</span>
                <span className="text-secondary">88%</span>
              </div>
              <div className="h-2.5 rounded-full bg-secondary/20">
                <div className="h-full w-[88%] rounded-full bg-secondary" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm font-medium text-text">
                <span>Git & GitHub</span>
                <span className="text-secondary">75%</span>
              </div>
              <div className="h-2.5 rounded-full bg-secondary/20">
                <div className="h-full w-[75%] rounded-full bg-secondary" />
              </div>
            </div>
          </div>



          
        </div>
      </div>
    </section>
  )
}

export default Skills