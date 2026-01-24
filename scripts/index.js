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
  dashboard: {
    userProjectProgress: 78,
    projectsType: [
        {
            taskAnalyticTitle: "Total Task",
            title: "Total Projects",
            action: () => {},
            number: 2,
            increment: "Increased from last month",
            incrementLevel: "↑ 12% from last week"
        },
        {
            taskAnalyticTitle: "Completed",
            title: "Ended Projects",
            action: () => {},
            number: 0,
            increment: "Increased from last month",
            incrementLevel: "↑ 8% improvement"
        },
        {
            taskAnalyticTitle: "In Progress",
            title: "Running Projects",
            action: () => {},
            number: 1,
            increment: "Increased from last month",
            incrementLevel: "Stable"
        },
        {
            taskAnalyticTitle: "Overdue",
            title: "Pending Projects",
            action: () => {},
            number: 1,
            increment: "On Discuss",
            incrementLevel: "Needs attention"
        },
    ],
    options: {
      chart: {
          type: "bar",
          height: 200,
          toolbar: { show: false },
      },
      series: [
          {
          data: [30, 50, 40, 70, 60, 45, 35],
          },
      ],
      plotOptions: {
          bar: {
          columnWidth: "60%",
          borderRadius: 10,
          distributed: true,
          },
      },
      fill: {
          type: ["pattern", "solid"],
          pattern: {
          style: ["slantedLines"],
          width: 4,
          height: 6,
          },
      },
      
      grid: {
          show: false,
          padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          },
      },
      xaxis: {
          categories: ["S", "M", "T", "W", "T", "F", "S"],
          labels: { show: false },
          axisBorder: { show: false },
          axisTicks: { show: false },
          crosshairs: { show: false },
      },
      yaxis: { show: false },
      legend: { show: false },
      dataLabels: { enabled: false },
      colors: [
          "#d1d5db",
          "#16a34a",
          "#86efac",
          "#166534",
          "#22c55e",
          "#d1d5db",
          "#d1d5db",
      ],
    },
    teamCollaborationMembers: [
      {
          memberPicture: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
          memberName: "Samuel Olalekan",
          workingOn: "Github Project Repository",
          roleProgress: "Completed",
          title: "Frontend",
          activeness: "Active",
          color: "rgb(0, 78, 0)",
          border: "rgba(66, 128, 66, 0.27)",
      },
      {
          memberPicture: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
          memberName: "Edward Noah",
          workingOn: "Integrate User Authentication System",
          roleProgress: "InProgress",
          title: "Frontend",
          activeness: "Active",
          color: "rgb(241, 194, 92)",
          border: "rgb(243, 209, 136, 0.27)",
      },
      {
          memberPicture: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
          memberName: "Oluwasola Oluwakemi",
          workingOn: "Develop Search and Filter Functionality",
          roleProgress: "Pending",
          title: "Frontend",
          activeness: "Active",
          color: "rgb(255, 0, 119)",
          border: "rgb(245, 188, 215, 0.27)",
      },
    ],
    projectStackType: [
      {
        stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
        stackName: "Develop API Endpoints",
        dueDate: "Nov 26, 2004",
      },
      {
        stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
        stackName: "Onboarding Flow",
        dueDate: "Nov 26, 2004",
      },
      {
        stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
        stackName: "Build Dashboard",
        dueDate: "Nov 26, 2004",
      },
      {
        stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
        stackName: "Optimize Page Load",
        dueDate: "Nov 26, 2004",
      },
      {
        stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
        stackName: "Cross-Browser Testing",
        dueDate: "Nov 26, 2004",
      },
    ]
  }
};
export const account2 = {
  email: "ogunbanwosaheedeniola74@gmail.com",
  password: "Scope0932#",
  accountName: "Saheed Ogunbanwo",
  dashboard: {
    userProjectProgress: 78,
    projectsType: [
        {
            taskAnalyticTitle: "Total Task",
            title: "Total Projects",
            action: () => {},
            number: 2,
            increment: "Increased from last month",
            incrementLevel: "↑ 12% from last week"
        },
        {
            taskAnalyticTitle: "Completed",
            title: "Ended Projects",
            action: () => {},
            number: 0,
            increment: "Increased from last month",
            incrementLevel: "↑ 8% improvement"
        },
        {
            taskAnalyticTitle: "In Progress",
            title: "Running Projects",
            action: () => {},
            number: 1,
            increment: "Increased from last month",
            incrementLevel: "Stable"
        },
        {
            taskAnalyticTitle: "Overdue",
            title: "Pending Projects",
            action: () => {},
            number: 1,
            increment: "On Discuss",
            incrementLevel: "Needs attention"
        },
    ],
    options: {
      chart: {
          type: "bar",
          height: 200,
          toolbar: { show: false },
      },
      series: [
          {
          data: [30, 50, 40, 70, 60, 45, 35],
          },
      ],
      plotOptions: {
          bar: {
          columnWidth: "60%",
          borderRadius: 10,
          distributed: true,
          },
      },
      fill: {
          type: ["pattern", "solid"],
          pattern: {
          style: ["slantedLines"],
          width: 4,
          height: 6,
          },
      },
      
      grid: {
          show: false,
          padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          },
      },
      xaxis: {
          categories: ["S", "M", "T", "W", "T", "F", "S"],
          labels: { show: false },
          axisBorder: { show: false },
          axisTicks: { show: false },
          crosshairs: { show: false },
      },
      yaxis: { show: false },
      legend: { show: false },
      dataLabels: { enabled: false },
      colors: [
          "#d1d5db",
          "#16a34a",
          "#86efac",
          "#166534",
          "#22c55e",
          "#d1d5db",
          "#d1d5db",
      ],
    },
    teamCollaborationMembers: [
      {
          memberPicture: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
          memberName: "Samuel Olalekan",
          workingOn: "Github Project Repository",
          roleProgress: "Completed",
          title: "Frontend",
          activeness: "Active",
          color: "rgb(0, 78, 0)",
          border: "rgba(66, 128, 66, 0.27)",
      },
      {
          memberPicture: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
          memberName: "Edward Noah",
          workingOn: "Integrate User Authentication System",
          roleProgress: "InProgress",
          title: "Frontend",
          activeness: "Active",
          color: "rgb(241, 194, 92)",
          border: "rgb(243, 209, 136, 0.27)",
      },
      {
          memberPicture: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
          memberName: "Oluwasola Oluwakemi",
          workingOn: "Develop Search and Filter Functionality",
          roleProgress: "Pending",
          title: "Frontend",
          activeness: "Active",
          color: "rgb(255, 0, 119)",
          border: "rgb(245, 188, 215, 0.27)",
      },
    ],
    projectStackType: [
      {
        stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
        stackName: "Develop API Endpoints",
        dueDate: "Nov 26, 2004",
      },
      {
        stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
        stackName: "Onboarding Flow",
        dueDate: "Nov 26, 2004",
      },
      {
        stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
        stackName: "Build Dashboard",
        dueDate: "Nov 26, 2004",
      },
      {
        stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
        stackName: "Optimize Page Load",
        dueDate: "Nov 26, 2004",
      },
      {
        stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
        stackName: "Cross-Browser Testing",
        dueDate: "Nov 26, 2004",
      },
    ]
  }
};
export const account3 = {
  email: "scope9750@gmail.com",
  password: "scope12@",
  accountName: "Beatrice Oluwakemi",
  dashboard: {
    userProjectProgress: 78,
    projectsType: [
        {
            taskAnalyticTitle: "Total Task",
            title: "Total Projects",
            action: () => {},
            number: 2,
            increment: "Increased from last month",
            incrementLevel: "↑ 12% from last week"
        },
        {
            taskAnalyticTitle: "Completed",
            title: "Ended Projects",
            action: () => {},
            number: 0,
            increment: "Increased from last month",
            incrementLevel: "↑ 8% improvement"
        },
        {
            taskAnalyticTitle: "In Progress",
            title: "Running Projects",
            action: () => {},
            number: 1,
            increment: "Increased from last month",
            incrementLevel: "Stable"
        },
        {
            taskAnalyticTitle: "Overdue",
            title: "Pending Projects",
            action: () => {},
            number: 1,
            increment: "On Discuss",
            incrementLevel: "Needs attention"
        },
    ],
    options: {
      chart: {
          type: "bar",
          height: 200,
          toolbar: { show: false },
      },
      series: [
          {
          data: [30, 50, 40, 70, 60, 45, 35],
          },
      ],
      plotOptions: {
          bar: {
          columnWidth: "60%",
          borderRadius: 10,
          distributed: true,
          },
      },
      fill: {
          type: ["pattern", "solid"],
          pattern: {
          style: ["slantedLines"],
          width: 4,
          height: 6,
          },
      },
      
      grid: {
          show: false,
          padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          },
      },
      xaxis: {
          categories: ["S", "M", "T", "W", "T", "F", "S"],
          labels: { show: false },
          axisBorder: { show: false },
          axisTicks: { show: false },
          crosshairs: { show: false },
      },
      yaxis: { show: false },
      legend: { show: false },
      dataLabels: { enabled: false },
      colors: [
          "#d1d5db",
          "#16a34a",
          "#86efac",
          "#166534",
          "#22c55e",
          "#d1d5db",
          "#d1d5db",
      ],
    },
    teamCollaborationMembers: [
      {
          memberPicture: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
          memberName: "Samuel Olalekan",
          workingOn: "Github Project Repository",
          roleProgress: "Completed",
          title: "Frontend",
          activeness: "Active",
          color: "rgb(0, 78, 0)",
          border: "rgba(66, 128, 66, 0.27)",
      },
      {
          memberPicture: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
          memberName: "Edward Noah",
          workingOn: "Integrate User Authentication System",
          roleProgress: "InProgress",
          title: "Frontend",
          activeness: "Active",
          color: "rgb(241, 194, 92)",
          border: "rgb(243, 209, 136, 0.27)",
      },
      {
          memberPicture: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
          memberName: "Oluwasola Oluwakemi",
          workingOn: "Develop Search and Filter Functionality",
          roleProgress: "Pending",
          title: "Frontend",
          activeness: "Active",
          color: "rgb(255, 0, 119)",
          border: "rgb(245, 188, 215, 0.27)",
      },
    ],
    projectStackType: [
      {
        stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
        stackName: "Develop API Endpoints",
        dueDate: "Nov 26, 2004",
      },
      {
        stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
        stackName: "Onboarding Flow",
        dueDate: "Nov 26, 2004",
      },
      {
        stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
        stackName: "Build Dashboard",
        dueDate: "Nov 26, 2004",
      },
      {
        stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
        stackName: "Optimize Page Load",
        dueDate: "Nov 26, 2004",
      },
      {
        stackImage: "Pictures/icons/—Pngtree—vector notification icon_4187244.png",
        stackName: "Cross-Browser Testing",
        dueDate: "Nov 26, 2004",
      },
    ]
  }
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
  });
}
initLogin();

console.log("Login Successful", currentAccount);


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
