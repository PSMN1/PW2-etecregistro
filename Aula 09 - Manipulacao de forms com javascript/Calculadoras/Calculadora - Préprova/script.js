const num1 = document.querySelector('input#num1');
const num2 = document.querySelector('input#num2');
const operador = document.querySelector('input#operador');
const resultado = document.querySelector('div#resultado');

function calcular(){
    const numero1 = Number(num1.value);
    const numero2 = Number(num2.value);
    const operadorValor = operador.value;
    if(operadorValor == "+"){
        resultado.textContent = numero1 + numero2;
    }
    else if(operadorValor == "-"){
        resultado.textContent = numero1 - numero2;
    }
    else if(operadorValor == "*"){
        resultado.textContent = numero1 * numero2;
    }
    else if(operadorValor == "/"){
        resultado.textContent = numero1 / numero2;
    }
    else{
        resultado.textContent = `Digite um operador utilizavel!`
    }
}
function limpar(){
    num1.value = "";
    num2.value = "";
    operador.value = "";
    resultado.innerHTML = "";
}