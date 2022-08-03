var search = document.getElementById('search')

window.addEventListener('click', (event) => {
    if (event.target == search ){
        search.style.width = "350px"
    }  else {
        search.style.width = "100px"
    }
})

var home = document.getElementById('home')
var time = document.getElementById('time')
var calendar = document.getElementById('calendar')
var settings = document.getElementById('settings')

    