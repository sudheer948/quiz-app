const questions = [
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<p>"],
    answer: "<a>"
  },
  {
    question: "Which CSS property is used to change the text color?",
    options: ["color", "background-color", "font-color", "text-style"],
    answer: "color"
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: "<script>"
  },
  {
    question: "Which method is used to print something to the console in JavaScript?",
    options: ["console.log()", "print()", "echo()", "log.console()"],
    answer: "console.log()"
  },
  {
    question: "Which of these is NOT a JavaScript data type?",
    options: ["Number", "Boolean", "Float", "String"],
    answer: "Float"
  }
];


let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';
  q.options.forEach(opt => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answer';
    input.value = opt;
    label.appendChild(input);
    label.appendChild(document.createTextNode(' ' + opt));
    optionsContainer.appendChild(label);
  });
}

function checkAnswer() {
  const selected = document.querySelector("input[name='answer']:checked");
  if (!selected) return false;

  if  (selected.value === questions[currentQuestion].answer) {
    score++;
  }
  return true;
}

document.getElementById("next-btn").addEventListener("click", () => {
  if (!checkAnswer()) {
    alert("Please select an option!");
    return;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML = 
    `<h2>Your Score: ${score} / ${questions.length}</h2>`;
  }
});

loadQuestion();