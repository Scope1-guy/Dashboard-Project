const projectsType = [{
    title: "Total Projects",
    action: () => {},
    number: 24, 
    increment: "Increased from last month"
}, {
    title: "Ended Projects",
    action: () => {},
    number: 10, 
    increment: "Increased from last month"
}, {
    title: "Running Projects",
    action: () => {},
    number: 12, 
    increment: "Increased from last month"
}, {
    title: "Pending Projects",
    action: () => {},
    number: 2, 
    increment: "On Discuss"
}];

let projectHTML = "";

projectsType.forEach((project) => {
    projectHTML += `
        <div class="project-div">
            <div class="project-type">
                <h3>${project.title}</h3>
                <div class="project-arrow"></div>
            </div>

            <div class="project-number">${project.number}</div>

            <div class="project-views">
                <p>${project.increment}</p>
            </div>
        </div>
    `;
});

const projectsContainer = document.querySelector(".projects-divs-container");
projectsContainer.innerHTML = projectHTML;