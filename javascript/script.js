  // MAIN SCRIPT CODE START
//   MAIN CONTENT
let start = document.getElementById("start")
let hide = document.getElementById("hide")
let play = document.getElementById("play")
let content = document.getElementById("content")
let hire = document.getElementById("hire")
let brand = document.getElementById("brand")

// GAME CONTENT
let game = document.getElementById("game")
let input = document.getElementById("input")
let submit = document.getElementById("submit")
let warning = document.getElementById("warning")
let again = document.getElementById("again")

//HAMBURGER ICON
let menu = document.getElementById("menu")
let exit = document.getElementById("close")
let nav = document.getElementById("nav")
let navLinks = document.getElementById("nav-links")

hire.addEventListener("click", () => {
    window.location.href = "/html/projects.html";
})

//ASSIGNING A FUNCTION TO THE 'GO TO PORTFOLIO' BUTTON 
start.addEventListener("click", () => {
    play.style.display = 'none'
    content.style.transition = '2s ease-in-out'
    content.style.display = 'block'
    brand.style.display = 'none'

    hide.style.display = 'inline-block'
    hide.style.textAlign = 'center'
    start.style.display = 'none'
})

//ASSIGNING A FUNCTION TO THE HIDE BUTTON
hide.addEventListener("click", () => {
    game.style.display = 'none'
    play.style.display = 'inline-block'
    content.style.display = 'none'
    hide.style.display = 'none'
    start.style.display = 'inline-block'
    brand.style.display = 'inline-block'
})

//ASSIGNING A FUNCTION TO THE PLAY A GAME BUTTON
play.addEventListener("click", () => {
    brand.style.display = 'none'
    game.style.display = 'block'
    play.style.display = 'none'
    start.style.display = 'none'
    hide.style.display = 'inline-block'
})

//GAME SECTION

//RANDOM NUMBER
let randomNumber = Math.floor(Math.random() * 100) + 1

console.log(randomNumber)

//ASSIGNING A FUNCTION TO THE SUBMIT BUTTON IN THE GAME SECTION
submit.addEventListener("click", () => {

    let userInput = Number(input.value)
    

    if (userInput === randomNumber) {
        submit.style.display = 'none'
        again.style.display = 'inline-block'
        warning.style.color = 'green'
        warning.textContent = 'Wohoo! You got the number :)'
        console.log('Wohoo! You got the number :)')
    } 
    else if (userInput === Number('')) {
        warning.style.color = 'red'
        warning.textContent = 'Please Enter a guess'
    }
    else if (userInput < randomNumber) {
        warning.style.color = 'red'
        warning.textContent = 'oops! Try an higher number'
    }
    else if (userInput > randomNumber) {
        warning.style.color = 'red'
        warning.textContent = 'oops! Try a lower number'
    }

})

//ASSIGNING A FUNCTION TO THE PLAY AGAIN BUTTON IN THE GAME SECTION
again.addEventListener("click", () => {
    warning.textContent = ''
    submit.style.display = 'inline-block'
    again.style.display = 'none'
    input.value = ''
})


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