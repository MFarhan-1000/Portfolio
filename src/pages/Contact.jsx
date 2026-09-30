// components/Contact.jsx
import React, { useState } from 'react'

function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: send the form data to your backend or an email service
    setSent(true)
    e.currentTarget.reset()
  }

  const input =
    "w-full rounded-lg border border-secondary/30 bg-bg px-4 py-3 text-base text-text outline-none transition placeholder:text-text/40 focus:border-secondary"

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center px-6 pt-14"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: info */}
        <div className="text-center lg:text-left">
          <p className="text-lg font-semibold text-secondary sm:text-xl">
            Get in touch
          </p>
          <h2 className="mt-2 text-5xl font-extrabold tracking-tight text-text sm:text-6xl">
            Contact <span className="text-secondary">Me</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text/70 sm:text-lg lg:mx-0">
            Have a project in mind or want to work together? Send me a message
            and I'll get back to you as soon as I can.
          </p>

          <div className="mt-8 space-y-4 text-text">
            <p className="flex items-center justify-center gap-3 lg:justify-start">
              <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              farhan@example.com
            </p>
            <p className="flex items-center justify-center gap-3 lg:justify-start">
              <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              Kohat, Pakistan
            </p>
          </div>

          <div className="mt-8 flex justify-center gap-5 text-text/70 lg:justify-start">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition hover:-translate-y-1 hover:text-secondary"
            >
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition hover:-translate-y-1 hover:text-secondary"
            >
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-secondary/30 bg-primary p-6 shadow-xl shadow-black/20 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-text">
              Name
            </label>
            <input id="name" name="name" type="text" required placeholder="Your name" className={input} />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-text">
              Email
            </label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" className={input} />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-text">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project..."
              className={`${input} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-secondary px-8 py-3.5 text-base font-semibold text-bg transition hover:opacity-90"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-center text-sm text-secondary">
              Thanks! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact