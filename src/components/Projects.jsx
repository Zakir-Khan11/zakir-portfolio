import React from 'react'
import './Projects.css'
export default function Projects() {
  return (
    <>
      {/* Featured Work */}
  <section className="featured-work">
    <h1>Featured Works</h1>
    <div className="project-card">
      <div className="card-text">
      <img src="weather-app.webp" alt="" />
      <button className='btn-open'>OPEN</button>
        <h2 >Weather App</h2>
        <p>Weather apps are software that provide real-time forecasts, hourly and daily updates, and interactive radar
          maps to help users plan their day. They use technology to collect and process atmospheric data, displaying
          information like temperature, precipitation chances, wind speed, and humidity in a user-friendly interface.
          While free versions may contain ads, many apps offer paid subscriptions for an ad-free experience and more
          frequent updates.</p>
      </div>
    </div>
    <div className="project-card">

      <div className="card-text">
      <img src="calculator.webp" alt="" />
      <button className='btn-open'>OPEN</button>
        <h2>Calculator</h2>
        <p>
          A calculator is an electronic device used to perform mathematical calculations, from simple arithmetic to
          complex functions. It has a screen and buttons with numbers and symbols, and its primary purpose is to make
          math easier and more accurate by quickly solving problems that would take hours to do manually. </p>
      </div>
    </div>
    <div className="project-card">
      <div className="card-text">
      <img src="todo-app.png " alt=""/>
      <button className='btn-open'>OPEN</button>
        <h2>Todo App</h2>
        <p>A to-do app is a digital tool that helps you manage tasks, schedules, and projects, acting as a digital
          replacement for a pen-and-paper to-do list.</p>

      </div>
    </div>
  </section>
    </>
  )
}
 