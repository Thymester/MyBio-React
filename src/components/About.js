// components/About.js
import React from 'react';

function About() {
  return (
    <div className="section-about" id="about">
        <h2>About Me</h2>
        <p>
          I'm Thymester, a passionate programmer and developer with a love for creating
          innovative and practical solutions. My favorite languages are JavaScript and C#,
          and I prefer working with React and Flask for building web applications.
        </p>
        <p>
          In my free time, you can often find me experimenting with new technologies,
          contributing to open-source projects, and working on personal coding projects.
        </p>
        <p>
          You can check out my GitHub profile:
          <a href="https://github.com/Thymester" target="_blank" rel="noreferrer">
            Thymester
          </a>
        </p>
        <ul className="left-align">
          <li>Degree: Associates Degree in CIT-Computer Networking/CIT-Computer Programming</li>
          <li>Currently: Motorcoach Operator & Part-Time Bus Driver</li>
          <li>
            Quality Control Experience: WeVPN - Company is now shutdown.
          </li>
          <li>
            Company: <a href="https://www.golamers.com/" target="_blank" rel="noreferrer">
              Lamers Bus Lines
            </a>
          </li>
          <li>How to reach me on Discord: agony8602</li>
          <li>How to reach me on Github: Thymester</li>
          <li>Languages: JavaScript (React), HTML, CSS, C#, Python, and Lua.</li>
          <li>I only do front-end design, I have never done back-end.</li>
        </ul>
      </div>
  );
}

export default About;
