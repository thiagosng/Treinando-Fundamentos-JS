function verificadorDeNotas(x)
{
    console.log("Nota : ", (x % 5) >= 2.5 ? parseInt(x / 5) * 5 + 5 : parseInt(x / 5) * 5)
    if(x < 38){
        console.log("Reprovado")
    }else if(x >= 38){
        console.log("Aprovado")
    }
    
}
verificadorDeNotas(59)


