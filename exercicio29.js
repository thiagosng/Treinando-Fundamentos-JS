function percorrerFor(dentroFora){


    let dentro = 0
    let fora = 0

    for(let i = 0; i < dentroFora.length; i++){
        if(dentroFora[i] >= 10 && dentroFora[i]<= 20){
            dentro++
        }else{
            fora++
        }
    }
    console.log(`Dentro do intervalo ${dentro}, fora do intervalor ${fora}`)
}

n = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
percorrerFor(n)