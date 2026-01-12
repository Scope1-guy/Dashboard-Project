"use strict"

const  dashBoardPageFullHTML = `
<div class="db-plus-tsk">
    <div class="db-text">
        <h1>Dashboard</h1>
        <p>Plan, prioritize, and accomplish your task with ease.</p>
    </div>
    <div class="db-task-btn">
        <button class="task-btn add-task-btn">+ Add Project</button>
        <button class="task-btn import-task-btn">Import Data</button>
    </div>
</div>

<div class="projects-divs-container"></div>

<div class="projects-flex-with-tracker"> <!--THE PROJECTS AND TIME-TRACKER CONTAINER-->

    <div> <!--ANALYTICS AND REMINDER CONTAINER  PLUS TEAM COLLABORATION AND PROJECT PROGRESS CONTAINER-->

        <div class="am-container"> <!--ANALYTICS AND REMINDER CONTAINER -->
            <div class="analytics-container">
                <h3>Project Analytics</h3>
                <div id="projectAnalytics" class="projectAnalytics"></div>
            </div>

            <div class="meeting-remainder-container">
                <h3 class="mrc-title">Reminders</h3>

                <p class="mrc-text">Meeting with Arc Company</p>
                <p class="mrc-time">Time: 02:00pm - 04:00pm</p>
                <button class="mrc-button">Start Meeting</button>
            </div>
        </div>

        <div class="team-collab-progress"> <!--TEAM COLLABORATION AND PROJECT PROGRESS CONTAINER -->
            <div class="team-collab">
                <div class="tc-header">
                    <h5>Team Collaboration</h5>
                    <button class="team-member-adder-btn">+ Add Member</button>
                </div>

                <div class="team-profile">
                </div>

                <dialog class="team-member-adder-popUp">
                    <form>
                        <input type="file" class="imageInput" accept="*image/*">

                        <div class="duo-form-for-flex">
                            <div>
                                <label for="firstName">First Name</label> <br>
                                <input type="text" placeholder="First Name" class="member-first-name">
                            </div>
                
                            <div>
                                <label for="lastName">Last Name</label> <br>
                                <input type="text" placeholder="Last Name" class="member-last-name">
                            </div>
                        </div>

                        <div class="duo-form-for-flex">
                            <div>
                                <label for="email">Email</label> <br>
                                <input type="email" placeholder="Email address" class="member-email">
                            </div>
                
                            <div>
                                <label>Phone Number</label> <br>
                                <input type="number" placeholder="+2348012345678" class="member-phone-number">
                            </div>
                        </div>

                        <div class="duo-form-for-flex">
                            <div>
                                <label for="country">Country</label> <br>
                                <select class="country">
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="South Africa">South Africa</option>
                                </select>
                            </div>
                
                            <div>
                                <label for="state">State</label> <br>
                                <select class="state">
                                    <option value="Lagos">Lagos</option>
                                    <option value="Ilorin">Ilorin</option>
                                    <option value="Abia">Abia</option>
                                    <option value="Ibadan">Ibadan</option>
                                </select>                
                            </div>
                        </div>

                        <div class="duo-form-for-flex">
                            <div>
                                <label for="github">Your Github Link</label> <br>
                                <input type="text" placeholder="Github Link" class="member--github-li">
                            </div>
                
                            <div>
                                <label>Your Portfolio Link</label> <br>
                                <input type="text" placeholder="www.portfolio.com" class="member--portfolio-li">
                            </div>
                        </div>

                        <div class="duo-form-for-flex">
                            <div>
                                <label>Role to be added to</label> <br>
                                <input type="text" placeholder="Enter Role" class="role-input">
                            </div>
                
                            <div>
                                <label>Level Completion</label> <br>
                                <select class="role-completion">
                                    <option value="Completed">Completed</option>
                                    <option value="Pending">Pending</option>
                                    <option value="InProgress">InProgress</option>
                                </select> 
                            </div>
                        </div>


                        <button type="submit" class="team-adder-submit">Submit</button>
                    </form>
                </dialog>
            </div>

            <div class="progress-checker-container">
                <h3>Project Progress</h3>
                <div class="progress-svg-container">
                    <svg width="240" height="120" viewBox="0 0 240 120">
                        <path d="M20 120 A100 100 0 0 1 220 120" fill="none" stroke="#e5e7eb" stroke-width="16"/>
                        <path class="progressArc" d="M20 120 A100 100 0 0 1 220 120" fill="none" stroke="#15803d" stroke-width="16" stroke-linecap="round" stroke-dasharray="314" stroke-dashoffset="314"/>
                    </svg>
                    <div class="progress-percentage">
                        <h5 class="percentage-number"></h5>
                        <p>Project Ended</p>
                    </div>
                </div>
                <div class="progress-checker-texts">
                    <div>
                        <div class="checker-color-box"></div>
                        <p>Completed</p>
                    </div>
                    <div>
                        <div class="checker-color-box"></div>
                        <p>In Progress</p>
                    </div>
                    <div>
                        <div class="checker-color-box"></div>
                        <p>Pending</p>
                    </div>
                </div>
            </div>
        </div>

    </div>


    <div class="project-and-time-tracker"> <!--PROJECT AND TIME TRACKER CONTAINER-->
        <div class="project-stack-tracker">
            <div class="ptt-header">
                <h3>Project</h3>
                <button class="ptt-project-adder">+ New</button>
            </div>

            <div class="list-of-project-works">
            </div>
        </div>

        <div class="project-time-tracker">
            <h3>Time Tracker</h3>

            <p class="tracker-timer-counting">01:24:08</p>

            <button class="pause-and-play-btn">PLAY</button>
            <button class="stop-btn"> STOP</button>
        </div>

    </div>

</div>
`;
const taskPageFullHTML = `
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
const calendarPageFullHTML = `
<div class="calendar-page">

  <!-- HEADER -->
  <div class="calendar-header">
    <div>
      <h2>Calendar</h2>
      <p>View and manage your schedule</p>
    </div>

    <div class="calendar-actions">
      <button class="calendar-nav">&lt;</button>
      <h3 class="calendar-month">April 2026</h3>
      <button class="calendar-nav">&gt;</button>
    </div>
  </div>

  <!-- MAIN GRID -->
  <div class="calendar-grid">

    <!-- CALENDAR -->
    <div class="calendar-board card">
      <div class="calendar-weekdays">
        <span>Sun</span><span>Mon</span><span>Tue</span>
        <span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
      </div>

      <div class="calendar-days">
        <!-- Empty slots -->
        <span class="empty"></span>
        <span class="empty"></span>

        <!-- Days -->
        <div class="calendar-day">
          <span>1</span>
        </div>

        <div class="calendar-day has-event">
          <span>2</span>
          <div class="event-dot"></div>
        </div>

        <div class="calendar-day today">
          <span>3</span>
          <div class="event-dot"></div>
        </div>

        <div class="calendar-day">
          <span>4</span>
        </div>

        <div class="calendar-day has-event">
          <span>5</span>
          <div class="event-dot"></div>
        </div>

        <!-- Continue days dynamically later -->
      </div>
    </div>

    <!-- EVENT PANEL -->
    <div class="calendar-events card">

      <div class="calendar-events-header">
        <h4>Events – Apr 3</h4>
        <button class="add-event-btn">+ Add Event</button>
      </div>

      <div class="event-list">

        <div class="event-item">
          <span class="event-time">10:00 AM</span>
          <div>
            <h5>Team Standup</h5>
            <p>Zoom Meeting</p>
          </div>
        </div>

        <div class="event-item">
          <span class="event-time">02:00 PM</span>
          <div>
            <h5>Meeting with Arc Company</h5>
            <p>Project Discussion</p>
          </div>
        </div>

        <div class="event-item">
          <span class="event-time">05:30 PM</span>
          <div>
            <h5>Code Review</h5>
            <p>Dashboard Module</p>
          </div>
        </div>

      </div>
    </div>

  </div>

