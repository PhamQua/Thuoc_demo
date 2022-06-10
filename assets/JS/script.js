// const dropdownBtn = document.querySelector(".dropdown-btn")
// const dropdownMenu = document.querySelector('.dropdown-content')

// dropdownBtn.addEventListener( 'click', () => {
// dropdownMenu.classList.toggle("hide")
// }
// )

window.addEventListener("DOMContentLoaded", function () {
  var setTimeOut;
  document.querySelectorAll(".dropdown-btn").forEach((dr) => {
    dr.addEventListener("click", function () {
      console.log("CLICK");
      clearTimeout(setTimeOut);
      const subMenu = document.getElementById("dropdownContent");
      if (subMenu.classList.contains("show")) {
        subMenu.style.height = 0;
        setTimeOut = setTimeout(() => {
          subMenu.classList.remove("show");
        }, 502);
      } else {
        subMenu.classList.add("show");
        setTimeOut = setTimeout(function () {
          subMenu.style.height = subMenu.scrollHeight + "px";
        }, 0);
      }
    });
  });
});
