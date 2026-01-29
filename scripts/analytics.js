import { previewContainer, teamCollaborationMembers, projectsType } from "./dashboard.js";
import { account1, account2, account3, accounts, currentAccount} from "./index.js";

export const analyticsPageFullHTML = `
<div class="analytics-page">

  <!-- HEADER -->
  <div class="analytics-header">
    <div>
      <h2>Analytics</h2>
      <p>Track productivity, progress, and performance insights</p>
    </div>

    <div class="analytics-actions">
      <select class="analytics-filter">
        <option>This Week</option>
        <option>This Month</option>
        <option>This Year</option>
      </select>
    </div>
  </div>

  <!-- TOP STATS -->
  <div class="analytics-stats">
  </div>

  <!-- MAIN GRID -->
  <div class="analytics-grid">

    <!-- LEFT -->
    <div class="analytics-left">
      <div class="chart-card">
        <h4>Task Completion Trend</h4>
        <canvas id="taskCompletionChart"></canvas>
      </div>

      <div class="chart-card">
        <h4>Productivity Over Time</h4>
        <canvas id="productivityChart"></canvas>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="analytics-right">
      <div class="card score-card">
        <h4>Productivity Score</h4>
        <div class="score-circle">78%</div>
        <p>Above average performance</p>
      </div>

      <div class="card">
        <h4>Status Breakdown</h4>

        <div class="status-row">
          <span>Completed</span>
          <span>67%</span>
        </div>

        <div class="status-row">
          <span>In Progress</span>
          <span>25%</span>
        </div>

        <div class="status-row">
          <span>Pending</span>
          <span>8%</span>
        </div>
      </div>
    </div>

  </div>

  <!-- BOTTOM -->
  <div class="analytics-bottom">
    <div class="card">
      <h4>Team Performance</h4>

      <table class="analytics-table">
        <thead>
          <tr>
            <th>Member</th>
            <th>Tasks</th>
            <th>Completed</th>
            <th>Efficiency</th>
          </tr>
        </thead>
        <tbody class="team-performance-container">
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

const teamPerformanceInfo = [{
  tasks: 24,
  completedTask: 20,
  efficiency: 83
}, {
  tasks: 18,
  completedTask: 14,
  efficiency: 77
},{
  tasks: 15,
  completedTask: 11,
  efficiency: 73
}]
function teamPerformance() {
  let teamPerformanceList = "";

  teamPerformanceInfo.forEach((taskInfos) => {
    teamCollaborationMembers.forEach((names) => {
      teamPerformanceList += ` 
        <tr>
          <td>${names.memberName}</td>
          <td>${taskInfos.tasks}</td>
          <td>${taskInfos.completedTask}</td>
          <td>${taskInfos.efficiency}%</td>
        </tr>
      `
    })

    }
  )
  console.log(teamPerformanceList);
  document.querySelector('.team-performance-container').innerHTML = teamPerformanceList;
}

;
export const initAnalytics = () => {

  if (!currentAccount) return;
  
  const dashboard = currentAccount.dashboard;
  const teamPage = currentAccount.teamPage;
  const analytics = currentAccount.analytics


  function taskAnalyticsFunction(projectsType) {
    let taskAnalytics = "";
  
    dashboard.projectsType.forEach((analyticsTaskInfo) => {
      taskAnalytics += `
        <div class="stat-card">
          <p>${analyticsTaskInfo.taskAnalyticTitle}</p>
          <h3>${analyticsTaskInfo.weekly_task}</h3>
          <span>${analyticsTaskInfo.incrementLevel}</span>
        </div>
      `;
    })
    console.log(taskAnalytics);
    document.querySelector('.analytics-stats').innerHTML = taskAnalytics;
  }

  taskAnalyticsFunction(dashboard.projectsType)

    // Example: ApexCharts or any chart library init
          /* ================================
        Task Completion Trend Chart
      ================================ */

      // const taskCompletionCtx = document
      // .getElementById("taskCompletionChart")
      // .getContext("2d");

      const taskCompletionCtx = document
      .getElementById("taskCompletionChart")
      .getContext("2d")


      new Chart(taskCompletionCtx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
          {
            label: "Tasks Completed",
            data: [18, 22, 30, 27, 38],
            borderColor: "#4CAF50",
            backgroundColor: "rgba(76, 175, 80, 0.15)",
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointBackgroundColor: "#4CAF50"
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: "#eee" }
          },
          x: {
            grid: { display: false }
          }
        }
      }
      });

      /* ================================
      Productivity Over Time Chart
      ================================ */
      taskAnalyticsFunction();

      const productivityCtx = document
      .getElementById("productivityChart")
      .getContext("2d");

      new Chart(productivityCtx, {
      type: "line",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Productivity %",
            data: [62, 71, 76, 78],
            borderColor: "#2E7D32",
            backgroundColor: "rgba(46, 125, 50, 0.12)",
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointBackgroundColor: "#2E7D32"
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.raw + "% productivity";
              }
            }
          }
        },
        scales: {
          y: {
            min: 10,
            max: 100,
            ticks: {
              callback: value => value + "%"
            },
            grid: { color: "#eee" }
          },
          x: {
            grid: { display: false }
          }
        }
      }
      });

      teamPerformance()

    console.log("Analytics page initialized");
  };