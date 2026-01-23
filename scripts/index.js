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
const loginPageVariable = document.querySelector(".login-page-body");
const pageBody = document.querySelector('.page-body');
const pageAccountName = document.querySelector('.mp-user-name');
const pageAccountEmail = document.querySelector('.mp-user-email');



export const account1 = {
  email: "the.guyyy1203@gmail.com",
  password: "Ayanfe1211@",
  accountName: "Samuel Olalekan",
  userProjectProgress: 78
};
export const account2 = {
  email: "ogunbanwosaheedeniola74@gmail.com",
  password: "Scope0932#",
  accountName: "Saheed Ogunbanwo",
  userProjectProgress: 48
};
export const account3 = {
  email: "scope9750@gmail.com",
  password: "scope12@",
  accountName: "Beatrice Oluwakemi",
  userProjectProgress: 70
  
};

export const accounts = [account1, account2, account3]

export let currentAccount;

const initLogin = () => {
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.querySelector('.email-input').value;
  const password = document.querySelector('.password-input').value;
  
  if (!email || !password) {
      alert("Please fill in all fields");
      return;
  }

  currentAccount = accounts.find(acc => acc.email === email);

  if (!currentAccount) {
    alert("Account not found");
    return;
  }

  if (currentAccount?.password !== password) {
    alert("incorrect password");
    return;
  }
  
  // Temporary frontend session (for now)
  localStorage.setItem("isLoggedIn", true);
  localStorage.setItem("userEmail", currentAccount.email);

  loginPageVariable.style.display = "none";
  pageBody.style.display = "flex";
  pageAccountName.textContent = currentAccount.accountName;
  pageAccountEmail.textContent = currentAccount.email

  console.log("Login Successful", currentAccount.email);
  });
}
initLogin();


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
