function FrutaEscolhida(expr){
    
    switch(expr){
        case "Maça":
            return "Não vendemos esta fruta aqui"
        case "Kiwi":
            return "Estamos com escassez de Kiwi"
        case "Melancia":
            return "Aqui está, são 3 reais o quilo"
        default:
            return "Opção Invalida, não temos essa fruta"
    }
    
    }
    
    console.log(FrutaEscolhida("Maça"))
    console.log(FrutaEscolhida("Melancia"))
 