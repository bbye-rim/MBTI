import { results, mbtis } from './data.js'

// http://127.0.0.1:5500/results.html?mbti=enfj
// location.search는 ? 뒤의 데이터에 대한 정보 즉, 쿼리스트링 정보를 가진다.
// URLSearchParams명령을 통해 쿼리스트링 정보를 분석
// get을 통해 문자 'mbti'에 담긴 값을 가져온다
const mbti = new URLSearchParams(location.search).get('mbti')
console.log(mbti)
// mbti에 해당하는 숫자값을 얻어 results 배열 내의 객체 데이터를 result 변수에 저장
// mbtis[mbti] = 1
// results[mbtis[mbti]] = results[1]
// result에는 프로직진러가 title인 객체 데이터가 저장
const result = results[mbtis[mbti]] 

const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const jobEls = document.querySelectorAll('.job')
const lectureEl = document.querySelector('.lecture')
const lectureImgEl = document.querySelector('.lecture img')

titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results[index]
})
jobEls.forEach(function (jobEl, index) {
  jobEl.innerHTML = result.jobs[index]
})
lectureEl.href = result.lectureUrl
lectureImgEl.src = result.lectureImg