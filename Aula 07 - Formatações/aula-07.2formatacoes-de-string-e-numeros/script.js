// Formatando strings
const nome = window.prompt("Qual é o seu nome")

document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} caractéres.<br>`)

document.write(`Olá, <strong>${nome}</strong>! Seu nome em maiúsculas é ${nome.toUpperCase()}.<br>`)

document.write(`Olá, <strong>${nome}</strong>! Seu nome em minúsculas é ${nome.toLowerCase()}.<br>`)


// Formatando números
const salario = Number(window.prompt("Digite seu salário: "))
const salarioD = salario / 5.22;
const salarioE = salario / 6.05;

document.write(`Seu salário com casas decimais é: ${salario.toFixed(2)}<br>`)
// Alterando o identificador de casas decimais
document.write(`Seu salário com vírgulas nas decimais é: ${salario.toFixed(2).replace('.',',')}<br>`)

document.write(`Seu salário em real: ${salario.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}<br>`)

document.write(`Seu salário em dólar: ${salarioD.toLocaleString('en',{style:'currency',currency:'USD'})}<br>`)

document.write(`Seu salário em euros: ${salarioE.toLocaleString('pt-br',{style:'currency',currency:'EUR'})}<br>`)