//Selecting all the required Elements
const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz-box");
const result_box = document.querySelector(".result-box");
const option_list = document.querySelector(".option-list");
const time_line = document.querySelector("header .time-line");
const timeText = document.querySelector(".timer .time-left-txt");
const timeCount = document.querySelector(".timer .timer-sec");
const option_work = document.querySelector(".option");
//if startQuiz button clicked

start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); // show info box
};
//if continueQuiz button is clicked
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //to hide/remove the info box
};

//if continueQuiz button is clicked

continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hides the info box
  quiz_box.classList.add("activeQuiz"); // show quiz box
  showQuestion();
  queCounter(1); // passing 1 parameter to queCounter
  startTimer(15); // calling startTimer function
  startTimerLine(0); // calling the startTimerLine function
};

let timeValue = 15;
let que_count = 0;
let que_numb = 1;

let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
quit_quiz.onclick = () => {
  window.location.reload(); //reload the current window
};

const next_btn = document.querySelector("footer .next-btn");
const bottom_ques_counter = document.querySelector("footer .total-que");
const answerButtons = document.getElementById("answer-buttons");
const questionElement = document.getElementById("question");
const stats = document.getElementById("statistics");
const nextButton = document.getElementById("next-btnn");
let currentQuestionIndex = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions2[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ".  " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  // This part works for the automatically selected option after selecting an optio
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `😁You scored ${score} out of ${questions2.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  stats.style.display = "block";
  //SCORE CONDITIONS
  if (score == 15) {
    stats.textContent = "Tech Genius! You are among the top 0.1%🤯";
    console.log(stats.textContent);
    alert(stats.textContent);
  } else if (score == 14) {
    stats.textContent = "Tech Expert! You are among the top 0.5%🥶";
    console.log(stats.textContent);
    alert(stats.textContent);
  } else if (score == 13) {
    stats.textContent = "Tech Guru! You are among the top 1%😲";
    console.log(stats.textContent);
    alert(stats.textContent);
  } else if (score == 12) {
    stats.textContent = "Tech Master! You are among the top 2%😎";
    console.log(stats.textContent);
    alert(stats.textContent);
  } else if (score == 11) {
    stats.textContent = "Tech Savant! You are among the top 5%😁";
    console.log(stats.textContent);
    alert(stats.textContent);
  } else if (score == 10) {
    stats.textContent = "Tech Literate! You are among the top 10%😊";
    console.log(stats.textContent);
    alert(stats.textContent);
  } else if (score == 9) {
    stats.textContent = "Tech Adept! You are among the top 20%😀";
    console.log(stats.textContent);
    alert(stats.textContent);
  } else if (score == 8) {
    stats.textContent = "Tech Savvy! You are among the top 35%🎉";
    console.log(stats.textContent);
    alert(stats.textContent);
  } else if (score == 7) {
    stats.textContent = "Average Tech Knowledge! You are among the top 50%😃";
    console.log(stats.textContent);
    alert(stats.textContent);
  } else if (score == 6) {
    stats.textContent = "Tech Novice! You are among the top 65%😆";
    console.log(stats.textContent);
    alert(stats.textContent);
  } else if (score == 5) {
    stats.textContent =
      "Limited Tech Understanding! You are among the top 80%😬";
    console.log(stats.textContent);
    alert(stats.textContent);
  } else if (score == 4) {
    stats.textContent = "Technologically challenged! You are among the top 90%";
    console.log(stats.textContent);
    alert(stats.textContent);
  } else if (score == 3) {
    stats.textContent = "Tech Illiterate! You are among the top 95%";
    console.log(stats.textContent);
    alert(stats.textContent);
  } else if (score == 2) {
    stats.textContent = "You need knowledge! You are among the top 98%";
    console.log(stats.textContent);
    alert(stats.textContent);
  } else if (score == 1) {
    stats.textContent = "Give up! You are among the bottom 2%🤕";
    console.log(stats.textContent);
    alert(stats.textContent);
  } else if (score == 0) {
    stats.textContent =
      "Technological Abyss! You are among the the bottom 2%🤕";
    console.log(stats.textContent);
    alert(stats.textContent);
  }
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions2.length) {
    showQuestion();
  } else {
    showScore();
  }
}
function showResult() {
  clearInterval(counter); // clear counter
  clearInterval(counterLine); // clear counterLine
  startTimer(timeValue); // calling startTimer function
  startTimerLine(widthValue); // calling startTimerLine function
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions2.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
  if (que_count < questions2.length - 1) {
    //if question count is less than total question length
    que_count++; //increment the que_count value
    que_numb++; //increment the que_numb value
    showQuestion(); //calling the show question  function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); // clear counter
    clearInterval(counterLine); // clear counterLine
    startTimer(timeValue); // calling startTimer function
    startTimerLine(widthValue); // calling startTimerLine function
    timeText.textContent = "Time Left"; // change the timeText to TIme left
    next_btn.classList.remove("show"); //hide the next button
  } else {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
  }
});
startQuiz();
function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time; // changing the value of timeCount with time value
    time--; // decrement of time
    if (time < 9) {
      //if timer is less than 9
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero; //add a 0 before time value
    }
    if (time < 0) {
      clearInterval(counter); // clear counter

      let correctAns = questions2[que_count].answer; //getting correct answer from array
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); // once user select an option then disabled all options
      }
      next_btn.classList.add("show"); // show the next button if user selected any option
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1; //upgrading time value with 1
    time_line.style.width = time + "px"; //increasing width of time_line with px by time value
    if (time > 549) {
      //if time value is greater than 549
      clearInterval(counterLine); // clear counterLine
    }
  }
}
function queCounter(index) {
  //creating a new span tag and passing the question number and total question

  let totalQueCounTag =
    "<span><p>" +
    que_numb +
    "</p> of <p>" +
    questions2.length +
    "</p> Questions</span>";
  bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_que_counter
}
