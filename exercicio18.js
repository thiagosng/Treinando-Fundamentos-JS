function NumeroEx(expr){
    
    switch(expr){
        case 1:
            return "Um"
        case 2:
            return "Dois"
        case 3:
            return "Três"
        case 4:
            return "Quatro"
        case 5:
            return "Cinco"
        case 6:
            return "Seis"
        case 7:
            return "Sete"
        case 8:
            return "Oito"
        case 9:
            return "Nove"
        case 10:
            return "Dez"
        default:
            return "Opção invalida"
    }
    
    }
    
    console.log(NumeroEx(5))
    console.log(NumeroEx(1))
    console.log(NumeroEx(3))
    console.log(NumeroEx(7))
    console.log(NumeroEx(6))
    console.log(NumeroEx(4))
    console.log(NumeroEx(2))
    console.log(NumeroEx(8))
    console.log(NumeroEx(11))