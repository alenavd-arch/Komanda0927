document.getElementById('whatsappMoreBtn')
?.addEventListener('click', () => {
    document.getElementById('platformDetail').innerHTML = `
        <h3>Защита WhatsApp</h3>
        <p>
            Включите двухшаговую проверку.
            Не сообщайте коды.
            Проверяйте подключенные устройства.
        </p>
    `;
});

document.getElementById('telegramMoreBtn')
?.addEventListener('click', () => {
    document.getElementById('platformDetail').innerHTML = `
        <h3>Telegram</h3>
        <p>
            Установите облачный пароль
            и проверяйте активные сеансы.
        </p>
    `;
});

document.getElementById('vkMoreBtn')
?.addEventListener('click', () => {
    document.getElementById('platformDetail').innerHTML = `
        <h3>ВКонтакте</h3>
        <p>
            Рекомендуется закрытый профиль
            и двухфакторная аутентификация.
        </p>
    `;
});