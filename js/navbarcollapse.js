let navbarTogglerOpen = document.querySelector(".navbar-toggler")
let myNavCollapsed = document.querySelector("#myNavCollapsed")
let closeNav = document.querySelector(".closeNav")
function openNavbar() {
    navbarTogglerOpen.addEventListener("click", function () {
        myNavCollapsed.classList.add("show")
    })
}

openNavbar()

myNavCollapsed ? closeNavbar() : null

function closeNavbar() {
    closeNav.addEventListener("click", function () {
        myNavCollapsed.classList.remove("show")
    })
}
