import { dashBoardPageFullHTML, initDashboard, previewContainer } from "./dashboard.js";
import { taskPageFullHTML, initTasks } from "./task.js";
import { calendarPageFullHTML, initCalendar } from "./calendar.js";
import { analyticsPageFullHTML, initAnalytics } from "./analytics.js";
import { teamPageFullHTML, initTeam } from "./team.js";
import { settingsPageFullHTML, initSetting } from "./settings.js";
import { helpPageFullHTML, initHelp } from "./help.js";
import { logoutPageFullHTML, initLogout } from "./logout.js";


const dashboardLI = document.querySelector(".dashboard-li");
const taskLI = document.querySelector(".task-li");
const calendarLI = document.querySelector(".calendar-li");
const analyticsLI = document.querySelector(".analytics-li");
const teamLI = document.querySelector(".team-li");
const settingLI = document.querySelector(".settings-li");
const helpLI = document.querySelector(".help-li");
const logoutLI = document.querySelector(".logout-li");




function loginPage() {

};

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
settingLI.addEventListener('click' , () => {
  renderPages(settingsPageFullHTML);
  initSetting();
});
helpLI.addEventListener('click' , () => {
  renderPages(helpPageFullHTML);
  initHelp();
})
logoutLI.addEventListener('click' , () => {
  renderPages(logoutPageFullHTML);
  initLogout();
})

// PAGE SWITCHER BUTTON CLICKER

// console.log(window.ApexCharts);
