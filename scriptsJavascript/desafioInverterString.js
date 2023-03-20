const InverterString = str => {
    let invertida = ''

    for (let letra of str) {
        invertida = letra + invertida
    }
    return invertida
}


console.log(InverterString("Samuel"))