import './less/index.less'

// Your code goes here!

// Header Events

const topHeader = document.getElementsByTagName('header');

topHeader[0].addEventListener('click', (event) => event.target.style.backgroundColor = 'lightBlue');

topHeader[1].addEventListener('mouse', (event) => {event.target.style.Border = '2px blue solid'})

// Paragraph

const middleSections = document.getElementsByTagName('p');

middleSections[0].addEventListener('copy', (event) => {
    event.target.textContent = 'Why did you copy me??? +_+'
})

middleSections[1].addEventListener('click', (event) => {
    event.target.textContent = 'Ouch! chill, kid!'
})

middleSections[2].addEventListener('dblclick', (broski) => {
    broski.target.textContent = 'Yup, I you broke me. No I need a coding nerd @_@'
})

window.addEventListener('copy', (event) => {
    event.preventDefault
})
