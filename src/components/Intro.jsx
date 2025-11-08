import React from "react";
import "./Intro.css";
export default function Info() {
  return (
    <>
      <div className="container">
        <div className="details">
          <h1>
            Hi, I am Muhammad Zakir <br />
            Web Developer
          </h1>

          <p>
            I'm a dedicated web developer specializing in building responsive,
            efficient, and user-focused websites using moden technologies
          </p>

          <a href="https://sg.docworkspace.com/d/sIMSHsKjKArj1qMgG?sa=601.1037" className="btn">
            Download Resume
          </a>
        </div>

        <div className="profile-pic">
          <img src="my-pic.jfif" alt="" />
        </div>
      </div>
    </>
  );
}
