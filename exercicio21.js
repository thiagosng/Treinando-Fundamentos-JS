function valorPlano(idade){

    let valorPlanoSaude = 100
    if(idade < 10){
        return valorPlanoSaude +80
    }else if(idade >= 10 && idade <= 30){
        return valorPlanoSaude +50
    }else if(idade > 30 && idade <= 60){
        return valorPlanoSaude +95
    }else{
        return valorPlanoSaude +130
    }

}
console.log(valorPlano(100))