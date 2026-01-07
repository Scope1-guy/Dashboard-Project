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

const options = {
chart: {
    type: 'bar',
    height: 200,
    toolbar: { show: false }
},
series: [{
    data: [30, 50, 40, 70, 60, 45, 35]
}],
plotOptions: {
    bar: {
    columnWidth: '60%',
    borderRadius: 10,
    distributed: true
    }
},
fill: {
    type: ['pattern', 'solid'],
    pattern: {
      style: ['slantedLines'],
      width: 4,
      height: 6
    }
  }, 

grid: { show: false, 
  padding: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
 },
xaxis: {
    categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
    crosshairs: { show: false }
},
yaxis: { show: false },
legend: { show: false },
dataLabels: { enabled: false },
colors: [
    '#d1d5db',
    '#16a34a',
    '#86efac',
    '#166534',
    '#22c55e',
    '#d1d5db',
    '#d1d5db'
]
};

const chart = new ApexCharts(
document.querySelector('#projectAnalytics'),
options
);

chart.render();

console.log(window.ApexCharts);


const teamCollaborationMembers =[{
    memberPicture: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
    memberName: "Samuel Olalekan",
    workingOn: "Github Project Repository",
    roleProgress: "Completed",
    color: "rgb(0, 78, 0)",
    border: "rgba(66, 128, 66, 0.27)"
},{
    memberPicture: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
    memberName: "Edward Noah",
    workingOn: "Integrate User Authentication System",
    roleProgress: "InProgress",
    color: "rgb(241, 194, 92)",
    border: "rgb(243, 209, 136, 0.27)"
},{
    memberPicture: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
    memberName: "Oluwasola Oluwakemi",
    workingOn: "Develop Search and Filter Functionality",
    roleProgress: "Pending",
    color: "rgb(255, 0, 119)",
    border: "rgb(245, 188, 215, 0.27)"
},{
    memberPicture: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
    memberName: "Jude Judex",
    workingOn: "Responsive Layout  for Homepage",
    roleProgress: "InProgress",
    color: "rgb(241, 194, 92)",
    border: "rgb(243, 209, 136, 0.27)"
}];

let membersCollaborationHTML = "";

teamCollaborationMembers.forEach((members) => {
    membersCollaborationHTML += `
    <div class="team-p-box">
        <div class="team-member-dp">
            <img src="${members.memberPicture}">
        </div>
        <div class="team-member-info">
            <h5>${members.memberName}</h5>
            <div class="team-member-info-role">
                <p>Working on <b>${members.workingOn}</b></p>
                <button class="team-member-role-progress" style="background-color: ${members.border}; color: ${members.color}; border: 1px solid ${members.color};">${members.roleProgress}</button>
            </div>
        </div>
    </div>
    `;
})

document.querySelector(".team-profile").innerHTML = membersCollaborationHTML;



// PROGRESS TRACKER BAR
const arc = document.querySelector(".progressArc")
const ARC_LENGTH = 314;

function setProgress(percent) {
    const offset = ARC_LENGTH - (percent / 100) * ARC_LENGTH;
    arc.style.strokeDashoffset = offset
}

setProgress(41);



// PROJECT STACK TYPE FUNCTIONALITY
const projectStackType = [{
    stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
    stackName: "Develop API Endpoints",
    dueDate: "Nov 26, 2004"
},{
    stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
    stackName: "Onboarding Flow",
    dueDate: "Nov 26, 2004"
},{
    stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
    stackName: "Build Dashboard",
    dueDate: "Nov 26, 2004"
},{
    stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
    stackName: "Optimize Page Load",
    dueDate: "Nov 26, 2004"
},{
    stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
    stackName: "Cross-Browser Testing",
    dueDate: "Nov 26, 2004"
}];

let stackProfileHTML = "";

projectStackType.forEach((stack) => {
    stackProfileHTML += `
    <div class="project-types-and-date">
        <div class="project-type-icon">
            <img src="${stack.stackImage}">
        </div>
        <div class="project-type-name-date">
            <h4>${stack.stackName}</h4>
            <p>Due-date: ${stack.dueDate}</p>
        </div>
    </div>
    `;
});

document.querySelector('.list-of-project-works').innerHTML = stackProfileHTML;


