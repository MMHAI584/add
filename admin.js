document.addEventListener('DOMContentLoaded', () => {
    const adminPassword = 'admin'; // Simple password for frontend-only protection

    const loginForm = document.getElementById('loginForm');
    const adminSettings = document.getElementById('adminSettings');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    const redirectUrlInput = document.getElementById('redirectUrl');
    const banner300x250Input = document.getElementById('banner300x250');
    const banner728x90Input = document.getElementById('banner728x90');
    const popunderAdInput = document.getElementById('popunderAd');
    const pushAdInput = document.getElementById('pushAd');
    const saveSettingsBtn = document.getElementById('saveSettings');
    const themeToggle = document.getElementById('themeToggle');

    // Load theme preference from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        themeToggle.checked = true;
    } else {
        document.body.classList.remove('dark');
        themeToggle.checked = false;
    }

    // Theme toggle functionality
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    });

    // Check if already logged in (simple session management)
    if (sessionStorage.getItem('loggedIn') === 'true') {
        showAdminPanel();
    }

    loginBtn.addEventListener('click', () => {
        if (passwordInput.value === adminPassword) {
            sessionStorage.setItem('loggedIn', 'true');
            showAdminPanel();
        } else {
            alert('Incorrect password!');
            passwordInput.value = '';
        }
    });

    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('loggedIn');
        hideAdminPanel();
    });

    saveSettingsBtn.addEventListener('click', () => {
        localStorage.setItem('redirectUrl', redirectUrlInput.value);
        localStorage.setItem('banner300x250', banner300x250Input.value);
        localStorage.setItem('banner728x90', banner728x90Input.value);
        localStorage.setItem('popunderAd', popunderAdInput.value);
        localStorage.setItem('pushAd', pushAdInput.value);
        alert('Settings saved!');
    });

    function showAdminPanel() {
        loginForm.classList.add('hidden');
        adminSettings.classList.remove('hidden');
        loadSettings();
    }

    function hideAdminPanel() {
        loginForm.classList.remove('hidden');
        adminSettings.classList.add('hidden');
    }

    function loadSettings() {
        redirectUrlInput.value = localStorage.getItem('redirectUrl') || '';
        banner300x250Input.value = localStorage.getItem('banner300x250') || '';
        banner728x90Input.value = localStorage.getItem('banner728x90') || '';
        popunderAdInput.value = localStorage.getItem('popunderAd') || '';
        pushAdInput.value = localStorage.getItem('pushAd') || '';
    }
});