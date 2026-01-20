export const  helpPageFullHTML = `
    <div class="help-page">

    <div class="help-header">
        <h2>Help & Support</h2>
        <p>Find answers, learn features, or contact support</p>

        <input
        type="text"
        class="help-search"
        placeholder="Search for help articles, features, or issues..."
        >
    </div>

    <!-- QUICK HELP -->
    <div class="help-grid">

        <div class="help-card">
        <h4>Getting Started</h4>
        <p>Learn how to set up your dashboard and add team members.</p>
        <span>View guide →</span>
        </div>

        <div class="help-card">
        <h4>Team Management</h4>
        <p>Invite members, assign roles, and manage permissions.</p>
        <span>View guide →</span>
        </div>

        <div class="help-card">
        <h4>Tasks & Analytics</h4>
        <p>Understand productivity metrics and task tracking.</p>
        <span>View guide →</span>
        </div>

    </div>

    <!-- FAQ -->
    <section class="faq-section">
        <h3>Frequently Asked Questions</h3>

        <div class="faq-item">
        <button class="faq-question">
            How do I add a new team member?
        </button>
        <div class="faq-answer">
            You can add a team member from the Dashboard or Team page using the “Add Member” button.
        </div>
        </div>

        <div class="faq-item">
        <button class="faq-question">
            What does the productivity score mean?
        </button>
        <div class="faq-answer">
            The productivity score reflects task completion rate, consistency, and activity over time.
        </div>
        </div>

        <div class="faq-item">
        <button class="faq-question">
            Can I use this dashboard with a backend?
        </button>
        <div class="faq-answer">
            Yes. The dashboard is designed for backend integration with authentication and database storage.
        </div>
        </div>
    </section>

    <!-- CONTACT SUPPORT -->
    <section class="support-section">
        <h3>Need More Help?</h3>
        <p>Contact our support team and we’ll get back to you.</p>

        <button class="primary-btn">Contact Support</button>
    </section>

    </div>
`;

export const initHelp = () => {
    const faqButtons = document.querySelectorAll('.faq-question');

    faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;

        answer.style.display =
        answer.style.display === 'block' ? 'none' : 'block';
    });
    });
}