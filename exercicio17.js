function AumentoSalario(a,b){
    
    switch(a,b){
        case b = "A":
            return a + (a*0.1)
        case b = "B":
            return a + (a*0.15)
        case b = "C":
            return a + (a*0.2)
        default:
            return "Operação Invalida"
    }
    
    }
    
    console.log(AumentoSalario(1000,"A"))
    console.log(AumentoSalario(1000,"B"))
    console.log(AumentoSalario(1000,"C"))
    console.log(AumentoSalario(1000,"D"))
    