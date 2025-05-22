const answers = ["Yes", "No", "Maybe", "Try again"];

const answerGenerator = {
    getRandomAnswer : function() {
        const index = Math.floor(Math.random() * array.length);
    return answers[index];
    }
    
};

const button = document.getElementById("getAnswerButton");
const result = document.getElementById("result");
const advice = document.getElementById("advice");

button.addEventListener("click", function() {
  const question = document.getElementById("questionInput").value;

 if (question.trim() === "") {
    result.textContent = "Please type a question!";
    return;
  }

  const randomAnswer = answerGenerator.getRandomAnswer();
  result.textContent = "Answer: " + randomAnswer;
});