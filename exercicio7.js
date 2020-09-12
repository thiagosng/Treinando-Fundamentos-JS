function calcularBaskhara(ax2,bx,c){

    let res = []

    let calcDelta = (bx**2) - (4 * ax2 - c)

    if(calcDelta < 0){
        return "Delta é negativo"
    }

    let x1 = (-bx + Math.sqrt(calcDelta))/2*ax2 // Math.sqrt = raiz quadrada
    let x2 = (-bx - Math.sqrt(calcDelta))/2*ax2

    res.push(x1.toFixed(2)) // push armazena no array
    res.push(x2.toFixed(2))
    
    return res
}

console.log(calcularBaskhara(3,-5,12))
