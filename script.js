// Theme toggle logic
window.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    let icon = btn.querySelector('i');
    if (!icon) {
        // If the icon is not present, create it
        icon = document.createElement('i');
        icon.className = 'fas fa-moon';
        btn.appendChild(icon);
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    function setTheme(mode) {
        if (mode === 'light') {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Initial theme
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (!prefersDark) {
        setTheme('light');
    } else {
        setTheme('dark');
    }

    btn.addEventListener('click', function() {
        const isLight = !document.body.classList.contains('light-mode');
        setTheme(isLight ? 'light' : 'dark');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
});
