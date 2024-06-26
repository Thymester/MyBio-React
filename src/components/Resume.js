import React from 'react';

function Resume() {
  return (
    <div className="resume-section" id="resume">
      <h2>Work Experience</h2>
      <div className="resume-container">
      <div className='resume-entry'>
          <h3>Mobile Expert - AT&T</h3>
          <p>Houghton, MI - 03/2024 - Present</p>
          <p>My location: Houghton, MI</p>
          <ul>
            <li>Mastery in analyzing customers' needs</li>
            <li>Identify and customize whole packages of wireless/voice/data products and services</li>
            <li>Expert in uncovering customers' needs and have a passion to educate, demonstrate and recommend device and service solutions</li>
          </ul>
      </div>
      <div className="resume-entry">
            <h3>Quality Control Assistant - WeVPN LLC</h3>
            <p>Remote in Madison, Wisconsin - 04/2020 - 12/2022</p>
            <ul>
                <li>Test and assure the development team that the bug fixes and new implementations were appropriately fixed and accounted for</li>
                <li>Write detailed write-ups of my findings technically and concisely</li>
                <li>Interact with customers and ensure changes and implementations are working accordingly</li>
            </ul>
        </div>
        <div className="resume-entry">
            <h3>Tempering Lead - Cardinal Glass Industries</h3>
            <p>Spring Green, Wisconsin - 06/2021 - 02/2023</p>
            <p>My location: Spring Green, WI</p>
            <ul>
                <li>Lead a crew of 5-6 guys on a Furnace and help them develop the required skills for the job</li>
                <li>Manage all the scheduling and ensure everything is produced and shipped on time</li>
                <li>Asses situations with the lines and prioritize certain lines depending on external factors</li>
            </ul>
        </div>
        <div className='resume-entry'>
          <h3>Commercial Truck Driver - Swift Transportation</h3>
          <p>Phoenix, Arizona - 10/2023 - 02/2024</p>
          <p>My location: Houghton, MI</p>
          <ul>
            <li>Assure truck is up to DOT standards via a Pre-Trip inspection</li>
            <li>Manage my clocks and trip plan to ensure an on-time and safe delivery</li>
            <li>Maintain a professional appearance and approach at shippers and receivers</li>
          </ul>
        </div>
        <div className="resume-entry">
          <h3>Mixer Truck Driver - Baraga County Concrete</h3>
          <p>Baraga, Michigan - 06/2023 - 10/2023</p>
          <p>My location: Houghton, MI</p>
          <ul>
            <li>Assure service is professional</li>
            <li>Drive CDL Class B truck safely to and from destination(s)</li>
            <li>Assure concrete is at the appropriate slump</li>
          </ul>
            </div>
        </div>
    </div>
  );
}

export default Resume;
