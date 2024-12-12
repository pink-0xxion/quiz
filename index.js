//step 1: quize data
const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hypertext Machine Language",
            "Hyperlink and Text Markup Language"
        ],
        correct: 0,
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Computer Style Syntax",
            "Colorful Style Sheets"
        ],
        correct: 0,
    },
    {
        question: "What does JS stand for?",
        options: [
            "Java Syntax",
            "JavaScript",
            "Just Script",
            "Jolly Syntax"
        ],
        correct: 1,
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: [
            "<ul>",
            "<ol>",
            "<li>",
            "<list>"
        ],
        correct: 0,
    },
    {
        question: "What is the correct syntax to link an external JavaScript file?",
        options: [
            '<script href="script.js"></script>',
            '<script src="script.js"></script>',
            '<javascript src="script.js"></javascript>',
            '<js src="script.js"></js>'
        ],
        correct: 1,
    },
    {
        question: "Which CSS property is used to change text color?",
        options: [
            "color",
            "text-color",
            "font-color",
            "background-color"
        ],
        correct: 0,
    }
];

//step 2: javascripot initializer

const quiz = document.querySelector('#quiz');
const scores = document.querySelector('.score');
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4 "
);
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

//step 3: load quize function
console.log(option_1, option_2, option_3, option_4);
console.log("answerElm: " + answerElm);

const loadQuiz = () => {
    const {question, options} = quizData[currentQuiz];
    console.log(question);
    console.log(options);

    questionElm.innerText = `${currentQuiz + 1}: ${question}`;
    scores.innerHTML = `Score: ${score}/${quizData.length}`;

    option_1.innerText = options[0];
    option_2.innerText = options[1];
    option_3.innerText = options[2];
    option_4.innerText = options[3];

    // options.forEach((curOption, index) => {option_1.innerHTML = curOption});

    // options.forEach(
    //    (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    // );

    // options.forEach((curOption, index) => {
    //     document.getElementById(`option_${index + 1}`).innerText = curOption;
    // });
    
}; 

loadQuiz();

//step 4: Get Selected Answer Function on Button Click

const getSelectedOption = () => {
    // let ans_index;
    // answerElm.forEach((curOption, index) => {
    //     if(curOption.checked) {
    //         ans_index = index;
    //     }
    // });

    // return ans_index;

    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
};


const deselectedAnswer = () => {
    answerElm.forEach((curElem) => curElem.checked = false);
};

submitBtn.addEventListener("click", () => {
    const selectOptionIndex = getSelectedOption();
    console.log(selectOptionIndex);
   
    if(selectOptionIndex === quizData[currentQuiz].correct) {
        // score += 1;
        score = score + 1;

    }

    currentQuiz++;

    if(currentQuiz < quizData.length) {
        deselectedAnswer();
        loadQuiz();
    }
    else {
        quiz.innerHTML = `
        <div class="result">
        <h2> &#127942; Your Score: ${score}/${quizData.length} Correct Answer</h2>
        <p>Congratulaions on completing the quize! &#127881;</p>
        <button class="reload-button" onclick="location.reload()">Play Again</button>
        </div>     
        `;
    }
    
    // console.log("1 currentQuiz" + currentQuiz);
    // if(selectOptionIndex === quizData[currentQuiz].correct) {
    //     score ++;
    // }
    
    // console.log("score " + score);
    // currentQuiz ++;
    // console.log("2 currentQuiz" + currentQuiz);
    // loadQuiz();

    // if (currentQuiz === 6) {
    //     document.getElementsByTagName(body).innerText = score;
    // }

});