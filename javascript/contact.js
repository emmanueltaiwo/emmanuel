//HAMBURGER ICON
let menu = document.getElementById("menu")
let exit = document.getElementById("close")
let nav = document.getElementById("nav")
let navLinks = document.getElementById("nav-links")

var x = window.matchMedia("(max-width: 900px)")


if (x.matches) {
menu.addEventListener("click", () => {
    nav.style.transition = ' 0.5s ease-in-out'
    navLinks.style.transition = '1s ease-in-out'
    exit.style.display = 'inline-block'
    menu.style.display = 'none'
    nav.style.paddingBottom = '40vh'
    navLinks.style.display = 'block'
})

exit.addEventListener("click", () => {
    exit.style.display = 'none'
    menu.style.display = 'inline-block'
    navLinks.style.display = 'none'
    nav.style.paddingBottom = '0'
})
}

else {
    exit.style.display = 'none'
    menu.style.display = 'none'
    nav.style.paddingBottom = '0'
}