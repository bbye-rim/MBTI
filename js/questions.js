import { questions } from './data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0
let mbti = ''

function renderQuestion() {
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}

function nextQuestion(choiceNumber) {
  // 10번째 질문에서 선택했을 때
  if (currentNumber === questions.length - 1) { // question.lenth = 10
    showResultPage()
    return // 함수 종료
  }

  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value
  currentNumber = currentNumber + 1
  renderQuestion() // 다음 질문을 보여주기 위해 함수 실행
}

function showResultPage() {
  // 쿼리스트링 : 주소에 정보를 담아서 넘겨주는 방식
  // location.href = '주소?데이터_이름=전달하고_싶은_데이터
  location.href = '/results.html?mbti=' + mbti 
  
}

choice1El.addEventListener('click', function () {
  nextQuestion(0)
})
choice2El.addEventListener('click', function () {
  nextQuestion(1)
})

// 함수 실행
renderQuestion()