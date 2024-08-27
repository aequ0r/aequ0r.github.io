document.addEventListener('DOMContentLoaded', function() {
    const username = 'your-github-username';
    const token = 'your-github-token'; // Store this securely, e.g., in an environment variable if server-side

    fetch(`https://api.github.com/users/${username}/repos`, {
        headers: {
            'Authorization': `token ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const projectsContainer = document.getElementById('projects');
        
        data.forEach(repo => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            projectCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description available.'}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;

            projectsContainer.appendChild(projectCard);
        });
    })
    .catch(error => console.error('Error fetching GitHub repositories:', error));
});
