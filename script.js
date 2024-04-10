let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector("number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector("score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;


const quizArray = [
    {
        id: "0",
        question: "Which methodology is used to performed Maintenance testing?",
        options: ["Breadth test and depth test", "Confirmation testing", "Retesting", "Sanity testing"],
        correct: "Breadth test and depth test", 
    },

    {
        id: "1",
        question: "Which of the following is not part of the Test document?",
        options: ["Test Case", "Requirements Traceability Matrix [RTM]", "Test strategy", "Project Initiation Note [PIN]"],
        correct: "Project Initiation Note [PIN]",
    },

    {
        id: "2",
        question: "Which of the following is not a valid phase of SDLC (Software Development Life Cycle)?",
        options: ["Testing Phase", "Requirement Phase", "Deployment phase", "Testing closure"],
        correct: "Testing closure",

    },

    {
        id: "3",
        question: "Which of the following testing is also known as white-box testing?",
        options: ["Structural testing", "Error guessing technique", "Design based testing", "None of the above"],
        correct: "Structural testing",
    },

    {
        id: "4",
        question: "Functional testing is a ------?",
        options: ["Test design technique", "Test level", "SDLC Model", "Test type"],
        correct: "Test type",
    },

    {
        id: "5",
        question: "Which Test Document is used to define the Exit Criteria of Testing?",
        options: ["Defect Report", "Test Summary Report", "Test Case", "Test Plan"],
        correct: "Test Plan",
    },

    {
        id: "6",
        question: "What is Cyclomatic complexity?",
        options: ["Black box testing", "White box testing", "Yellow box testing", "Green box testing"],
        correct: "White box testing",
    },

    {
        id: "7",
        question: "Which is not a part of Specification Testing?",
        options: ["Equivalence Partitioning", "Decision Tables", "Decision Testing", "Use Case Testing"],
        correct: "Decision Testing",
    },

    {
        id: "8",
        question: "Which testing technique is used for usability testing?",
        options: ["White-box testing", "Grey box testing", "Black Box testing", "Combination of all"],
        correct: "Black Box testing",
    },

    {
        id: "9",
        question: "---------- are those software mistakes that occurred during the coding phase?",
        options: ["Bugs", "Defects", "Failures", "Errors"],
        correct: "Bugs",
    },
];

restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener("click", (displayNext = () => {
    questionCount += 1;

    if (questionCount == quizArray.length) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = "Your Score is "+ scoreCount + " out of " + questionCount;
    }
    else {
        countOfQuestion.innerHTML = countOfQuestion + 1 + " of " + quizArray.length + " Question";

        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
    }
})
);

const timerDisplay = () => {
    countdown = setInterval(() => {
        count --;
        timeLeft.innerHTML = `${count}s`;
        if (count ==0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {
    quizArray.sort(() => Math.random() - 0.5);

    for (let i of quizArray){
        i.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question ";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="option-div" onclick="checker(this)"> ${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)"> ${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)"> ${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)"> ${i.options[3]}</button>`;

        quizContainer.appendChild(div);
    }
}

function checker(userOption){
    let userSolution = userOption.innerHTML;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");


    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");

        options.forEach((element) => {
            if ((element.innerText = quizArray[questionCount].correct)) {
                element.classList.add("correct");
            }
        });
    }

    clearInterval(countdown);
    options.forEach((element) => {
        element.disabled = true;
    });
}

function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);

}

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};



