let btn = document.getElementById("btn");
let smallNav = document.getElementById("smallNav-btn")

btn.addEventListener("click", function () {
    window.location.href = "thankYou.html"
})

smallNav.addEventListener("click", function () {
    this.style.display = block
})