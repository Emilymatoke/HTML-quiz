const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answers-buttons')

let shuffledQuestions,currentQuestionIndex
let quizScore =0


function selectAnswer(e){
    const selectedButton=e.target
    const correct = selectedButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct)
   })
   if(shuffledQuestions.length > currentQuestionIndex +1)
}
function setStatusClass(element,correct) {
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else {
        element.classList.add("wrong")
    }
}


function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'which one of these is a JavaScript framework?'
        answers :[
            {text: 'Python', correct: false},
            {text: 'Django', correct: false},
            {text: 'React', correct: true},
            {text: 'Eclipse', correct: false}
        ],
    },

    {
        question: 'who is the chief minister in Kenya'
        answers :[
            {text: 'Raila', correct: false},
            {text: 'Mudavadi', correct: true}
            
        ],
    },

    {
        question: 'what is 4*3?'
        answers :[
            {text: '7', correct: false},
            {text: '2', correct: false},
            {text: '12', correct: true},
            {text: '1', correct: false}
        ],
    },
]