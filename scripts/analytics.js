import { previewContainer } from "./dashboard.js";

export const analyticsPageFullHTML = `
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

export const initAnalytics = () => {
    // Example: ApexCharts or any chart library init
    console.log("Analytics page initialized");
  };