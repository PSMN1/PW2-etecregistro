const cpuInput = document.querySelector('input#cpu');
const memoriaInput = document.querySelector('input#memoria');
const temperaturaInput = document.querySelector('input#temperatura');
const resultadoCpu = document.querySelector('div#resultadoCpu')
const resultadoMemoria = document.querySelector('div#resultadoMemoria')
const resultadoTemperatura = document.querySelector('div#resultadoTemperatura')



function verificarCpu(){
    const cpu = Number(cpuInput.value);
    if(cpu > 85){
        resultadoCpu.innerHTML = `Cpu: ${cpu}% - Crítico`
        resultadoCpu.style.backgroundColor = 'red'
    }
    else if(cpu > 60 & cpu <= 85){
        resultadoCpu.innerHTML = `Cpu: ${cpu}% - Atenção`
        resultadoCpu.style.backgroundColor = '#adc002'
    }
    else{
        resultadoCpu.innerHTML = `Cpu: ${cpu}% - Normal`
        resultadoCpu.style.backgroundColor = 'green'
    }
}
function verificarMemoria(){
    const memoria = Number(memoriaInput.value);
    if(memoria > 90){
        resultadoMemoria.innerHTML = `Memória: ${memoria}% - Crítico`
        resultadoMemoria.style.backgroundColor = 'red'
    }
    else if(memoria > 70 & memoria <= 90){
        resultadoMemoria.innerHTML = `Memória: ${memoria}% - Atenção`
        resultadoMemoria.style.backgroundColor = '#adc002'
    }
    else{
        resultadoMemoria.innerHTML = `Memória: ${memoria}% - Normal`
        resultadoMemoria.style.backgroundColor = 'green'
    }
}
function verificarTemperatura(){
    const temperatura = Number(temperaturaInput.value);
    if(temperatura > 80){
        resultadoTemperatura.innerHTML = `Temperatura: ${temperatura}°C - Crítico`
        resultadoTemperatura.style.backgroundColor = 'red'
    }
    else if(temperatura > 65 & temperatura <= 80){
        resultadoTemperatura.innerHTML = `Temperatura: ${temperatura}°C - Atenção`
        resultadoTemperatura.style.backgroundColor = '#adc002'
    }
    else{
        resultadoTemperatura.innerHTML = `Temperatura: ${temperatura}°C - Normal`
        resultadoTemperatura.style.backgroundColor = 'green'
    }
} 
function reiniciarServidor(){
    resultadoCpu.innerHTML = ""
    resultadoMemoria.innerHTML = ""
    resultadoTemperatura.innerHTML = ""
    cpuInput.value = ""
    memoriaInput.value = ""
    temperaturaInput.value = ""
    resultadoCpu.style.backgroundColor = ""
    resultadoTemperatura.style.backgroundColor = ""
    resultadoMemoria.style.backgroundColor = ""
}