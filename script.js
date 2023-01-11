
// váriaveis para armazenar os elementos html da página
const changeColorButton = document.getElementById('change-color');
const randomColor = document.getElementById('random-color');
const body = document.querySelector('body');
const color = document.querySelector('#color');
const inputColor = document.querySelector('#input-color')

// função que muda a cor do fundo de tela de acordo com a escolha do usuario

// a função delcara uma variavel como sendo o valor do input escolhido pelo usúario
// e define como sendo o valor de background-color do elemento body da página

const changeColor = () => {
    const IV = document.querySelector('input');
    body.style.backgroundColor = IV.value;
    // se o valor do input estiver vazio e o usúario executar a função, 
    // o background-color é definido como #000000
    if (IV.value === '') {
        color.innerHTML = '#000000';
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
    // console.log(body.style.backgroundColor)
})