import { teamCollaborationMembers, previewContainer } from "./dashboard.js";

export const teamPageFullHTML = `
<div class="team-page">

  <!-- HEADER -->
  <div class="team-header">
    <div>
      <h2>Team</h2>
      <p>Manage your team members and their roles</p>
    </div>
    <!--<button class="team-member-adder-btn">+ Add Member</button>-->
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

export function teamMemberForTeamSection() {
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
      `;
  });

  document.querySelector(".team-member-list").innerHTML = teamSectionHTML;
}

export const initTeam = () => {
  teamMemberForTeamSection();
  previewContainer.querySelector(".member-item-list").textContent =
    teamCollaborationMembers.length;
};