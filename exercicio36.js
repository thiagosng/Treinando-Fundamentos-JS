let vetorNum = [1,2,3,4,5]

function vetorNumInt(vetorNum,numInt){
    let vetorResult = []
    vetorNum.forEach(elemento => {
        vetorResult.push(elemento * numInt)
    });
    return vetorResult
}

console.log(vetorNumInt(vetorNum,5))