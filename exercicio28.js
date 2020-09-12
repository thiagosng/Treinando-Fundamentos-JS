function imparPar(num){

    let contPar = 0
    let contImpar = 0
    
    for(let i = 0; i < num.length; i++){
    if(num[i]%2==0){
        contPar++
    }else{
        contImpar++
    }
}

    console.log(`${contPar} números pares e ${contImpar} números ímpares.`)

}

n = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
imparPar(n)