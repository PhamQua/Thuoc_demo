// login modal
var loginModal = document.querySelector('.login-modal')
var openLoginBtn = document.querySelector('.login-btn')
var closeLoginBtn = document.querySelector('.close-login-btn')
var cancelBtn = document.querySelector('.cancel-btn')

openLoginBtn.addEventListener('click', () => {
    loginModal.classList.add("show-loginform")
})
closeLoginBtn.addEventListener('click', () => {
    loginModal.classList.remove("show-loginform")
})

window.addEventListener('click', (event) => {
    if (event.target == loginModal){
        loginModal.classList.remove("show-loginform")
    }
})
// navbar
var navbar = document.querySelector('.navbar')
var lastScrollTop = 0
window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > lastScrollTop){
        navbar.style.height = "0"
    } else {
        navbar.style.height = "50px"
    }
    lastScrollTop = scrollTop
})
// products 
var productItem = document.querySelector('.products-items')
var hoverSpan = document.querySelector('.products-items-hover',".hover-animate" )
var productsModal = document.querySelector('.products-modal')
var closeProductBtn = document.querySelector('.close-products-modal')

console.log(closeProductBtn)
productItem.addEventListener('mouseover', (event) => {
    hoverSpan.style.display = 'block'
});
productItem.addEventListener('mouseout', (event) => {
    hoverSpan.style.display = 'none'
});
hoverSpan.addEventListener('click', (event) => {
    productsModal.style.display = 'block'
});
window.addEventListener('click', (event) => {
    if (event.target == productsModal){
        productsModal.style.display = 'none'
    }});
closeProductBtn.addEventListener('click', () => {
    productsModal.style.display = 'none'
})    

// multi step form
var form1 = document.getElementById('form-step1')
var form2 = document.getElementById('form-step2')
var form3 = document.getElementById('form-step3')
var next = document.getElementById('next')
var next1 = document.getElementById('next1')
var back = document.getElementById('back')
var back1 = document.getElementById('back1')
var progress = document.getElementById('progress')
next.addEventListener('click', () => {
    form1.style.left = ('450px')
    form2.style.left = ('0px')
    progress.style.width = ('240px')
})

next1.addEventListener('click', () => {
    form2.style.left = ('450px')
    form3.style.left = ('0px')
    progress.style.width = ('360px')
})

back.addEventListener('click', () => {
    form1.style.left = ('0px')
    form2.style.left = ('450px')
    progress.style.width = ('120px')
})
back1.addEventListener('click', () => {
    form2.style.left = ('0px')
    form3.style.left = ('450px')
    progress.style.width = ('240px')
})