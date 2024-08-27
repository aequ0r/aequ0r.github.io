const username = 'aequ0r';

async function fetchGitHubProjects() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const projects = await response.json();
        displayProjects(projects);
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
    }
}

function displayProjects(projects) {
    const projectsContainer = document.getElementById('projects');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description || 'No description available.'}</p>
            <a href="${project.html_url}" target="_blank">View on GitHub</a>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

document.addEventListener('DOMContentLoaded', fetchGitHubProjects);
