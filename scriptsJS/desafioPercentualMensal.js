
function PercentualMensal() {

    let valorFaturamento = [6783643, 3667866, 2922988, 2716548, 1984953]

    const total = valorFaturamento.reduce(function (ant, dep) {
        return ant + dep
    })

    for (let i = 0; i < 5; i++) {
        let percentual = valorFaturamento[i] * 100 / total
        console.log(`${percentual.toFixed(2)} %`)
    }

}

PercentualMensal()