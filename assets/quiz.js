const quiz_form = document.getElementById("quizForm");
const prev_btn = document.getElementById("prev-button");
const next_btn = document.getElementById("next-button");
const finish_btn = document.getElementById("finish-button");
// initialize quiz state
const answers = {};
const quizQuestions = questions ?? [];
let currentQuestionIndex = 0;
displayQuestion(currentQuestionIndex);
updateButtonStates(currentQuestionIndex);

quiz_form.addEventListener("change", updateAnswers);
function updateAnswers(event) {
  //code to store answers
  answers[event.target.name] = event.target.value;
}

prev_btn.addEventListener("click", function (ev) {
  currentQuestionIndex--;
  displayQuestion(currentQuestionIndex);
  updateButtonStates(currentQuestionIndex);
});

next_btn.addEventListener("click", function (ev) {
  currentQuestionIndex++;
  displayQuestion(currentQuestionIndex);
  updateButtonStates(currentQuestionIndex);
});

function displayQuestion(index) {
  const currentQuestion = quizQuestions[index];
  quiz_form.innerHTML = `
    <div class="question">
      <h2>${currentQuestion.text}</h2>
      <div class="label-container">
        ${currentQuestion.options
          .map(
            (option) => `
            <input id="${option.value}" type="radio" name="${currentQuestion.name}" value="${option.value}" ${
              answers[currentQuestion.name] === option.value ? "checked" : ""
            } />
            <label for="${option.value}">
              <div class="img-wrap">
                <img src="${option.img}" alt="${option.label}" />
              </div>
              <span>${option.label}</span>
            </label><br />
        `
          )
          .join("")}
      </div>
    </div>
    `;
}

function updateButtonStates(index) {
  prev_btn.disabled = index === 0;
  next_btn.disabled = index === quizQuestions.length - 1;
}

finish_btn.addEventListener("click", function () {
  if (answers.product_type && answers.bike_type && answers.color) {
    alert("Here are your answers: " + JSON.stringify(answers));
  } else {
    alert("Please answer all the questions!");
  }
});
