function trocaVetor(vetorA,vetorB) {
    if(vetorA.length == vetorB.length){
        for(let i = 0; i<vetorA.length; i++){
        console.log(vetorA[i] = vetorA[i] + vetorB[i])
        console.log(vetorB[i] = vetorA[i] - vetorB[i])
        console.log(vetorA[i] = vetorA[i] - vetorB[i])
    }
} else {
    return ' Vetores de tamanhos diferentes'
}

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaVetor(vetorA, vetorB)