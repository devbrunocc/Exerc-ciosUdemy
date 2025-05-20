function imprimirSoma (a, b) {
    console.log(a + b)
}

console.log(imprimirSoma(5, 6));

function returnSoma (a, b=5) {
    return a+b;
}
console.log(returnSoma(2))