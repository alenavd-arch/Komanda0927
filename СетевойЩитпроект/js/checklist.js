const checklistItems = [
    "Я включил Двухфакторную Аутентификацию (2FA)",
    "У меня разные пароли для разных сервисов",
    "Я проверил подключенные устройства",
    "У меня включены уведомления банка",
    "Я использую менеджер паролей",
    "Я не сообщаю коды из SMS",
    "Я проверяю ссылки перед переходом",
    "Для покупок использую отдельную карту"
];

let checklistState = new Array(checklistItems.length).fill(false);

function renderChecklist() {
    const container =
        document.getElementById('checklistTasks');

    if (!container) return;

    let html = '<ul style="list-style:none;">';

    checklistItems.forEach((item, idx) => {
        html += `
        <li class="check-item">
            <input
                type="checkbox"
                data-idx="${idx}"
                ${checklistState[idx] ? 'checked' : ''}
            >
            <span>${item}</span>
        </li>`;
    });

    html += '</ul>';

    container.innerHTML = html;

    // вычисляем прогресс
    const filled =
        checklistState.filter(v => v).length;

    const percent =
        (filled / checklistItems.length) * 100;

    document.getElementById('checklistFill')
        .style.width = `${percent}%`;

    document.getElementById('progressPercent')
        .innerText = `${Math.round(percent)}%`;

    // обработчики чекбоксов
    document
        .querySelectorAll('.check-item input')
        .forEach(cb => {
            cb.addEventListener('change', () => {
                const idx =
                    parseInt(cb.dataset.idx);

                checklistState[idx] = cb.checked;

                renderChecklist();
            });
        });
}