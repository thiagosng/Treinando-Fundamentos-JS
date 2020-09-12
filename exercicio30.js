function maiorMenor(numInt){

    let menor 
    let maior

    for(let i=0; i < numInt.length; i++){
        
        if(menor === undefined && maior === undefined){
            menor = numInt[i]
            maior = numInt[i]
        }else{
            if(numInt[i] < menor){
                menor = numInt[i]
            }
            if(numInt[i] > maior){
                maior = numInt[i]
            }
        } 
        
    }
    console.log(`Menor numero ${menor}, maior numero ${maior}`)
}

n = [5,2,3,1,4,5,6,7,8,9,50]

maiorMenor(n)