// var open = document.getElementById('open')
// var modalContent = document.getElementById('modal_content')
// var close = document.getElementById('close')
// var save = document.getElementById('save')

// open.addEventListener('click', () => {
//     modalContent.classList.add('show');
// })
// close.addEventListener('click', ()  => {
//     modalContent.classList.remove('show');
// })
var open = document.getElementById('open')
var modal_content = document.getElementById('modal_content')
var close = document.getElementById('close')
var save = document.getElementById('save')
var div = document.createElement("div")
var setTimeOut;

open.addEventListener('click',() => {
    modal_content.classList.add('show')
    document.body.appendChild(div)
    div.classList.add('background')
})
div.addEventListener('click', () => {
    modal_content.classList.remove('show')
    document.body.removeChild(div)

})
close.addEventListener('click', () => {
    modal_content.classList.remove('show')
    document.body.removeChild(div)  
})
save.addEventListener('click', () => {
    alert('day la alert')
    modal_content.classList.remove('show')
    document.body.removeChild(div) 
})


