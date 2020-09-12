function Calculadora(a,b,c){
    
    switch(a,b,c){
        case c = "+":
            return a+b
        case c = "-":
            return a-b
        case c = "*":
            return a*b
        case c = "/":
            return a/b
        default:
            return "Operação Invalida"
    }
    
    }
    
    console.log(Calculadora(2,3,"+"))
    console.log(Calculadora(8,4,"-"))
    console.log(Calculadora(5,5,"*"))
    console.log(Calculadora(10,5,"/"))
    console.log(Calculadora(60,3,"~"))