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

