function Fibonacci() {

    let num1 = 0
    let num2 = 1
    let num3 = 0

    let input = 7

    while (input > num3) {
        num3 = num1 + num2
        num1 = num2
        num2 = num3
    }

    if (input == num3) {
        console.log("O número " + input + " percente a sequência de Fibonacci")
    } else {
        console.log("O número " + input + " não pertence a sequência de Fibonacci")
    }
}

Fibonacci()