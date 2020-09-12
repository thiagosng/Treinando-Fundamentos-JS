function jurosSimples(ci,tj,ta){

    monApli = ci + (ci * tj * ta)
    console.log(monApli)
}

jurosSimples(1200,0.025,10)

function jurosCompostos(ci,tj,ta){
    monApli = ci*(1+tj)**ta
    console.log(monApli.toFixed(2))
}

jurosCompostos(2000,0.02,12)