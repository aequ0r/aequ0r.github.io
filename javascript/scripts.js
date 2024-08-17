document.addEventListener("DOMContentLoaded", () => {
    // Fetch projects from GitHub
    fetch('https://api.github.com/users/aequ0r/repos')
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById('project-list');
            data.forEach(repo => {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'No description available.'}</p>
                    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                `;
                projectList.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching GitHub projects:', error);
        });

    // Detect and apply theme based on system preference
    const theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
});
