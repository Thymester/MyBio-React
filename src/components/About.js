import React from 'react';

function About() {
  return (
    <div className="section-about" id="about">
        <h2>About Me</h2>
        <p>
          I'm Thymester, a passionate programmer and developer with a strong focus on creating innovative and practical solutions. My expertise lies in JavaScript and C#, and I 
          enjoy building dynamic applications using React and Flask. With a background in web development, I have a particular interest in front-end design and user experience.
        </p>
        <p>
          I am getting a degree in IT-Computer Programming and plan to graduate in 2026. I also have experience in quality control from my time at WeVPN. My skills include 
          JavaScript (React), HTML, CSS, C#, Python, and Lua. While my primary focus is front-end design, I also have experience with minimal backend development.
        </p>
        <p>
          You can check out my GitHub profile:
          <a href="https://github.com/Thymester" target="_blank" rel="noreferrer">
            Thymester
          </a> <br />
          Or my Portfolio:
          <a href="https://tylerthedev.pages.dev/" target="_blank" rel="noreferrer">
            Tyler The Dev
          </a>
        </p>
        <ul>
          <p className='left-align'>
              Degree: IT-Computer Programming<br />
              Quality Control Experience: WeVPN<br />
              Languages: JavaScript (React), HTML, CSS, C#, Python, and Lua.<br />
              Mostly do Frontend; however, I also have some minimal backend experience.
          </p>
          <p className='left-align'>
            Feel free to check out my <a href="https://github.com/Thymester" target="_blank" rel="noreferrer">GitHub profile</a> for more about my work and projects. If you'd like 
            to connect or learn more about my professional journey, you can reach me via 
            <a href="https://www.linkedin.com/in/tlm99/" target="_blank" rel="noreferrer">LinkedIn</a>.
          </p>
        </ul>
      </div>
  );
}

export default About;
