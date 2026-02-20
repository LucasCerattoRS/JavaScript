function sortear() {
    // Obtém os valores dos campos de entrada
    quantidade = parseInt(document.getElementById("quantidade").value);
    de = parseInt(document.getElementById("de").value);
    ate = parseInt(document.getElementById("ate").value);
}
    if (de >= ate) {
        alert("O valor 'de' deve ser menor que o valor 'até'.");
        return;
    }
    
    if ((ate - de + 1) < quantidade) {
        alert("O intervalo é muito pequeno para a quantidade de números solicitada.");
        return;
    }

    let sorteados = [];
