// slide modal
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// Login modal
var modal = document.querySelector('.modal');
var sideNav = document.querySelector('.sidenav')
var main = document.querySelector('.main-container')
var slideModal = document.querySelector('.slide-modal')
var iconBar = document.querySelector('.icon-bar')


window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
} 
if (event.target == sideNav){
    sideNav.style.width = "0"   
}
}
// side nav


function openNav() {
    sideNav.style.width = "100%";
    slideModal.style.display = "none"
  }
//   vì khi popup sidebar ra thì slide img hiện đè lên sidebar, nếu chỉnh Z-index thì bị
// che mất nút pre, next nên e để tạm animate như này, để em chỉnh lại sau
function closeNav() {
    sideNav.style.width = "0";
    slideModal.style.display = "block"
    }
    var lastScrollTop = 0
    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset 
        if (scrollTop > lastScrollTop ) {
            iconBar.style.top = '-50px'
        } else {
            iconBar.style.top = '0'
        }
        lastScrollTop
        
    })

  