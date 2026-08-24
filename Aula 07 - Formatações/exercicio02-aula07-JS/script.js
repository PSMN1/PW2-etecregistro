const nome = window.prompt("Digite seu nome: ")
const ano_nasc = Number(window.prompt("Digite seu ano de nascimento: "))
const cidade = window.prompt("Insira onde você mora☠️: ")
const salario = Number(window.prompt("Digite seu salário: "))
const salarioD = salario / 5.22;
const salarioE = salario / 6.05;
const idade = 2026 - ano_nasc

document.write(` Seu nome é ${nome.toUpperCase()}.<br>`)
document.write(` Você tem ${idade} anos de idade<br>`)
document.write(` Você mora em ${cidade.toUpperCase()}<br>`)
document.write(` O número de caractéres da sua cidade é ${cidade.length}<br>`)
document.write(`Seu salário em real: ${salario.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}<br>`)
document.write(`Seu salário em dólar: ${salarioD.toLocaleString('en',{style:'currency',currency:'USD'})}<br>`)
document.write(`Seu salário em euros: ${salarioE.toLocaleString('pt-br',{style:'currency',currency:'EUR'})}<br>`)