</div>
`;
const analyticsPageFullHTML = `
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
    <div class="stat-card green">
      <p>Total Tasks</p>
      <h3>128</h3>
      <span>↑ 12% from last week</span>
    </div>

    <div class="stat-card">
      <p>Completed</p>
      <h3>86</h3>
      <span>↑ 8% improvement</span>
    </div>

    <div class="stat-card">
      <p>In Progress</p>
      <h3>32</h3>
      <span>Stable</span>
    </div>

    <div class="stat-card">
      <p>Overdue</p>
      <h3>10</h3>
      <span class="danger">Needs attention</span>
    </div>
  </div>

  <!-- MAIN GRID -->
  <div class="analytics-grid">

    <!-- LEFT -->
    <div class="analytics-left">
      <div class="card">
        <h4>Task Completion Trend</h4>
        <div id="completionChart" class="chart-box"></div>
      </div>

      <div class="card">
        <h4>Productivity Over Time</h4>
        <div id="productivityChart" class="chart-box"></div>
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
        <tbody>
          <tr>
            <td>Samuel Olalekan</td>
            <td>24</td>
            <td>20</td>
            <td>83%</td>
          </tr>
          <tr>
            <td>Edward Noah</td>
            <td>18</td>
            <td>14</td>
            <td>77%</td>
          </tr>
          <tr>
            <td>Oluwasola O.</td>
            <td>15</td>
            <td>11</td>
            <td>73%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;
