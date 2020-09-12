function calcularNota(cod,n1,n2,n3) {

    let notas = []
    notas.push(n1)
    notas.push(n2)
    notas.push(n3)
    notas.sort((a,b)=> a < b ? 1 : -1)

    let media = (n1*0.4 + n2*0.3 + n3*0.3)
    console.log(`Codigo do Aluno : ${cod} // Notas : ${n1}, ${n2}, ${n3} // ${media >= 5 ? 'Aprovado' : 'Reprovado'}`)
}

calcularNota(1,5,5,5)

