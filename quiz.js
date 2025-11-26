// 1. Store questions and answers in two arrays
let questions = [
  "What is the capital of India?",
  "2 + 2 = ?",
  "HTML stands for?",
  "CSS is used for?",
  "JavaScript runs in browser? (yes/no)"
];

let answers = [
  "delhi",
  "4",
  "hypertext markup language",
  "styling",
  "yes"
];

// 2. Score starts at 0
let score = 0;

// 3. Loop through each question
for (let i = 0; i < questions.length; i++) {

  // 4. Ask user a question
  let userAnswer = prompt(questions[i]);

  // If user cancels the quiz
  if (userAnswer === null) {
    alert("Quiz stopped.");
    break;
  }

  // 5. Convert answer to lowercase + remove spaces
  userAnswer = userAnswer.toLowerCase().trim();

  // 6. Check the answer
  if (userAnswer === answers[i]) {
    alert("Correct!");
    score++;
  } else {
    alert("Wrong! Correct answer: " + answers[i]);
  }
}

// 7. Show final score
alert("Your score = " + score + " / " + questions.length);
alert("Your score = " + score + " / " + questions.length);
