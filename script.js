const changeColor = document.getElementById('change-color');
const randomColor = document.getElementById('random-color');
const body = document.querySelector('body');
const color = document.querySelector('#color');


changeColor.addEventListener('click', () => {
    const IV = document.querySelector('input');
    body.style.backgroundColor = IV.value;
    if (IV.value === '') {
        color.innerHTML = '#000000';
    } else {
        color.innerHTML = IV.value
    }
    console.log(body.style.backgroundColor)
})

randomColor.addEventListener('click', () => {
    let random = () => Math.floor(Math.random() * 255)
    

    body.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`
    console.log(body.style.backgroundColor)
})