function calcularAnuidade(expr,valorAnuidade){

    
    switch(expr){
        case 1:
            return valorAnuidade
            break
        case 2:
            return valorAnuidade *(1+0.05)
            break
        case 3:
            return valorAnuidade *(1+0.05)**2
            break
        case 4:
            return valorAnuidade *(1+0.05)**3
            break
        case 5:
            return valorAnuidade *(1+0.05)**4
            break
        case 6:
            return valorAnuidade *(1+0.05)**5
            break
        case 7:
            return valorAnuidade *(1+0.05)**6
            break
        case 8:
            return valorAnuidade *(1+0.05)**7
            break
        case 9:
            return valorAnuidade *(1+0.05)**8
            break
        case 10:
            return valorAnuidade *(1+0.05)**9
            break
        case 11:
            return valorAnuidade *(1+0.05)**10
            break
        case 12:
            return valorAnuidade *(1+0.05)**11
            break
        
    }
}
console.log(calcularAnuidade(12,100))