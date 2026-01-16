import { previewContainer } from "./dashboard.js";

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


// const progressBarNumber = document.querySelector('.progress-input');

const today = new Date();
const formattedDate = today.toLocaleDateString("en-US", {
  weekday: "long",
  month: "short",
  day: "numeric",
  year: "numeric"
})

function futureDate(daysOffset) {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function todayTaskFunction() {
const todayTaskList = [{
  taskName: "User Authentication System Bug Fixes",
  taskStack: "Website Development",
  taskProgressBar: 20,
  taskCompletionPercentage: "",
  priorityLevel: "medium",
  dueDate: formattedDate,
  assignedMemberOne: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
  assignedMemberTwo: "https://i.pravatar.cc/32?img=32"
}];

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
        <select class="progress-input">
            <option value="0">0</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
        </select>
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

function upcomingTaskFunction() {
  const upcomingTaskList = [{
    taskName: "User Authentication System Bug Fixes",
    taskStack: "Website Development",
    taskProgressBar: 20,
    taskCompletionPercentage: "",
    priorityLevel: "medium",
    dueDate: futureDate(10),
    assignedMemberOne: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
    assignedMemberTwo: "https://i.pravatar.cc/32?img=32"
  }];

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
          <select class="progress-input">
              <option value="0">0</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
          </select>
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

export const initTasks = () => {
    const tabs = document.querySelectorAll(".tab");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
      });
    });
  
    todayTaskFunction();
    upcomingTaskFunction();

    console.log("Tasks page initialized");
  };