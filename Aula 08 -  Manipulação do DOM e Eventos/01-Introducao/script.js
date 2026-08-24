// Javascript - ECMAscript

// Capturando um elemento DOM
const titulo = window.document.getElementsByTagName('h1')[0]

titulo.innerText = "Fui alterado pelo Javascript ;("

titulo.style.color = 'yellow'


// Alterando a cor da página pelo JS
const pagina = window.document.body

pagina.style.backgroundColor = '#2f2f2f'


// Capturando a div
const caixaMagica = window.document.getElementById("caixaMagica");
const bluepill = window.document.getElementById("bluepill");
const redpill = window.document.getElementById("redpill");


// Criando uma função
function entrada(){
    caixaMagica.innerText = 'Broxa 🤣'
    caixaMagica.style.backgroundColor = 'blue'
}
function saida(){
    caixaMagica.innerText = 'Gay 🌈'
    caixaMagica.style.backgroundColor = '#f02dcf'
}
function clicar(){
    caixaMagica.innerText = 'Tenho a solução!'
    caixaMagica.style.backgroundColor = 'yellow'
    caixaMagica.style.color = 'black'
    bluepill.innerText = 'Bluepill'
    bluepill.style.backgroundColor = '#1446cf'
    redpill.innerText = 'Redpill'
    redpill.style.backgroundColor = 'red'
}

// Escutando um evento
caixaMagica.addEventListener('mouseenter', entrada)
caixaMagica.addEventListener('mouseleave', saida)
caixaMagica.addEventListener('click', clicar)