const teamPageFullHTML = `
<div class="team-page">

  <!-- HEADER -->
  <div class="team-header">
    <div>
      <h2>Team</h2>
      <p>Manage your team members and their roles</p>
    </div>
    <button class="team-member-adder-btn">+ Add Member</button>
    <dialog class="team-member-adder-popUp">
      <form>
          <input type="file" class="imageInput" accept="*image/*">

          <div class="duo-form-for-flex">
              <div>
                  <label for="firstName">First Name</label> <br>
                  <input type="text" placeholder="First Name" class="member-first-name">
              </div>
  
              <div>
                  <label for="lastName">Last Name</label> <br>
                  <input type="text" placeholder="Last Name" class="member-last-name">
              </div>
          </div>

          <div class="duo-form-for-flex">
              <div>
                  <label for="email">Email</label> <br>
                  <input type="email" placeholder="Email address" class="member-email">
              </div>
  
              <div>
                  <label>Phone Number</label> <br>
                  <input type="number" placeholder="+2348012345678" class="member-phone-number">
              </div>
          </div>

          <div class="duo-form-for-flex">
              <div>
                  <label for="country">Country</label> <br>
                  <select class="country">
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Kenya">Kenya</option>
                      <option value="South Africa">South Africa</option>
                  </select>
              </div>
  
              <div>
                  <label for="state">State</label> <br>
                  <select class="state">
                      <option value="Lagos">Lagos</option>
                      <option value="Ilorin">Ilorin</option>
                      <option value="Abia">Abia</option>
                      <option value="Ibadan">Ibadan</option>
                  </select>                
              </div>
          </div>

          <div class="duo-form-for-flex">
              <div>
                  <label for="github">Your Github Link</label> <br>
                  <input type="text" placeholder="Github Link" class="member--github-li">
              </div>
  
              <div>
                  <label>Your Portfolio Link</label> <br>
                  <input type="text" placeholder="www.portfolio.com" class="member--portfolio-li">
              </div>
          </div>

          <div class="duo-form-for-flex">
              <div>
                  <label>Role to be added to</label> <br>
                  <input type="text" placeholder="Enter Role" class="role-input">
              </div>
  
              <div>
                  <label>Level Completion</label> <br>
                  <select class="role-completion">
                      <option value="Completed">Completed</option>
                      <option value="Pending">Pending</option>
                      <option value="InProgress">InProgress</option>
                  </select> 
              </div>
          </div>


          <button type="submit" class="team-adder-submit">Submit</button>
      </form>
    </dialog>
  </div>

  <!-- MAIN GRID -->
  <div class="team-grid">

    <!-- TEAM MEMBERS -->
    <div class="team-members card">
      <h3>Team Members</h3>

      <div class="team-member-list">
      </div>
    </div>

    <!-- TEAM SUMMARY -->
    <div class="team-summary card">
      <h3>Team Overview</h3>

      <div class="summary-item">
        <span>Total Members</span>
        <strong class="member-item-list">4</strong>
      </div>

      <div class="summary-item">
        <span>Active</span>
        <strong>3</strong>
      </div>

      <div class="summary-item">
        <span>Pending</span>
        <strong>1</strong>
      </div>

      <hr />

      <h4>Roles</h4>

      <div class="role-pill">Frontend Developer</div>
      <div class="role-pill">Backend Developer</div>
      <div class="role-pill">UI/UX Designer</div>
      <div class="role-pill">QA Engineer</div>
    </div>

  </div>

</div>
`;

