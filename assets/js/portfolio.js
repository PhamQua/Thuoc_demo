var openLogin = document.querySelector('.login-btn')
var close = document.querySelector('.cancel-btn')
var loginModal = document.querySelector('.login-container')

openLogin.addEventListener('click', () => {
    loginModal.classList.remove('close-animate')
    loginModal.classList.add('open-animate')
})
close.addEventListener('click', () => {
    loginModal.classList.add('close-animate')
})
window.addEventListener('click', (event) => {
    if (event.target == loginModal){
        loginModal.classList.add('close-animate')
    }
})
// navbar 
var navbarBtn = document.querySelector('.navbar-toggle')
var fullsizeBar = document.querySelector('.navlist')
var closeNavbarBtn = document.getElementById('close-navbar')

navbarBtn.addEventListener('click', () => {
    fullsizeBar.classList.add('openbar')
    fullsizeBar.classList.remove('closebar') 
})
closeNavbarBtn.addEventListener('click', () => {
    fullsizeBar.classList.remove('openbar')   
    fullsizeBar.classList.add('closebar')   
    
})
// 
var next = document.getElementById('next')
var next1 = document.getElementById('next1')
var back = document.getElementById('back')
var back1 = document.getElementById('back1')

var progress = document.getElementById('progress')
var signinForm1 = document.getElementById('signup-form1')
var signinForm2 = document.getElementById('signup-form2')
var signinForm3 = document.getElementById('signup-form3')
var closeSignin = document.querySelector('.close-signin-btn')
var signinBtn = document.querySelector('.Signup-btn')
var signinModal = document.querySelector('.signup-container')


next.addEventListener('click', () => {
    signinForm1.style.left = "450px"
    signinForm2.style.left = "0"
    progress.style.width = "210px"
})
next1.addEventListener('click', () => {
    signinForm2.style.left = "450px"
    signinForm3.style.left = "0"
    progress.style.width = "420px"
})
back.addEventListener('click', () => {
    signinForm2.style.left = "450px"
    signinForm1.style.left = "0"
    progress.style.width = "0"
})
back1.addEventListener('click', () => {
    signinForm3.style.left = "450px"
    signinForm2.style.left = "0"
    progress.style.width = "210px"
})
signinBtn.addEventListener('click', () => {
    signinModal.style.display = "block"
})
closeSignin.addEventListener('click', () => {
    signinModal.style.display = "none"
})
window.addEventListener('click', (event) => {
    if (event.target == signinModal){
        signinModal.style.display = "none"
    }
})