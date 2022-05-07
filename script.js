// Prepare quiz (questions, answers and correct answer)

const question = {
    question: "Another question",
    a: "let x = 10;",
    b: "new variable = 'text'",
    c: "const turns;",
    d: "var 8pool = 8",
    correct: "a",
}

const quizData = [
    {
        question: "What is the correct way to declare a variable in JS",
        a: "let x = 10;",
        b: "new variable = 'text'",
        c: "const turns;",
        d: "var 8pool = 8",
        correct: "a",
    },
    {
        question: "What does HTML stand for?",
        a: "Cascading Style Sheet",
        b: "Jason Object Notation",
        c: "HyperText Markup Language",
        d: "Helicopters Terminals Motorbikes Laces",
        correct: "c",
    },
    {
        question: "What year was JS launched?",
        a: "1990",
        b: "1995",
        c: "1996",
        d: "1997",
        correct: "b",
    }
]

quizData.push(question);

// Show first question from the quiz when first loading the page
const questionEl = document.getElementById("question");
const answerElements = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit")
const quiz = document.getElementById("quiz");

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];
    console.log(currentQuizData);


    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer;

    for (let i = 0; i < answerElements.length; i++) {
        if (answerElements[i].checked) {
            answer = answerElements[i].id;
        }
    }

    console.log(answer);
    return answer

}

function deselectAnswers() {
    for (let i = 0; i < answerElements.length; i++) {
        answerElements[i].checked = false
    }
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            console.log("correct answer")
            score++;
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Quiz Finished. You have ${score} out of ${quizData.length} correct answers.</h2>
                <button onclick="location.reload()">Reload Quiz </button>
                `
        }

    } else {
        console.log("no answer selected!")
    }
})