const previewContainer = document.querySelector('.dashboard-page');

const dashboardLI = document.querySelector('.dashboard-li');
const taskLI = document.querySelector('.task-li');
const calendarLI = document.querySelector('.calendar-li');
const analyticsLI = document.querySelector('.analytics-li');
const teamLI = document.querySelector('.team-li');

// PROJECT TYPE CODE 
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
 

// PROJECT ANALYTICS
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

// TEAM COLLABORATION
const teamCollaborationMembers =[{
    memberPicture: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
    memberName: "Samuel Olalekan",
    workingOn: "Github Project Repository",
    roleProgress: "Completed",
    title: "Frontend",
    activeness: "Active",
    color: "rgb(0, 78, 0)",
    border: "rgba(66, 128, 66, 0.27)"
},{
    memberPicture: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
    memberName: "Edward Noah",
    workingOn: "Integrate User Authentication System",
    roleProgress: "InProgress",
    title: "Frontend",
    activeness: "Active",
    color: "rgb(241, 194, 92)",
    border: "rgb(243, 209, 136, 0.27)"
},{
    memberPicture: "Pictures/icons/—Pngtree—vector message icon_3996265.png",
    memberName: "Oluwasola Oluwakemi",
    workingOn: "Develop Search and Filter Functionality",
    roleProgress: "Pending",
    title: "Frontend",
    activeness: "Active",
    color: "rgb(255, 0, 119)",
    border: "rgb(245, 188, 215, 0.27)"
}];

function teamMemberCollaboration() {
let membersCollaborationHTML = "";

teamCollaborationMembers.forEach((members) => {
    membersCollaborationHTML += `
    <div class="team-p-box">
        <div class="team-member-dp">
            <img class="member-dp-img" src="${members.memberPicture}">
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
};

function teamMemberForTeamSection() {
  let teamSectionHTML = "";

  teamCollaborationMembers.forEach((team) => {
    teamSectionHTML += `
      <div class="team-member-card">
          <img src="${team.memberPicture}">
          <div class="member-info">
            <h4>${team.memberName}</h4>
            <p>${team.title}</p>
          </div>
          <span class="member-status active">${team.activeness}</span>
      </div>
      `
  });

  document.querySelector('.team-member-list').innerHTML = teamSectionHTML;
}




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

// RENDERING OF THE DASHBOARD
function renderPages(pageHTML) {
    previewContainer.innerHTML = pageHTML;
}

function handleAddMember(newMember) {
  teamCollaborationMembers.unshift(newMember);

  teamMemberCollaboration()
  teamMemberForTeamSection()
}

const initDashboard = () => {
    const projectsContainer = document.querySelector(".projects-divs-container");
    projectsContainer.innerHTML = projectHTML;

    const chart = new ApexCharts(document.querySelector('#projectAnalytics'),options);
    chart.render();

    teamMemberCollaboration(); // Team member function

// Modal Add Member variables
   // TEAM MEMBER ADDER
   const teamMemberAdderBtn = previewContainer.querySelector('.team-member-adder-btn');
   const addMemberFormBox = previewContainer.querySelector('.team-member-adder-popUp');
   const closeAddMemberFormBtn = previewContainer.querySelector('.team-adder-submit');
 

  //Form inputs element
  const picInput = previewContainer.querySelector('.imageInput');
  const picInputImg = previewContainer.querySelector('.member-dp-img')
  let selectedMemberImage = "";

  picInput.addEventListener("change" , (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
          selectedMemberImage = event.target.result; // Store
      }
      reader.readAsDataURL(file);
  });

  const memFirstName = previewContainer.querySelector('.member-first-name');
  const memLastName = previewContainer.querySelector('.member-last-name');
  const memEmail = previewContainer.querySelector('.member-email');
  const memPhoneNo = previewContainer.querySelector('.member-phone-number');
  const roleAppliedFor = previewContainer.querySelector('.role-input');
  const roleAppliedCompletion = previewContainer.querySelector('.role-completion');


    teamMemberAdderBtn.addEventListener('click', () => {
        addMemberFormBox.showModal();
    });

    closeAddMemberFormBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        addMemberFormBox.close();
    
        let completionChecker = roleAppliedCompletion.value === "Pending" ? "rgb(255, 0, 119)" : roleAppliedCompletion.value === "InProgress" ? "rgb(241, 194, 92)" : "rgb(0, 78, 0)";
      
        const NEW_MEMBER_OBJECT = {
            memberPicture: selectedMemberImage,
            memberName: `${memFirstName.value} ${memLastName.value}`,
            workingOn: roleAppliedFor.value,
            roleProgress: roleAppliedCompletion.value,
            color: completionChecker,
            border: "rgba(66, 128, 66, 0.27)"
        };

        handleAddMember(NEW_MEMBER_OBJECT);
    

    });





    // PROGRESS TRACKER BAR
    const arc = document.querySelector(".progressArc")
    const ARC_LENGTH = 314;
    let progressNumberInput = previewContainer.querySelector('.percentage-number');
    const progressNumber = 81;

    progressNumberInput.textContent = `${progressNumber}%`


    function setProgress(percent) {
        const offset = ARC_LENGTH - (percent / 100) * ARC_LENGTH;
        arc.style.strokeDashoffset = offset
    }

    setProgress(progressNumber);

    document.querySelector('.list-of-project-works').innerHTML = stackProfileHTML;

};
const initTasks = () => {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  console.log("Tasks page initialized");
};
const initCalendar = () => {
    const days = previewContainer.querySelectorAll(".calendar-day");
    const eventAdder = previewContainer.querySelector('.add-event-btn')
  
    // days.forEach(day => {
    //   day.addEventListener("click", () => {
    //     document
    //       .querySelectorAll(".calendar-day")
    //       .forEach(d => d.classList.remove("active"));
  
    //     day.classList.add("active");
    //   });
    // });
  
    console.log("Calendar initialized");
};
const initAnalytics = () => {
    // Example: ApexCharts or any chart library init
    console.log("Analytics page initialized");
};
const initTeam = () => {

  const teamMemberAdderBtn = previewContainer.querySelector('.team-member-adder-btn');
  const addMemberFormBox = previewContainer.querySelector('.team-member-adder-popUp');
  const closeAddMemberFormBtn = previewContainer.querySelector('.team-adder-submit');

  teamMemberAdderBtn.addEventListener('click', () => {
    addMemberFormBox.showModal();
});

closeAddMemberFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    addMemberFormBox.close();

    // let completionChecker = roleAppliedCompletion.value === "Pending" ? "rgb(255, 0, 119)" : roleAppliedCompletion.value === "InProgress" ? "rgb(241, 194, 92)" : "rgb(0, 78, 0)";

    handleAddMember();
    // teamMemberForTeamSection();

});

teamMemberForTeamSection();
  previewContainer.querySelector('.member-item-list').textContent = teamCollaborationMembers.length;

  console.log("Team page initialized");
};
  

renderPages(dashBoardPageFullHTML); // Initial Page.
initDashboard()


// PAGE SWITCHER BUTTON CLICKER

dashboardLI.addEventListener('click', () => {
    renderPages(dashBoardPageFullHTML);
    initDashboard();
  });
  
taskLI.addEventListener('click', () => {
    renderPages(taskPageFullHTML);
    initTasks();
  });
calendarLI.addEventListener('click', () => {
    renderPages(calendarPageFullHTML);
    initCalendar();
})
analyticsLI.addEventListener('click', () => {
    renderPages(analyticsPageFullHTML);
})
teamLI.addEventListener('click', () => {
    renderPages(teamPageFullHTML);
    initTeam();
})

// PAGE SWITCHER BUTTON CLICKER


// console.log(window.ApexCharts);