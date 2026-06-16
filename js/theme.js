const darkModeToggle = document.getElementById('darkModeToggle');

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    setTheme('dark');
} else if (savedTheme === 'light') {
    setTheme('light');
} else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
) {
    setTheme('dark');
} else {
    setTheme('light');
}

darkModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }

    if (
        document.getElementById('checklists-page') &&
        !document.getElementById('checklists-page').classList.contains('hidden-page')
    ) {
        renderChecklist();
    }

    if (
        document.getElementById('quiz-page') &&
        !document.getElementById('quiz-page').classList.contains('hidden-page')
    ) {
        renderQuiz();
    }
});