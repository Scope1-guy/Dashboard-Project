import { previewContainer } from "./dashboard.js";
import { currentAccount } from "./index.js";

export const taskPageFullHTML = `
<div class="tasks-page">

  <!-- HEADER -->
  <div class="tasks-header">
    <div>
      <h2>Tasks</h2>
      <p>Manage and organize your tasks efficiently.</p>
    </div>

    <div class="tasks-header-actions">
      <button class="primary-btn">+ Add Task</button>
      <button class="icon-btn">•••</button>
      <dialog class="task-form"></dialog>
    </div>
  </div>

  <!-- TABS -->
  <div class="tasks-tabs">
    <button class="tab active">All Tasks</button>
    <button class="tab">My Tasks</button>
    <button class="tab">In Progress</button>
    <button class="tab">Completed</button>
  </div>

  <!-- FILTER BAR -->
  <div class="tasks-filters">
    <button class="filter-btn">Filter</button>
    <button class="filter-btn">Today</button>
    <button class="filter-btn">Priority</button>
    <button class="filter-btn">Due date</button>
    <input class="search-input" placeholder="Search">
  </div>

  <!-- TASK GROUP -->
  <div class="task-group today-task-group">
    <h4>Today</h4>
  </div>

  <!-- UPCOMING -->
  <div class="task-group upcoming-task-group">
    <h4>Upcoming</h4>
  </div>

</div>
`;

const today = new Date();
export const formattedDate = today.toLocaleDateString("en-US", {
  weekday: "long",
  month: "short",
  day: "numeric",
  year: "numeric"
});


export function futureDate(daysOffset) {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

export const initTasks = () => {
  if (!currentAccount) return;

  const dashboard = currentAccount.dashboard;
  const taskPage = currentAccount.taskPage;


  const tabs = document.querySelectorAll(".tab");
  const addTask = document.querySelector('.primary-btn');
  const taskDialog = document.querySelector(".task-form");

  addTask.addEventListener('click', () => {
    taskDialog.showModal();
  })
  
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  function todayTaskFunction(todayTaskList) {
    // const progressBar = document.querySelector('.progress-bar').style.width;
    
    // let priorityLevel = progressBar >= 0 && progressBar < 30 ? "low" : progressBar >= 30 && progressBar < 70  ? "medium" : "high"; 
  
    let todayTaskHTML = '';
  
    todayTaskList.forEach((tsk) => {
      todayTaskHTML += `
        <div class="task-row">
          <input type="checkbox">
          <div class="task-info">
            <h5>${tsk.taskName}</h5>
            <span class="task-tag">${tsk.taskStack}</span>
          </div>
  
          <div class="task-progress">
            <div class="progress-bar"><span style="width:${tsk.taskProgressBar}%"></span></div>
            <!--
              <select class="progress-input-today">
                  <option value="0">0</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="75">75</option>
                  <option value="100">100</option>
              </select>
            -->
          </div>
  
          <span class="priority high">${tsk.priorityLevel}</span>
          <span class="due">${tsk.dueDate}</span>
  
          <div class="avatars">
            <img src="${tsk.assignedMemberOne}">
            <img src="${tsk.assignedMemberTwo}">
          </div>
        </div>
      `
    })
    document.querySelector(".today-task-group").insertAdjacentHTML( "beforeend",todayTaskHTML);
  }
  
  function upcomingTaskFunction(upcomingTaskList) {
  
    // const progressBar = document.querySelector('.progress-bar').style.width;
  
    // let progressLevelText = document.querySelector('.priority-level');
    // // console.log(progressLevelText)
    
    // let priorityLevel = progressBar >= 0 && progressBar < 30 ? progressLevelText.textContent = "low" : progressBar >= 30 && progressBar < 70  ? progressLevelText.textContent = "medium" : "high";

  
    let upcomingTaskHTML = '';
  
    upcomingTaskList.forEach((tsk) => {
      upcomingTaskHTML += `
        <div class="task-row">
          <input type="checkbox">
          <div class="task-info">
            <h5>${tsk.taskName}</h5>
            <span class="task-tag">${tsk.taskStack}</span>
          </div>
  
          <div class="task-progress">
            <div class="progress-bar"><span style="width:${tsk.taskProgressBar}%"></span></div>
            <!--
              <select class="progress-input">
                  <option value="0">0</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="75">75</option>
                  <option value="100">100</option>
              </select>
            -->
          </div>
  
          <span class="priority high">${tsk.priorityLevel}</span>
          <span class="due">${tsk.dueDate}</span>
  
          <div class="avatars">
            <img src="${tsk.assignedMemberOne}">
            <img src="${tsk.assignedMemberTwo}">
          </div>
        </div>
      `
    })
    document.querySelector(".upcoming-task-group").insertAdjacentHTML( "beforeend",upcomingTaskHTML);
  }
  todayTaskFunction(taskPage.todayTaskList);
  upcomingTaskFunction(taskPage.upcomingTaskList);

  console.log("Tasks page initialized");
};