const themeToggle = document.getElementById('themeToggle');
function setTheme(isLight) { document.body.classList.toggle('light', isLight); themeToggle.setAttribute('aria-label', isLight ? 'Toggle dark mode' : 'Toggle light mode'); localStorage.setItem('swas-theme', isLight ? 'light' : 'dark'); }
setTheme(localStorage.getItem('swas-theme') === 'light');
themeToggle.addEventListener('click', () => setTheme(!document.body.classList.contains('light')));
