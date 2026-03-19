const toggleBtn = document.getElementById('toggleTheme');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = 'Light Mode';
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const isDark = document.body.classList.contains('dark');

    // Change button text
    toggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';

    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Fade-in animation on load
const cards = document.querySelectorAll('.card');
window.addEventListener('load', () => {
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, index * 200);
    });
});