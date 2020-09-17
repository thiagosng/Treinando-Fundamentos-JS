function vetorNotas(vetorN){
    let conceitos = []
    for(let i=0; i<vetorN.length; i++){
    if(vetorN[i]<= 4.9){
        conceitos.push('D')
    }else if(vetorN[i] >= 5 && vetorN[i] <= 6.9){
        conceitos.push('C')
    }else if(vetorN[i] >= 7 && vetorN[i] <= 8.9){
        conceitos.push('B')
    }else if(vetorN[i] >= 9 && vetorN[i] <=10){
        conceitos.push('A')
    }else{
        conceitos.push("Nota Invalida")
    }
}
    return conceitos
}
let vetorN = [1,8,6,4,10,11]
let vetorConceitos = vetorNotas(vetorN)
console.log(vetorConceitos)