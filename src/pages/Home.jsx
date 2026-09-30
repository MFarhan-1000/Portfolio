import Navbar from '../components/Navbar'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'



function Home() {
  return (
    <div className='p-1 h-full bg-bg'>
      
      <Navbar />

      <header >
        <Hero />
      </header>

      <main>
        <About />
        <Skills />
        <Projects />
      </main>

      <footer>
        <Contact />
      </footer>
    </div>
  )
}

export default Home