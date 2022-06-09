const dropdownBtn = document.querySelector(".dropdown-btn")
const dropdownMenu = document.querySelector('.dropdown-content')

dropdownBtn.addEventListener( 'click', () => {
dropdownMenu.classList.toggle("hide")
}
)