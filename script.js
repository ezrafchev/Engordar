function calcularImc(peso, altura) {
    return peso / Math.pow(altura / 100, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
}

function calcularTMB(peso, altura, idade) {
    const TMB = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
    return TMB;
}

function calcularNCD(TMB, fatorAtividade) {
    return TMB * fatorAtividade;
}

function calcularCaloriasParaGanharPeso(TMB, fatorAtividade, pesoGanhar, dias) {
  const NCD = calcularNCD(TMB, fatorAtividade);
  const caloriasPorDia = (pesoGanhar * 7700) / dias;
  const caloriasParaGanharPeso = NCD + caloriasPorDia;
  return caloriasParaGanharPeso;
}

function main() {
  const form = document.getElementById("imc-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const idade = parseInt(document.getElementById("idade").value);
    const fatorAtividade = parseFloat(document.getElementById("fator-atividade").value);
    const pesoGanhar = parseFloat(document.getElementById("peso-ganhar").value);
    const dias = parseFloat(document.getElementById("dias").value);

    const imc = calcularImc(peso, altura);
    const classificacaoImc = classificarImc(imc);
    const TMB = calcularTMB(peso, altura, idade);
    const NCD = calcularNCD(TMB, fatorAtividade);
    const caloriasParaGanharPeso = calcularCaloriasParaGanharPeso(TMB, fatorAtividade, pesoGanhar, dias);

    const resultado = {
        classificacaoImc: classificacaoImc,
        TMB: TMB,
        NCD: NCD,
        caloriasParaGanharPeso: caloriasParaGanharPeso
};


    document.getElementById("resultado-imc").innerText = resultado.classificacaoImc;
    document.getElementById("resultado-tmb").innerText = resultado.TMB.toFixed(2);
    document.getElementById("resultado-ncd").innerText = resultado.NCD.toFixed(2);
    document.getElementById("resultado-calorias").innerText = resultado.caloriasParaGanharPeso.toFixed(2);
  });
}

main();

