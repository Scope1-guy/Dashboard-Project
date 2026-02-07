import { currentAccount,pageAccountName, pageAccountEmail } from "./index.js";

export const settingsPageFullHTML = `
    <div class="settings-page">

    <h2 class="page-title">Settings</h2>
    <p class="page-subtitle">Manage your account preferences and profile</p>

    <!-- PROFILE SETTINGS -->
    <section class="settings-card">
        <h3>Profile</h3>

        <div class="form-group">
        <label>Full Name</label>
        <input class="profile-change-full-name" type="text" placeholder="">
        </div>

        <div class="form-group">
        <label>Email</label>
        <input class="profile-change--email" type="email" placeholder="">
        </div>

        <div class="form-group">
        <label>Role</label>
        <input class="profile--user--role" type="text" placeholder="" disabled>
        </div>

        <button class="primary-btn">Save Changes</button>
    </section>

    <!-- PREFERENCES -->
    <section class="settings-card">
        <h3>Preferences</h3>

        <div class="toggle-row">
        <span>Dark Mode</span>
        <input type="checkbox" id="darkModeToggle">
        </div>

        <div class="toggle-row">
        <span>Email Notifications</span>
        <input type="checkbox" checked>
        </div>
    </section>

    <!-- SECURITY -->
    <section class="settings-card">
        <h3>Security</h3>

        <div class="form-group">
        <label>Change Password</label>
        <input type="password" placeholder="New password">
        </div>

        <button class="secondary-btn">Update Password</button>
    </section>

    <!-- DANGER ZONE -->
    <section class="settings-card danger">
        <h3>Delete Account</h3>
        <button class="danger-btn">Delete</button>
    </section>

    </div>
`;

export const initSetting = () => {
    if (!currentAccount) return;

    const profileChangeName = document.querySelector(".profile-change-full-name");
    const profileChangeEmail = document.querySelector(".profile-change--email");
    const profileRole = document.querySelector(".profile--user--role");
    const saveProfileChanges = document.querySelector('.primary-btn');

    const updateAccountProfile = () => {
        const name = profileChangeName.value.trim();
        const email = profileChangeEmail.value.trim();

        if (!name || !email) {
            console.warn("Profile update failed: missing fields");
            return;
        }

        currentAccount.accountName = name;
        currentAccount.email = email;

        syncProfileUI();
        logProfileUpdate();
    }

    const syncProfileUI = () => {
        pageAccountName.textContent = currentAccount.accountName;
        pageAccountEmail.textContent = currentAccount.email;
    }
    const logProfileUpdate = () => {
        console.log("Account Name and Email changed successfully");
    }

    saveProfileChanges.addEventListener('click', updateAccountProfile);

    profileChangeName.placeholder = `${currentAccount.accountName}`;
    profileChangeEmail.placeholder = `${currentAccount.email}`;
    profileRole.placeholder = `${currentAccount.role}`;

    const darkToggle = document.getElementById('darkModeToggle');

    darkToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark', darkToggle.checked);
    });

    document.querySelector('.danger-btn').addEventListener('click', () => {
    alert('Logging out...');
    });
}