const botao1 = window.document.getElementsByClassName('button')[0]
const vermelho = window.document.getElementsByClassName('red')[0]
function parar(){
    vermelho.style.backgroundColor = 'red'
    amarelo.style.backgroundColor = 'gray'
    verde.style.backgroundColor = 'gray'
}
botao1.addEventListener('click',parar)


const botao2 = window.document.getElementsByClassName('button')[1]
const amarelo = window.document.getElementsByClassName('yellow')[0]
function atencao(){
    amarelo.style.backgroundColor = 'yellow'
    vermelho.style.backgroundColor = 'gray'
    verde.style.backgroundColor = 'gray'
}
botao2.addEventListener('click',atencao)


const botao3 = window.document.getElementsByClassName('button')[2]
const verde = window.document.getElementsByClassName('green')[0]
function prosseguir(){
    verde.style.backgroundColor = 'green'
    amarelo.style.backgroundColor = 'gray'
    vermelho.style.backgroundColor = 'gray'
}
botao3.addEventListener('click',prosseguir)
