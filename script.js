
// váriaveis para armazenar os elementos html da página
const changeColorButton = document.getElementById('change-color');
const randomColor = document.getElementById('random-color');
const body = document.querySelector('body');
const color = document.querySelector('#color');
const inputColor = document.querySelector('#input-color');

// função que muda a cor do fundo de tela de acordo com a escolha do usuario

// a função delcara uma variavel como sendo o valor do input escolhido pelo usúario
// e define como sendo o valor de background-color do elemento body da página
const changeColor = () => {
    const IV = document.querySelector('input');
    body.style.backgroundColor = IV.value;
    // se o valor do input estiver vazio e o usúario executar a função, 
    // o background-color é definido como #000000
    if (IV.value === '') {
        color.innerHTML = 'black';
        inputColor.placeholder = 'black'
    } else {
        color.innerHTML = IV.value
    }

};

// adiciona um ounvite de eventos ao botão changeColorButton ao clica-lo
changeColorButton.addEventListener('click', changeColor);

// adiciona um ouvinte de eventos ao inputColor qundo pressionada a tecla Enter
inputColor.addEventListener('keypress', (e) => {
    let key = e.key
    if (key == 'Enter') {
        changeColor()
    }
})


// gera uma cor aleatória onde uma função randomica gera um número de 0 a 254
// representando o valor de cada cor em rgb
randomColor.addEventListener('click', () => {
    let random = () => Math.floor(Math.random() * 255)

    body.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`
    color.innerHTML = body.style.backgroundColor;
    inputColor.placeholder = body.style.backgroundColor
    // console.log(body.style.backgroundColor)
})

const selectItem = [0, 1, 2];

const numValues = document.querySelectorAll(".num-values");
const increaseValue = document.querySelectorAll(".increase-value");
const decreaseValue = document.querySelectorAll(".decrease-value");

const changeValues = () => {
    body.style.backgroundColor = `rgb(${numValues[0].value},${numValues[1].value},${numValues[2].value})`;
    color.innerHTML = body.style.backgroundColor
    // console.log(body.style.backgroundColor)
}

selectItem.forEach(item => {

    increaseValue[item].addEventListener('click', () => {
        if (numValues[item].value < 255) {
            numValues[item].value = Number(numValues[item].value)+1
        }
        changeValues()
    })
    decreaseValue[item].addEventListener('click', () => {
        if (numValues[item].value > 0) {
            numValues[item].value = Number(numValues[item].value)-1
        }
        changeValues()
    })



})

