import { dashBoardPageFullHTML, initDashboard } from "./dashboard.js";
import { taskPageFullHTML, initTasks } from "./task.js";
import { calendarPageFullHTML, initCalendar } from "./calendar.js";
import { analyticsPageFullHTML, initAnalytics } from "./analytics.js"
import { teamPageFullHTML, initTeam } from "./team.js"


const dashboardLI = document.querySelector(".dashboard-li");
const taskLI = document.querySelector(".task-li");
const calendarLI = document.querySelector(".calendar-li");
const analyticsLI = document.querySelector(".analytics-li");
const teamLI = document.querySelector(".team-li");


// RENDERING OF THE DASHBOARD
function renderPages(pageHTML) {
  previewContainer.innerHTML = pageHTML;
}

renderPages(dashBoardPageFullHTML); // Initial Page.
initDashboard();

// PAGE SWITCHER BUTTON CLICKER

dashboardLI.addEventListener("click", () => {
  renderPages(dashBoardPageFullHTML);
  initDashboard();
});

taskLI.addEventListener("click", () => {
  renderPages(taskPageFullHTML);
  initTasks();
});
calendarLI.addEventListener("click", () => {
  renderPages(calendarPageFullHTML);
  initCalendar();
});
analyticsLI.addEventListener("click", () => {
  renderPages(analyticsPageFullHTML);
  initAnalytics()
});
teamLI.addEventListener("click", () => {
  renderPages(teamPageFullHTML);
  initTeam();
});

// PAGE SWITCHER BUTTON CLICKER

// console.log(window.ApexCharts);
