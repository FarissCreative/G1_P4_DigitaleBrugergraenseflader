let quizInfo;
let quizContent;

let endInfo;
let endContent;

let questions = [
    { question: "question 1", answers: ["Night in", "Night out"] },
    { question: "question 2", answers: ["Kældedyr", "Ikke kældedyr"] },
    { question: "question 3", answers: ["alkohol", "Ikke alkohole"] },
    { question: "question 4", answers: ["Sport", "Ikke sport"] },
    { question: "question 5", answers: ["Film", "Serie"] },
    { question: "question 5", answers: ["Vinter", "Sommer"] },
    { question: "question 5", answers: ["Kram", "Håndtryk"] },
    { question: "question 5", answers: ["Online undervisning", "Fysisk undervisning"] },
    { question: "question 5", answers: ["Brætspil", "Computerspil"] }
]

let currentIndex;
let currentChoice;
let answers;

document.addEventListener("DOMContentLoaded", function (event) {
    currentIndex = 0;
    answers = [];

    endInfo = document.getElementById("end-info");
    endInfo.style.display = "none";
    endContent = document.getElementById("end-content");
    endContent.style.display = "none";

    quizInfo = document.getElementById("quiz-info");
    quizContent = document.getElementById("quiz-content");

    updateQuizContent();

});

function updateQuizContent() {
    if (currentIndex >= questions.length) {
        transitionToEnd();
        return;
    }
    currentChoice = -1;
    document.getElementById("quiz-text-progress").innerHTML = ` ${currentIndex + 1} ud af ${questions.length}`

    let questionSection = document.getElementById("questions");
    while (questionSection.firstChild) {
        questionSection.removeChild(questionSection.firstChild);
    }

    let answers = questions[currentIndex].answers;
    for (let i = 0; i < answers.length; i++) {
        let answer = document.createElement('button');
        answer.className = "quiz-button";
        answer.innerHTML = answers[i];
        answer.value = i;
        answer.addEventListener("click", e => {
            currentChoice = e.target.value;
            onNextQuestion(e);
        });
        questionSection.appendChild(answer);
    }

    currentIndex = currentIndex + 1;
}

function onNextQuestion(e) {
    if (currentChoice < 0) {
        return;
    }
    answers.push(currentChoice);
    updateQuizContent();
}

function transitionToEnd() {
    quizInfo.style.display = "none";
    quizContent.style.display = "none";

    endInfo.style.display = "block";
    endContent.style.display = "block";

    for (let i = 0; i < answers.length; i++) {
        let finalAnswer = document.createElement('p');
        finalAnswer.className = 'final-answer';
        finalAnswer.innerHTML = questions[i].answers[answers[i]];

        document.getElementById("end-answers").appendChild(finalAnswer);
    }

}
