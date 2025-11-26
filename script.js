function atualizarRelogio() {
    const agora = new Date();
    
    // Obtém a hora, minuto e segundo
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // Calcula o ângulo de cada ponteiro
    let anguloHora = (horas % 12) * 30 + (minutos / 60) * 30;
    let anguloMinuto = minutos * 6;
    let anguloSegundo = segundos * 6;

    // Atualiza a rotação dos ponteiros com base nos cálculos
    document.getElementById('hour').style.transform = `translateX(-50%) translateY(-100%) rotate(${anguloHora}deg)`;
    document.getElementById('minute').style.transform = `translateX(-50%) translateY(-100%) rotate(${anguloMinuto}deg)`;
    document.getElementById('second').style.transform = `translateX(-50%) translateY(-100%) rotate(${anguloSegundo}deg)`;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Executa a função logo ao carregar a página
atualizarRelogio();

