function calcularAno(ano){
    return ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0 ? 'E bissexto' : 'Nao e bissexto'
}

console.log(calcularAno(1900))
console.log(calcularAno(1940))
console.log(calcularAno(2020))
console.log(calcularAno(2024))
console.log(calcularAno(2976))
console.log(calcularAno(2018))
