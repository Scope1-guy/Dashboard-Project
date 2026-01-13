export const calendarPageFullHTML = `
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

export const initCalendar = () => {
  const days = previewContainer.querySelectorAll(".calendar-day");
  const eventAdder = previewContainer.querySelector(".add-event-btn");

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