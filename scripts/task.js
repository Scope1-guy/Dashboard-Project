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
  <div class="task-group">
    <h4>Today</h4>

    <div class="task-row">
      <input type="checkbox">
      <div class="task-info">
        <h5>User Authentication System Bug Fixes</h5>
        <span class="task-tag">Website Development</span>
      </div>

      <div class="task-progress">
        <div class="progress-bar"><span style="width:50%"></span></div>
        <small>50%</small>
      </div>

      <span class="priority high">High</span>
      <span class="due">Today</span>

      <div class="avatars">
        <img src="https://i.pravatar.cc/32?img=12">
        <img src="https://i.pravatar.cc/32?img=32">
      </div>
    </div>

    <div class="task-row">
      <input type="checkbox">
      <div class="task-info">
        <h5>Update User Profile Page UI</h5>
        <span class="task-tag">Internal Dashboard</span>
      </div>

      <div class="task-progress">
        <div class="progress-bar"><span style="width:20%"></span></div>
        <small>20%</small>
      </div>

      <span class="priority medium">Medium</span>
      <span class="due">Today</span>

      <div class="avatars">
        <img src="https://i.pravatar.cc/32?img=15">
      </div>
    </div>

    <div class="task-row">
      <input type="checkbox">
      <div class="task-info">
        <h5>Update Create Monthly Performance Report</h5>
        <span class="task-tag">Data Analysis</span>
      </div>

      <div class="task-progress">
        <div class="progress-bar"><span style="width:10%"></span></div>
        <small>10%</small>
      </div>

      <span class="priority medium">Low</span>
      <span class="due">Today</span>

      <div class="avatars">
        <img src="https://i.pravatar.cc/32?img=15">
      </div>
    </div>
  </div>

  <!-- UPCOMING -->
  <div class="task-group">
    <h4>Upcoming</h4>

    <div class="task-row">
      <input type="checkbox">
      <div class="task-info">
        <h5>Optimize SEO Settings</h5>
        <span class="task-tag">Marketing Campaign</span>
      </div>

      <div class="task-progress">
        <div class="progress-bar"><span style="width:0%"></span></div>
        <small>0%</small>
      </div>

      <span class="priority high">High</span>
      <span class="due">Apr 26</span>

      <div class="avatars">
        <img src="https://i.pravatar.cc/32?img=21">
      </div>
    </div>

    <div class="task-row">
      <input type="checkbox">
      <div class="task-info">
        <h5>Prepare Presentation Slides</h5>
        <span class="task-tag">Onboarding New Clients</span>
      </div>

      <div class="task-progress">
        <div class="progress-bar"><span style="width:0%"></span></div>
        <small>0%</small>
      </div>

      <span class="priority high">High</span>
      <span class="due">Apr 26</span>

      <div class="avatars">
        <img src="https://i.pravatar.cc/32?img=21">
      </div>
    </div>

    <div class="task-row">
      <input type="checkbox">
      <div class="task-info">
        <h5>Fix Dashboard Layout Issue</h5>
        <span class="task-tag">Internal Dashboard</span>
      </div>

      <div class="task-progress">
        <div class="progress-bar"><span style="width:0%"></span></div>
        <small>0%</small>
      </div>

      <span class="priority high">High</span>
      <span class="due">Apr 26</span>

      <div class="avatars">
        <img src="https://i.pravatar.cc/32?img=21">
      </div>
    </div>
  </div>

</div>
`;

export const initTasks = () => {
    const tabs = document.querySelectorAll(".tab");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
      });
    });
  
    console.log("Tasks page initialized");
  };