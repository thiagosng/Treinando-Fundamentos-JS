function ComprarCarro(expr){
    
    switch(expr){
        case "Hatch":
            return "Compra realizada com sucesso !"
        case "Sedan":
            return "Tem certeza que não prefere este modelo?"
        case "Motocicleta":
            return "Tem certeza que não prefere este modelo?"
        case "Caminhonete":
            return "Tem certeza que não prefere este modelo?"
        default:
            return "Opção Invalida, não temos essa fruta"
    }
    
    }
    
    console.log(ComprarCarro("Sedan"))
    console.log(ComprarCarro("Hatch"))
 