document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const getLinkBtn = document.getElementById('getLinkBtn');
    const themeToggle = document.getElementById('themeToggle');
    let countdown = 5;

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

    // Countdown timer
    const timer = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(timer);
            getLinkBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            getLinkBtn.removeAttribute('disabled');
            countdownElement.textContent = '0';
        }
    }, 1000);

    // Get Link button functionality
    getLinkBtn.addEventListener('click', () => {
        const redirectUrl = localStorage.getItem('redirectUrl');
        if (redirectUrl) {
            window.location.href = redirectUrl;
        } else {
            alert('Redirect URL not set. Please contact the administrator.');
        }
    });

    // Adsterra Popunder (loads on click) - This is a placeholder. 
    // The actual popunder script from Adsterra should be placed directly in index.html as instructed.
    // This function is just to demonstrate where a click event might trigger it if needed.
    // Adsterra's popunder usually triggers on any click on the page, so direct script inclusion is preferred.
    document.body.addEventListener('click', () => {
        // Example: if Adsterra provides a JS function to call for popunder
        // if (typeof adsterraPopunderFunction === 'function') {
        //     adsterraPopunderFunction();
        // }
        // Instructions: Adsterra popunder code is typically placed directly in the HTML body or head.
        // No specific JS function call is usually needed here unless you have a custom setup.
    });

    // Load and inject Adsterra banner ads if available in localStorage
    const banner300x250Code = localStorage.getItem('banner300x250');
    const banner728x90Code = localStorage.getItem('banner728x90');

    if (banner300x250Code) {
        const adContainer300x250 = document.querySelector('.ad-container:nth-of-type(1)');
        if (adContainer300x250) {
            adContainer300x250.innerHTML = banner300x250Code;
        }
    }

    if (banner728x90Code) {
        const adContainer728x90 = document.querySelector('.ad-container:nth-of-type(2)');
        if (adContainer728x90) {
            adContainer728x90.innerHTML = banner728x90Code;
        }
    }

    // Load and inject Adsterra Push Notification script if available in localStorage
    const pushAdCode = localStorage.getItem('pushAd');
    if (pushAdCode) {
        const script = document.createElement('script');
        script.innerHTML = pushAdCode;
        document.body.appendChild(script);
    }

    // Load and inject Adsterra Popunder script if available in localStorage
    const popunderAdCode = localStorage.getItem('popunderAd');
    if (popunderAdCode) {
        const script = document.createElement('script');
        script.innerHTML = popunderAdCode;
        document.body.appendChild(script);
    }
});