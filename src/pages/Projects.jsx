// components/Projects.jsx
import React from 'react'
import CarShop from '../assets/dextar-studio-ccgjEBvHTIU-unsplash.jpg'
import SocailMedia from "../assets/berke-citak-0cpyFsSUiSc-unsplash.jpg"

const GithubIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

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
                src={CarShop}
                alt="Car Store"
                className="h-45 w-full object-cover transition duration-500 group-hover:scale-110 lg:h-60"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-text">Car Store</h3>
              <p className="mt-1 text-sm leading-relaxed text-text/70">
                A full-stack Car Dealing shop where you can sell and buy cars and its fully secure JWT login.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                <li className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-text">React</li>
                <li className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-text">Node.js</li>
                <li className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-text">MongoDB</li>
              </ul>
              <div className="mt-3 flex gap-6 text-sm font-medium">
                <a
                  href="https://pakwheel-project-tan.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary transition hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/MFarhan-1000/PakWheel_Clone_Project"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-text/70 transition hover:text-secondary"
                >
                  <GithubIcon />
                  GitHub
                </a>
              </div>
            </div>
          </article>

          {/* Project 2 */}
          <article className="group overflow-hidden rounded-2xl border border-secondary/30 bg-primary transition duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20">
            <div className="overflow-hidden">
              <img
                src={SocailMedia}
                alt="Task Manager"
                className="h-45 w-full object-cover transition duration-500 group-hover:scale-110 lg:h-60"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-text">Sharing Is Caring</h3>
              <p className="mt-1 text-sm leading-relaxed text-text/70">
                A Social Media where We Share our day and intersting things with people All Around the world
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                <li className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-text">React</li>
                <li className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-text">Express</li>
                <li className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-text">MongoDB</li>
              </ul>
              <div className="mt-3 flex gap-6 text-sm font-medium">
                <a href="#" className="text-secondary transition hover:underline">Live Demo</a>
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-text/70 transition hover:text-secondary"
                >
                  <GithubIcon />
                  GitHub
                </a>
              </div>
            </div>
          </article>

          {/* Project 3 */}
          <article className="group overflow-hidden rounded-2xl border border-secondary/30 bg-primary transition duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20">
            <div className="overflow-hidden">
              <img
                src="https://picsum.photos/seed/project3/600/400"
                alt="Chat Application"
                className="h-45 w-full object-cover transition duration-500 group-hover:scale-110 lg:h-60"
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
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-text/70 transition hover:text-secondary"
                >
                  <GithubIcon />
                  GitHub
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects