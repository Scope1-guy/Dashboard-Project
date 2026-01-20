export const dashBoardPageFullHTML = `
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

                        <div class="duo-form-for-flex">
                            <div>
                                <label>Level Completion</label> <br>
                                <select class="team-activeness">
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
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

export const previewContainer = document.querySelector(".dashboard-page");

// PROJECT TYPE CODE
export const projectsType = [
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
];

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
};

// TEAM COLLABORATION
export const teamCollaborationMembers = [
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
];

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
});
document.querySelector(".team-profile").innerHTML = membersCollaborationHTML;
}
  
  // PROJECT STACK TYPE FUNCTIONALITY
  const projectStackType = [
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
  ];
  
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

export const initDashboard = () => {
    const projectsContainer = document.querySelector(".projects-divs-container");
    projectsContainer.innerHTML = projectHTML;
  
    const chart = new ApexCharts(
      document.querySelector("#projectAnalytics"),
      options
    );
    chart.render();
  
    teamMemberCollaboration(); // Team member function
  
    // Modal Add Member variables
    // TEAM MEMBER ADDER
    const teamMemberAdderBtn = previewContainer.querySelector(
      ".team-member-adder-btn"
    );
    const addMemberFormBox = previewContainer.querySelector(
      ".team-member-adder-popUp"
    );
    const closeAddMemberFormBtn =
      previewContainer.querySelector(".team-adder-submit");
  
    //Form inputs element
    const picInput = previewContainer.querySelector(".imageInput");
    const picInputImg = previewContainer.querySelector(".member-dp-img");
    let selectedMemberImage = "";
  
    picInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
  
      const reader = new FileReader();
      reader.onload = (event) => {
        selectedMemberImage = event.target.result; // Store
      };
      reader.readAsDataURL(file);
    });
  
    const memFirstName = previewContainer.querySelector(".member-first-name");
    const memLastName = previewContainer.querySelector(".member-last-name");
    const memEmail = previewContainer.querySelector(".member-email");
    const memPhoneNo = previewContainer.querySelector(".member-phone-number");
    const roleAppliedFor = previewContainer.querySelector(".role-input");
    const roleAppliedCompletion =
      previewContainer.querySelector(".role-completion");
    const memberActiveness = previewContainer.querySelector('.team-activeness')
  
    teamMemberAdderBtn.addEventListener("click", () => {
      addMemberFormBox.showModal();
    });
  
    closeAddMemberFormBtn.addEventListener("click", (e) => {
      e.preventDefault();
  
      addMemberFormBox.close();
  
      let completionChecker =
        roleAppliedCompletion.value === "Pending"
          ? "rgb(255, 0, 119)"
          : roleAppliedCompletion.value === "InProgress"
          ? "rgb(241, 194, 92)"
          : "rgb(0, 78, 0)";
  
      const NEW_MEMBER_OBJECT = {
        memberPicture: selectedMemberImage,
        memberName: `${memFirstName.value} ${memLastName.value}`,
        workingOn: roleAppliedFor.value,
        roleProgress: roleAppliedCompletion.value,
        color: completionChecker,
        border: "rgba(66, 128, 66, 0.27)",
        title: roleAppliedFor.value,
        activeness: memberActiveness.value,
      };
  
      teamCollaborationMembers.unshift(NEW_MEMBER_OBJECT);
      teamMemberCollaboration(); // Team member function
  
      console.log(teamCollaborationMembers);
    });
  
    // PROGRESS TRACKER BAR
    const arc = document.querySelector(".progressArc");
    const ARC_LENGTH = 314;
    let progressNumberInput =
      previewContainer.querySelector(".percentage-number");
    const progressNumber = 78;
  
    progressNumberInput.textContent = `${progressNumber}%`;
  
    function setProgress(percent) {
      const offset = ARC_LENGTH - (percent / 100) * ARC_LENGTH;
      arc.style.strokeDashoffset = offset;
    }
  
    setProgress(progressNumber);
  
    document.querySelector(".list-of-project-works").innerHTML = stackProfileHTML;
  };