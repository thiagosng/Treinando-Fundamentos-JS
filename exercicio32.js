function calcularMedia(valor){
    let total = 0
    for(let i=0;i<valor.length;i++){
        total += valor[i]
        
    }
    return total/valor.length
}

valor = [5,5,4,4,4,6,2]

console.log(calcularMedia(valor))