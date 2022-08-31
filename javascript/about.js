let wrapper = document.getElementById("wrapper")
let info = document.getElementById("info")
let infoBtn = document.getElementById("info-btn")
let experience = document.getElementById("experience")
let experienceBtn = document.getElementById("experience-btn")
let skills = document.getElementById("skills")
let skillsBtn = document.getElementById("skills-btn")
let infoHide = document.getElementById("info-hide")
let experienceHide = document.getElementById("experience-hide")
let skillsHide = document.getElementById("skills-hide")

//HAMBURGER ICON
let menu = document.getElementById("menu")
let exit = document.getElementById("close")
let nav = document.getElementById("nav")
let navLinks = document.getElementById("nav-links")

infoBtn.addEventListener("click", () => {
    wrapper.style.gridTemplateColumns = '1fr'
    info.style.width = '100%'
    experience.style.display = 'none'
    skills.style.display = 'none'
    infoBtn.style.display = 'none'
    infoHide.style.display = 'inline-block'
})

experienceBtn.addEventListener("click", () => {
    wrapper.style.gridTemplateColumns = '1fr'
    experience.style.width = '100%'
    info.style.display = 'none'
    skills.style.display = 'none'
    experienceBtn.style.display = 'none'
    experienceHide.style.display = 'inline-block'
})

skillsBtn.addEventListener("click", () => {
    wrapper.style.gridTemplateColumns = '1fr'
    skills.style.width = '100%'
    info.style.display = 'none'
    experience.style.display = 'none'
    skillsBtn.style.display = 'none'
    skillsHide.style.display = 'inline-block'
})

infoHide.addEventListener("click", () => {
    wrapper.style.gridTemplateColumns = '1fr 1fr 1fr'
    experience.style.display = 'inline-block'
    skills.style.display = 'inline-block'
    infoHide.style.display = 'none'
    infoBtn.style.display = 'inline-block'
})

experienceHide.addEventListener("click", () => {
    wrapper.style.gridTemplateColumns = '1fr 1fr 1fr'
    info.style.display = 'inline-block'
    skills.style.display = 'inline-block'
    experienceHide.style.display = 'none'
    experienceBtn.style.display = 'inline-block'
})

skillsHide.addEventListener("click", () => {
    wrapper.style.gridTemplateColumns = '1fr 1fr 1fr'
    experience.style.display = 'inline-block'
    info.style.display = 'inline-block'
    skillsHide.style.display = 'none'
    skillsBtn.style.display = 'inline-block'
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