
const quizData = [
    {
        question: "Which of the following services is included in Microsoft 365?",
        a: "Microsoft Azure",
        b: "Microsoft Dynamics 365",
        c: "Microsoft Teams",
        d: "Visual Studio",
        correct: "c"
    },
    {
        question: "Which cloud deployment model provides the highest level of control over the hardware and software environment?",
        a: "Public Cloud",
        b: "Private Cloud",
        c: "Hybrid Cloud",
        d: "Community Cloud",
        correct: "b"
    },
    {
        question: "What Microsoft 365 feature helps protect sensitive information from being shared accidentally?",
        a: "Azure AD",
        b: "Microsoft Defender",
        c: "Data Loss Prevention (DLP)",
        d: "Microsoft Intune",
        correct: "c"
    },
    {
        question: "Which Microsoft 365 plan is best suited for small businesses with up to 300 users?",
        a: "Microsoft 365 E3",
        b: "Microsoft 365 F3",
        c: "Microsoft 365 Business Premium",
        d: "Microsoft 365 Enterprise E5",
        correct: "c"
    },
    {
        question: "Which Microsoft 365 app allows users to create, share, and collaborate on documents in real time?",
        a: "OneDrive",
        b: "SharePoint",
        c: "Word Online",
        d: "Yammer",
        correct: "c"
    }
];

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const results = document.getElementById('results');

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    quiz.innerHTML = `
        <div class="quiz-question">${currentQuizData.question}</div>
        <label>
            <input type="radio" name="answer" value="a">
            ${currentQuizData.a}
        </label>
        <label>
            <input type="radio" name="answer" value="b">
            ${currentQuizData.b}
        </label>
        <label>
            <input type="radio" name="answer" value="c">
            ${currentQuizData.c}
        </label>
        <label>
            <input type="radio" name="answer" value="d">
            ${currentQuizData.d}
        </label>
    `;
}

function getSelected() {
    const answerEls = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            selectedAnswer = answerEl.value;
        }
    });
    return selectedAnswer;
}

submitBtn.addEventListener('click', () => {
    const selectedAnswer = getSelected();
    if (selectedAnswer === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        results.innerHTML = `You scored ${score} out of ${quizData.length}`;
        submitBtn.style.display = 'none';
    }
});

loadQuiz();
