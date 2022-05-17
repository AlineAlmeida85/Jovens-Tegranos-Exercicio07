

function calcular() {
    
    let distancia = document.getElementById("inputDictancia").value;
    let combustivel = document.getElementById("inputCombustivel").value;

    let media = distancia / combustivel;

    resultadoConsumo.innerHTML = media.toFixed(3);

}


