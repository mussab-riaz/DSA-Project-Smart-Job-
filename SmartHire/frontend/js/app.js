// ==========================================
// SMART HIRE LOGIN
// ==========================================

// Get login form elements
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const loginBtn = document.getElementById("loginBtn");
const skeletonLoader = document.getElementById("skeletonLoader");
const loginCard = document.getElementById("loginCard");

// Authorized HR email
const HR_EMAIL = "mussabriaz1368@gmail.com";

// ==========================================
// SKELETON LOADER & INTERACTIVE DEMO LOGIC
// ==========================================

/**
 * Toggles UI skeleton loading state to simulate API fetching
 * @param {boolean} isLoading 
 */
function toggleSkeletonLoading(isLoading) {
    const btnText = loginBtn.querySelector(".btn-text");
    const btnSpinner = loginBtn.querySelector(".btn-spinner");

    if (isLoading) {
        if (btnText) btnText.style.display = "none";
        if (btnSpinner) btnSpinner.style.display = "inline-block";
        loginBtn.disabled = true;
        if (skeletonLoader) skeletonLoader.style.display = "block";
    } else {
        if (btnText) btnText.style.display = "inline-block";
        if (btnSpinner) btnSpinner.style.display = "none";
        loginBtn.disabled = false;
        if (skeletonLoader) skeletonLoader.style.display = "none";
    }
}

// ==========================================
// LOGIN HANDLER
// ==========================================

loginForm.addEventListener("submit", function (event) {
    // Stop normal form submission
    event.preventDefault();

    // Get email
    const email = document
        .getElementById("email")
        .value
        .trim()
        .toLowerCase();

    // Get password
    const password = document
        .getElementById("password")
        .value;

    // Get selected role
    const role = document
        .getElementById("role")
        .value;

    // Clear previous message
    loginMessage.textContent = "";
    loginMessage.style.color = "";

    // ==================================
    // CHECK ROLE
    // ==================================

    if (role === "") {
        showMessage("Please select a role.", "red");
        return;
    }

    // Activate Skeleton Loading State (Simulating Network/API Authentication)
    toggleSkeletonLoading(true);

    setTimeout(() => {
        // ==================================
        // HR LOGIN
        // ==================================
        if (role === "hr") {
            // Check HR email
            if (email !== HR_EMAIL) {
                toggleSkeletonLoading(false);
                showMessage(
                    "HR access is restricted to the authorized HR email.",
                    "red"
                );
                return;
            }

            // Check password
            if (password === "") {
                toggleSkeletonLoading(false);
                showMessage(
                    "Please enter your password.",
                    "red"
                );
                return;
            }

            // Save login information
            localStorage.setItem("userRole", "hr");
            localStorage.setItem("userEmail", email);

            // Open HR dashboard
            window.location.href = "hr-dashboard.html";
            return;
        }

        // ==================================
        // APPLICANT LOGIN
        // ==================================
        if (role === "applicant") {
            // Check password
            if (password === "") {
                toggleSkeletonLoading(false);
                showMessage(
                    "Please enter your password.",
                    "red"
                );
                return;
            }

            // Save login information
            localStorage.setItem("userRole", "applicant");
            localStorage.setItem("userEmail", email);

            // Open Applicant Dashboard
            window.location.href = "applicant-dashboard.html";
            return;
        }

        toggleSkeletonLoading(false);
    }, 800); // 800ms simulation delay for realistic UI transition
});

// ==========================================
// MESSAGE FUNCTION
// ==========================================

function showMessage(message, color) {
    loginMessage.textContent = message;
    loginMessage.style.color = color;
}