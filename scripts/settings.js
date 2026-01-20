export const settingsPageFullHTML = `
    <div class="settings-page">

    <h2 class="page-title">Settings</h2>
    <p class="page-subtitle">Manage your account preferences and profile</p>

    <!-- PROFILE SETTINGS -->
    <section class="settings-card">
        <h3>Profile</h3>

        <div class="form-group">
        <label>Full Name</label>
        <input type="text" placeholder="Samuel Olalekan">
        </div>

        <div class="form-group">
        <label>Email</label>
        <input type="email" placeholder="samuel@email.com">
        </div>

        <div class="form-group">
        <label>Role</label>
        <input type="text" placeholder="Frontend Developer" disabled>
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
        <h3>Danger Zone</h3>
        <button class="danger-btn">Logout</button>
    </section>

    </div>
`;

export const initSetting = () => {
    const darkToggle = document.getElementById('darkModeToggle');

    darkToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', darkToggle.checked);
    });

    document.querySelector('.danger-btn').addEventListener('click', () => {
    alert('Logging out...');
    });
}