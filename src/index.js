import './less/index.less'

// Your code goes here!

// On load

window.onload = function () {
    
}

const top = document.getElementsByTagName('header');
    console.log(top)
    top[0].addEventListener ('click', (event) => {event.target.style.backgroundColor = 'blue'})
