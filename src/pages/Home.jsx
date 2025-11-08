import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Cards from '../components/Cards'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
           <Navbar />
      <Intro />
      <Cards />
      <Projects />
      <Footer />

    </div>
  )
}
