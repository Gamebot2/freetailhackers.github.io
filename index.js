function toggleNavbar() {
    const options = document.querySelector('.options')
    options.classList.toggle('options-show')
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('navbar-toggled')
}

window.onload = function() {
    document.querySelector('.toggle').addEventListener('click', toggleNavbar)
}

function imageHover(element) {
    var currSrc = element.src; 
    const path = currSrc.indexOf('img')
    const dotPos = currSrc.indexOf('.', path)
    var newSrc = currSrc.substring(path, dotPos) + "HOVER.png" 
    console.log(newSrc)
    element.setAttribute('src', newSrc)
}

function imageHover(element) {
    var currSrc = element.src; 
    const path = currSrc.indexOf('img')
    const dotPos = currSrc.indexOf('.', path)
    var newSrc = currSrc.substring(path, dotPos) + "HOVER.png" 
    element.setAttribute('src', newSrc)
}

function imageHoverOut(element) {
    var currSrc = element.src; 
    const cutOut = currSrc.indexOf('HOVER')
    var newSrc = currSrc.substring(0, cutOut) + currSrc.substring(cutOut + 5);
    element.setAttribute('src', newSrc)
}

window.onscroll = function() {
    const navbar = document.querySelector('.navbar')
    const alpha = (window.scrollY > 100 ? 1 : window.scrollY / 100);
    console.log(alpha)
    navbar.style.backgroundColor =  'rgba(65, 27, 163, ' + alpha + ')'
    // navbar.classList.toggle('scrolled', window.scrollY > 50);
    console.log(window.scrollY)
};