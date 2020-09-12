function Cardapio(a,b){
    
    switch(a,b){
        case 100:
            return a * 3
        case 200:
            return a * 4
        case 300:
            return a * 5.50
        case 400:
            return a * 7.50
        case 500:
            return a * 3.50
        case 600:
            return a * 2.80
        default:
            return "Operação Invalida"
    }
    
    }
    
    console.log(Cardapio(5,100))
    console.log(Cardapio(3,200))
    console.log(Cardapio(7,300))
    console.log(Cardapio(8,400))
    console.log(Cardapio(2,500))
    console.log(Cardapio(1,600))