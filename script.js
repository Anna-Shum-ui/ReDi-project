const answers = ["Yes", "No", "Maybe", "Try again"];

const answerGenerator = {
    getRandomAnswer : function() {
        const index = Math.floor(Math.random() * answers.length);
    return answers[index];
    }
    
};

const button = document.getElementById("getAnswerButton");
const result = document.getElementById("result");
const advice = document.getElementById("advice");

button.addEventListener("click", function() {
  const question = document.getElementById("questionInput").value.trim();

 if (question.trim() === "") {
    result.textContent = "Please type a question!";
    result.style.color = "red";
    return;
  }

  const randomAnswer = answerGenerator.getRandomAnswer();
  result.textContent = "Answer: " + randomAnswer;
  loadAdvice();
});

function loadAdvice() {
  advice.textContent = "Loading...";

  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
      advice.textContent = `"${data.slip.advice}"`;
    })
    .catch(error => {
      advice.textContent = "Could not load advice.";
      console.error('Fetch error:', error);
    });
}