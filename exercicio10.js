function verificarDivisao(num){
    
    let numero = num%3
    if(numero==0){
        return true
    }else {
        return false
    }

    
}

console.log(verificarDivisao(27))