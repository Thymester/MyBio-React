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
