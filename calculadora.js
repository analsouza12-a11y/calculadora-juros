function calcular() {
    let capital = Number(document.getElementById("capital").value);
    let taxa = Number(document.getElementById("taxa").value) / 100;
    let tempo = Number(document.getElementById("tempo").value);
    let tipoJuros = document.getElementById("tipoJuros").value;

    let valorJuros, valorMontante;

    if (tipoJuros === "1") {
        valorJuros = capital * taxa * tempo
        valorMontante = capital + valorJuros
    }
    else {
        valorMontante = capital * Math.pow(1 + (taxa), tempo);
        valorJuros = valorMontante - capital;
    }

    document.getElementById("resultado").innerText = `O montante final: R$ ${valorMontante.toFixed(2)}`;
    document.getElementById("resultado2").innerText = `Total de juros: R$ ${valorJuros.toFixed(2)}`;

}
function limpar() {
    document.getElementById("capital").value = " "
    document.getElementById("taxa").value = " "
    document.getElementById("tempo").value = " "
    document.getElementById("resultado").innerText = " "
    document.getElementById("resultado2").innerText = " "

}



// let capital = Number(prompt("Digite o valor inicial"));
// let taxa = Number(prompt("O valor da taxa:"));
// let tempo = Number(prompt("Insira o tempo, em meses:"));
