import React from 'react'
import './About.css'
import Navbar from '../components/Navbar'
export default function About() {
  return (
    <div>
      <Navbar />
    <div className='About'>
      <div className='About-Head'>
      <h1>MUHAMMAD ZAKIR KHAN<br />
      03010448188
      hafizmuhammadzakirkhan@gmail.com <br />
      </h1>
      <img src="my-pic.jfif" alt="" />
     </div>
    <p> 
      Hi, I’m Zakir Khan, a passionate and dedicated Computer Science student with a strong interest in web development and technology. I enjoy learning new tools, building creative projects, and improving my coding skills every day.

I’m familiar with HTML, CSS, JavaScript, and React.js, and I love turning ideas into real, functional websites and applications. My goal is to grow as a developer, contribute to meaningful projects, and continuously expand my knowledge in the tech field.

In my free time, I enjoy playing football, exploring new technologies, and solving coding challenges.
    </p>
    <h2>MY PROJECTS</h2>
    <div className='About-img'>
      <img src="calculator.webp" alt="" />
    <img src="weather-app.webp" alt="" />
    <img src="todo-app.png" alt="" />
    </div>
    </div>

    </div>
  )
}
 