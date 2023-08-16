// components/About.js
import React from 'react';

function About() {
  // Fetch GitHub profile information here if needed

  return (
    <div className="section" id="about">
      <h2>About Me</h2>
      <p>
        I'm Thymester, a passionate programmer and developer with a love for creating
        innovative and practical solutions. My favorite languages are JavaScript and C#,
        and I prefer working with React and Svelte for building web applications.
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
        {/* Add fetched GitHub information here if needed */}
      </p>
    </div>
  );
}

export default About;
