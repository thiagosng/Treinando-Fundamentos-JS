function vetorInt(numNeg){

    let negativos = 0
    let positivos = 0

    for(let i = 0; i < numNeg.length; i++){
        if(numNeg[i] < 0){
            negativos++
        }else{
            positivos++
        }
        console.log(`Positivos ${positivos}, negativos ${negativos}`)
    }
}

n = [-1,-5,-8,-8,-10,5,4,8,9,6,3,2,7,4,-4]

vetorInt(n)