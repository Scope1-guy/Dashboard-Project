export const  logoutPageFullHTML = `
    <div class="logout-page">

    <div class="logout-card">

        <div class="logout-icon">
        <span>🔒</span>
        </div>

        <h2>Sign out of your account?</h2>
        <p class="logout-desc">
        You are about to end your current session. Make sure all your changes are saved.
        </p>

        <div class="user-session">
        <p><strong>Signed in as:</strong></p>
        <div class="user-info">
            <img src="Pictures/avatar.png" alt="User Avatar">
            <div>
            <h4>Samuel Olalekan</h4>
            <span>Frontend Developer</span>
            </div>
        </div>
        </div>

        <div class="logout-actions">
        <button class="btn-secondary">Cancel</button>
        <button class="btn-danger">Logout</button>
        </div>

        <p class="security-note">
        🔐 For security reasons, logging out will clear your session data.
        </p>

    </div>

    </div>
`;

export const initLogout = () => {
    const logoutBtn = document.querySelector('.btn-danger');
    const cancelBtn = document.querySelector('.btn-secondary');

    logoutBtn.addEventListener('click', () => {
    // Clear frontend session data
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to login page
    window.location.href = "login.html";
    });

    cancelBtn.addEventListener('click', () => {
    // Go back to previous page
    history.back();
    });
};