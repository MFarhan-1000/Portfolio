// components/Projects.jsx
import React from 'react'

function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center px-6 py-4 md:pt-20 md:pb-6 lg:h-screen"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
            My <span className="text-secondary">Projects</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-text/70 sm:text-base">
            A few full-stack projects I've built with the MERN stack.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <article className="group overflow-hidden rounded-2xl border border-secondary/30 bg-primary transition duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20">
            <div className="overflow-hidden">
              <img
                src="https://picsum.photos/seed/project1/600/400"
                alt="Project 1"
                className="h-36 w-full object-cover transition duration-500 group-hover:scale-110 lg:h-40"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-text">E-Commerce Store</h3>
              <p className="mt-1 text-sm leading-relaxed text-text/70">
                A full-stack shopping app with cart and secure JWT login.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                <li className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-text">React</li>
                <li className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-text">Node.js</li>
                <li className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-text">MongoDB</li>
              </ul>
              <div className="mt-3 flex gap-6 text-sm font-medium">
                <a href="#" className="text-secondary transition hover:underline">Live Demo</a>
                <a href="#" className="text-text/70 transition hover:text-secondary">GitHub</a>
              </div>
            </div>
          </article>

          {/* Project 2 */}
          <article className="group overflow-hidden rounded-2xl border border-secondary/30 bg-primary transition duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20">
            <div className="overflow-hidden">
              <img
                src="https://picsum.photos/seed/project2/600/400"
                alt="Project 2"
                className="h-36 w-full object-cover transition duration-500 group-hover:scale-110 lg:h-40"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-text">Task Manager</h3>
              <p className="mt-1 text-sm leading-relaxed text-text/70">
                A task app to create, edit, and organize daily work.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                <li className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-text">React</li>
                <li className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-text">Express</li>
                <li className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-text">MongoDB</li>
              </ul>
              <div className="mt-3 flex gap-6 text-sm font-medium">
                <a href="#" className="text-secondary transition hover:underline">Live Demo</a>
                <a href="#" className="text-text/70 transition hover:text-secondary">GitHub</a>
              </div>
            </div>
          </article>

          {/* Project 3 */}
          <article className="group overflow-hidden rounded-2xl border border-secondary/30 bg-primary transition duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20">
            <div className="overflow-hidden">
              <img
                src="https://picsum.photos/seed/project3/600/400"
                alt="Project 3"
                className="h-36 w-full object-cover transition duration-500 group-hover:scale-110 lg:h-40"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-text">Chat Application</h3>
              <p className="mt-1 text-sm leading-relaxed text-text/70">
                A real-time chat app with private rooms and message history.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                <li className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-text">React</li>
                <li className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-text">Socket.io</li>
                <li className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-text">MongoDB</li>
              </ul>
              <div className="mt-3 flex gap-6 text-sm font-medium">
                <a href="#" className="text-secondary transition hover:underline">Live Demo</a>
                <a href="#" className="text-text/70 transition hover:text-secondary">GitHub</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects