import React from 'react';

function Resume() {
  return (
    <div className="resume-section" id="resume">
      <h2>Work Experience</h2>
      <h6>Not all my experience is listed below.</h6>
      <div className="resume-container">
      <div className='resume-entry'>
          <h3>Motorcoach Operator & Part-Time School Bus Driver - Lamers Bus Lines</h3>
          <p>[Redacted Location] - 07/2024 - Present</p>
          <p>My location: [Redacted Location]</p>
          <ul className='left-align'>
            <li>Operates transit vehicles on assigned routes maintaining established time 
                schedules.</li>
            <li>Performs pre-operation safety inspections; requests servicing and repairs verbally 
                and in writing as necessary.</li>
            <li>Maintains schedules and operates transit equipment in a safe and efficient manner.  
                Maintains all required passenger and vehicle records.</li>
          </ul>
      </div>
      <div className="resume-entry">
            <h3>Quality Control Assistant - WeVPN LLC</h3>
            <p>Remote in Madison, Wisconsin - 04/2020 - 12/2022</p>
            <ul className='left-align'>
                <li>Test and assure the development team that the bug fixes and new implementations were appropriately fixed and accounted for</li>
                <li>Write detailed write-ups of my findings technically and concisely</li>
                <li>Interact with customers and ensure changes and implementations are working accordingly</li>
            </ul>
        </div>
        <div className="resume-entry">
            <h3>Tempering Lead - Cardinal Glass Industries</h3>
            <p>Spring Green, Wisconsin - 06/2021 - 02/2023</p>
            <p>My location: Spring Green, WI</p>
            <ul className='left-align'>
                <li>Lead a crew of 5-6 guys on a Furnace and help them develop the required skills for the job</li>
                <li>Manage all the scheduling and ensure everything is produced and shipped on time</li>
                <li>Asses situations with the lines and prioritize certain lines depending on external factors</li>
            </ul>
        </div>
        <div className='resume-entry'>
          <h3>Commercial Truck Driver - Swift Transportation</h3>
          <p>Phoenix, Arizona - 10/2023 - 06/2024</p>
          <p>My location: [Redacted Location]</p>
          <ul className='left-align'>
            <li>Assure truck is up to DOT standards via a Pre-Trip inspection</li>
            <li>Manage my clocks and trip plan to ensure an on-time and safe delivery</li>
            <li>Maintain a professional appearance and approach at shippers and receivers</li>
          </ul>
        </div>
        <div className="resume-entry">
          <h3>Mixer Truck Driver - Baraga County Concrete</h3>
          <p>Baraga, Michigan - 06/2023 - 10/2023</p>
          <p>My location: [Redacted Location]</p>
          <ul className='left-align'>
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
