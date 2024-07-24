// components/About.js
import React from 'react';

function About() {
  return (
    <div className="section-about" id="about">
      <div className="game-section" id="game-section">
        <h2>Idle Game</h2>
        <iframe
          className="game-iframe"
          src="https://i.simmer.io/@Thymester/idle-slayer"
          title="Idle Slayer Game"
          style={{ width: '960px', height: '600px' }}
        ></iframe>
        <p>
          Armed with only your trusty blade, you embark on a quest to conquer hordes of enemies to earn gold. With each victory, you accumulate wealth to enhance your attack power 
          and speed, allowing you to strike down adversaries with increasing efficiency.
        </p>
        <p>
          But it doesn't stop there. Strategic upgrades become available as you progress, enabling you to attack multiple enemies simultaneously. Your skills evolve, empowering you 
          to handle swarms of foes that once seemed insurmountable. With each level gained and every upgrade unlocked, your journey transforms into a relentless pursuit of power and 
          dominance over the battlefield.
        </p>
        <h3>Features</h3>
        <ul>
          <li>Attack Speed upgrades</li>
          <li>Attack Damage upgrades</li>
          <li>Skills upgrades - Multi-target attacks up to eight attacks at random enemies at once.</li>
          <li>
            Attack multipliers - Enemies level 60 or less, you do x3 damage with an up to 15% chance. Enemies level 60 or more, you do up to 100x damage and up to 15x money rate per each hit 
            with a multiplier. Enemies level 70 or more, you do up to 100x times 2.75 damage and up to 15x times 30 money rate per each hit with a multiplier. Enemies level 90 or more, you 
            do up to 100x times 35 damage and up to 200x times 15 money rate per each hit with a multiplier.
          </li>
        </ul>
      </div>

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
        <ul>
          <li>Degree: Associates Degree in CIT-Computer Networking/CIT-Computer Programming</li>
          <li>Currently: Motorcoach Operator & Part-Time Bus Driver</li>
          <li>
            Company: <a href="https://www.golamers.com/" target="_blank" rel="noreferrer">
              Lamers Bus Lines
            </a>
          </li>
          <li>How to reach me on Discord: agony8602</li>
          <li>How to reach me on Github: Thymester</li>
          <li>Languages: JavaScript, HTML, CSS, C#, Python, and Lua.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
