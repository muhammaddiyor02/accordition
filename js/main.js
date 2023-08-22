var elBtn = document.querySelector('.accordition__sumble')
var elBtnn = document.querySelector('.accordition__sumble2')
var elBtnnn = document.querySelector('.accordition__sumble3')
var elCard = document.querySelector('.accordition--item')
var elCardd = document.querySelector('.accordition--itemm')
var elCarddd = document.querySelector('.accordition--itemmm')



function FnRotate1() {
  x
    elBtn.classList.toggle('acc__open')
  
}
function FnRotate2() {

    elBtnn.classList.toggle('acc__open2')
    elCardd.classList.add('accordition__wrap__op')
}
function FnRotate3() {

    elBtnnn.classList.toggle('acc__open3')
}
elCard.addEventListener ('click', ()=>{
    elBtn.classList.toggle('acc__open')
})
elCardd.addEventListener ('click', ()=>{
    elBtnn.classList.toggle('acc__open')
    elCardd.classList.add('accordition__wrap__op')
})
elCarddd.addEventListener ('click', ()=>{
    elBtnnn.classList.toggle('acc__open')
})