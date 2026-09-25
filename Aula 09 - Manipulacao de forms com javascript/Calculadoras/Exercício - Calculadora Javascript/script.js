let resultado = document.getElementById('resultado');
let numeros = document.querySelectorAll('#num button');
let limpar = document.querySelector('#C button');
let mais = document.querySelector('#mais button');
let menos = document.querySelector('#menos button');
let mult = document.querySelector('#mult button');
let div = document.querySelector('#div button');
let igual = document.querySelector('#igual button');
let primeironum;
let operacao;

numeros.forEach(function(botao){
    botao.addEventListener('click',function(){
        resultado.textContent = resultado.textContent + botao.textContent;
    });
});

limpar.addEventListener("click",function(){
    resultado.textContent="";
});

mais.addEventListener('click',function(){
    primeironum = resultado.textContent;
    operacao = "+";
    resultado.textContent="";
});
menos.addEventListener('click',function(){
    primeironum = resultado.textContent;
    operacao = "-";
    resultado.textContent="";
});
mult.addEventListener('click',function(){
    primeironum = resultado.textContent;
    operacao = "x";
    resultado.textContent="";
});
div.addEventListener('click',function(){
    primeironum = resultado.textContent;
    operacao = "/";
    resultado.textContent="";
});

igual.addEventListener('click',function(){
    let segundonum = Number(resultado.textContent);
    let primeiro = Number(primeironum);
    switch(operacao){
        case "+":
            resultado.textContent= primeiro + segundonum;
        break;
        case "-":
            resultado.textContent= primeiro - segundonum;
        break;
        case "x":
            resultado.textContent= primeiro * segundonum;
        break;
        case "/":
            resultado.textContent= primeiro / segundonum;
        break;
    }
});