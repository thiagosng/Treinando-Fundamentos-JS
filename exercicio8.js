let stringNotas = "6, 7, 8, 4, 0, 10, 2, 1, 7.5"

function verificandoNotas(stringNotas){

    let notas = stringNotas.split(", ")
    let aprovados = 0
    let reprovados = 0
    

    for(let i = 0; i < notas.length; i++){
        if(notas[i] >= 6){
            
            aprovados++

        }else if(notas[i] < 6){
       
            reprovados++
        } 
    }
    return [aprovados, reprovados]
}

console.log(verificandoNotas(stringNotas))
