import React, { useState, useEffect } from 'react';

function Projects() {
  const [repositories, setRepositories] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        let allRepos = [];
        let page = 1;
        let hasNextPage = true;

        while (hasNextPage) {
          const response = await fetch(`https://api.github.com/users/Thymester/repos?page=${page}&per_page=100`);
          if (!response.ok) {
            throw new Error('Failed to fetch repositories');
          }
          const data = await response.json();
          allRepos = allRepos.concat(data);
          const linkHeader = response.headers.get('Link');
          hasNextPage = linkHeader && linkHeader.includes('rel="next"');
          page++;
        }

        setRepositories(allRepos);
        setTotalCount(allRepos.length);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setError(error.message);
      }
    };

    fetchRepositories();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="section" id="portfolio">
      <h2>Paid Projects</h2>
      <div className="portfolio-item">
        <h3>VPN Guides</h3>
        <p>Bringing true and honest VPN reviews to you!</p>
        <a href="https://vpnguides.pages.dev/" target="_blank" rel="noreferrer">View Website</a>
      </div>
      <h2>My Websites</h2>
       <div className="portfolio-item">
        <h3>Satyrn VPN Tier List</h3>
        <p>A VPN Tier List with 5 years of research and commitment put into it!</p>
        <a href="https://satyrnvpntierlist.pages.dev/" target="_blank" rel="noreferrer">View Website</a>
      </div>
      <div className="portfolio-item">
        <h3>SatyrnVPN</h3>
        <p>A retired VPN project I had ran. This was a privacy focused VPN in partnership with Horizon.Pics</p>
        <a href="https://satyrnvpn.pages.dev/" target="_blank" rel="noreferrer">View Website</a>
      </div>
      <div className="portfolio-item">
        <h3>VPN Tier List</h3>
        <p>A clone of Tom Sparks VPN Tier List, this was meant as a fun little side project.</p>
        <a href="https://vpntierlist.pages.dev/" target="_blank" rel="noreferrer">View Website</a>
      </div>
      <div className="portfolio-item">
        <h3>TM Photography</h3>
        <p>Feel the passion, see the stories, this is more than just a portfolio; it's an invitation to explore, connect, and make memories last forever.</p>
        <br></br>
        <p>This is a photography portfolio of mine!</p>
        <a href="https://tm-photography.pages.dev/" target="_blank" rel="noreferrer">View Website</a>
      </div>
      <div className="portfolio-item">
        <h3>E-Z Movie Search</h3>
        <p>E-Z Movie Search: Explore movies and TV shows with ease!</p>
        <a href="https://ezmoviesearch.pages.dev/" target="_blank" rel="noreferrer">View Website</a>
      </div>
      <div className="portfolio-item">
        <h3>Evolution of Web Design</h3>
        <p>Journey through the transformation of web pages over the years.</p>
        <a href="https://evolution-of-web-design.pages.dev/" target="_blank" rel="noreferrer">View Website</a>
      </div>
      <div className="portfolio-item">
        <h3>Lua Maker</h3>
        <p>A FiveM resource lua maker website designed to make templates for FiveM scripts.</p>
        <a href="https://luamaker.pages.dev/" target="_blank" rel="noreferrer">View Website</a>
      </div>
      <div className="portfolio-item">
        <h3>Currency Calculator</h3>
        <p>A currency calculator meant to calculate the total currency based on inputted bill and coin types; also outputs the total amount of each bill type.</p>
        <a href="https://currencycalc.pages.dev/" target="_blank" rel="noreferrer">View Website</a>
      </div>
      <br></br>
      <h2>My GitHub Repositories ({totalCount})</h2>
      {repositories.map(repo => (
        <div className="portfolio-item" key={repo.id}>
          <div className="project-details">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <p>Watchers: {repo.watchers_count}</p>
            <p>Forks: {repo.forks_count}</p>
            <p>Size: {repo.size}</p>
            <p>Open Issues: {repo.open_issues_count}</p>
            <a href={repo.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;