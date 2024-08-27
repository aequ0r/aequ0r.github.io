document.addEventListener('DOMContentLoaded', function() {
    const username = 'aequ0r';

    fetch(`https://api.github.com/users/${username}/repos`)
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
