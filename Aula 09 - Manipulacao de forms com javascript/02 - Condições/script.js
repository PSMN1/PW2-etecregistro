// Javascript

// Capturando os elementos
const inputVelocidade = document.querySelector('input#inputVelocidade');
const resultado = document.querySelector('div#resultado');
const limite = 22.22;

function verificarVelocidade(){
    const velocidade = inputVelocidade.value;
    resultado.innerHTML = `Sua velocidade atual é de ${velocidade} m/s. O limite da via é ${limite} m/s.`
    // Condição
    if(velocidade > limite){
        resultado.innerHTML += `<p>Você está <strong>multado</strong> por excesso de velocidade</p>`
    }
    else{
        resultado.innerHTML += `<p>Você está dentro do limite de velocidade! Dirija com cuidado</p>`
    }
}