const quizData = [
    {
        question:
            "Вам звонят из 'Службы безопасности банка' и говорят о подозрительной транзакции. Ваши действия?",
        options: [
            "Положу трубку и самостоятельно перезвоню в банк",
            "Сообщу СМС-код",
            "Установлю антивирус по их рекомендации"
        ],
        correct: 0
    },
    {
        question:
            "Вам пришла ссылка от знакомого: 'Проголосуй за меня'. Что делать?",
        options: [
            "Перейду по ссылке",
            "Проверю через другой канал связи",
            "Перешлю друзьям"
        ],
        correct: 1
    },
    {
        question:
            "Какой адрес Госуслуг настоящий?",
        options: [
            "gosuslugi.ru.com",
            "gosuslugi.ru",
            "gosuslugi-online.ru"
        ],
        correct: 1
    }
];

let currentQuiz = 0;
let userAnswers = [];

function renderQuiz() {
    const container =
        document.getElementById('quizContainer');

    if (!container) return;

    if (currentQuiz < quizData.length) {
        const q = quizData[currentQuiz];

        let html =
            `<div class="quiz-progress">
                Вопрос ${currentQuiz + 1}
                из ${quizData.length}
            </div>
            <h3>${q.question}</h3>`;

        q.options.forEach((opt, idx) => {
            const selected =
                userAnswers[currentQuiz] === idx;

            html += `
            <div
                class="option ${selected ? 'selected' : ''}"
                data-opt="${idx}">
                ${opt}
            </div>`;
        });

        html += `
        <div style="margin-top:24px;">
            <button
                class="btn-primary"
                id="nextQuizBtn">
                ${
                    currentQuiz === quizData.length - 1
                        ? 'Завершить'
                        : 'Следующий'
                }
            </button>
        </div>`;

        container.innerHTML = html;

        document
            .querySelectorAll('.option')
            .forEach(optDiv => {
                optDiv.addEventListener(
                    'click',
                    () => {
                        const idx =
                            parseInt(
                                optDiv.dataset.opt
                            );

                        userAnswers[currentQuiz] =
                            idx;

                        renderQuiz();
                    }
                );
            });

        document
            .getElementById('nextQuizBtn')
            ?.addEventListener('click', () => {
                if (
                    userAnswers[currentQuiz] ===
                    undefined
                ) {
                    alert(
                        'Выберите вариант ответа'
                    );
                    return;
                }

                if (
                    currentQuiz <
                    quizData.length - 1
                ) {
                    currentQuiz++;
                    renderQuiz();
                } else {
                    let correct = 0;

                    userAnswers.forEach(
                        (answer, i) => {
                            if (
                                answer ===
                                quizData[i].correct
                            ) {
                                correct++;
                            }
                        }
                    );

                    document.getElementById(
                        'quizResult'
                    ).innerHTML = `
                    <div class="quiz-card">
                        ✅ Вы набрали
                        ${correct}
                        из
                        ${quizData.length}
                        

                        <button
                            class="btn-outline"
                            id="restartQuiz">
                            Пройти заново
                        </button>
                    </div>`;


container.innerHTML = '';

                    document
                        .getElementById(
                            'restartQuiz'
                        )
                        ?.addEventListener(
                            'click',
                            () => {
                                currentQuiz = 0;
                                userAnswers = [];
                                document.getElementById(
                                    'quizResult'
                                ).innerHTML = '';

                                renderQuiz();
                            }
                        );
                }
            });
    }
}