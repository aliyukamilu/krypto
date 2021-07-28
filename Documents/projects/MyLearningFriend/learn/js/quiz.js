//Instruction
const instruction = document.querySelectorAll(".instruction")
//Question
const theQuestion = document.querySelectorAll(".the_question")
// The Answer
const theAnswer = document.querySelectorAll(".the_answer")
// The Options 
const options = document.querySelectorAll(".option")



$(function () {
    $('.option').on('click', function () {
        $(this).parent().find('.option.optionActive').removeClass('optionActive');
        $(this).addClass('optionActive');
    });
});

getQuestion()
async function getQuestion(){
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple");
    const data = await response.json()
    console.log(data.results)
}

options.forEach((option) => {
    option.addEventListener("click", function () {

        theAnswer.forEach((answers) => {
            var answerVal = answers.value
            if (option.dataset.answer === answerVal) {
                correctAnswer()
            } else {
                wrongAnswer()
            }
        })

    })
})
const corrsound = document.getElementById("correctsound")
const wrrsound = document.getElementById("wrongsound")
var score = document.querySelector(".score")
function correctAnswer() {
    corrsound.play()
    alert("You are correct")

}
function wrongAnswer() {
    wrrsound.play()
    alert(" You are Wrong")
}