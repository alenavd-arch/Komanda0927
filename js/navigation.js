const pages = [
    'home',
    'theory',
    'phishdetector',
    'platforms',
    'quiz',
    'checklists',
    'about'
];

function showPage(pageId) {
    pages.forEach(page => {
        const el = document.getElementById(`${page}-page`);
        if (el) {
            el.classList.add('hidden-page');
        }
    });

    const activePage = document.getElementById(`${pageId}-page`);

    if (activePage) {
        activePage.classList.remove('hidden-page');
    }

    document.querySelectorAll('.nav-links a[data-page]')
        .forEach(link => {
            link.classList.remove('active');

            if (link.dataset.page === pageId) {
                link.classList.add('active');
            }
        });

    if (pageId === 'quiz') {
        renderQuiz();
    }

    if (pageId === 'checklists') {
        renderChecklist();
    }

    window.scrollTo(0, 0);
}

document.querySelectorAll('.nav-links a[data-page]')
    .forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            showPage(link.dataset.page);
        });
    });

document.getElementById('heroTheoryBtn')
    ?.addEventListener('click', () => showPage('theory'));

document.getElementById('heroQuizBtn')
    ?.addEventListener('click', () => showPage('quiz'));