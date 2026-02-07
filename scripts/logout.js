import { currentAccount, initLogin } from "./index.js";

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
            <img class="user-info-image" src="Pictures/avatar.png" alt="User Avatar">
            <div class="current-account-details">
            <h4 class="current-account-name">Samuel Olalekan</h4>
            <span class="current-account-role">Frontend Developer</span>
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
    if (!currentAccount) return;


    const logoutBtn = document.querySelector('.btn-danger');
    const cancelBtn = document.querySelector('.btn-secondary');
    const currentAccountImage = document.querySelector('.user-info-image');
    const currentAccountName = document.querySelector('.current-account-name');
    const currentAccountRole = document.querySelector('.current-account-role');

    currentAccountImage.src = currentAccount.userPicture;
    currentAccountName.textContent = currentAccount.accountName;
    currentAccountRole.textContent = currentAccount.role;


    logoutBtn.addEventListener('click', () => {
    // Clear frontend session data
    // localStorage.clear();
    // sessionStorage.clear();

    // Redirect to login page
    window.location.href = initLogin();
    });

    cancelBtn.addEventListener('click', () => {
    // Go back to previous page
    history.back();
    });
};