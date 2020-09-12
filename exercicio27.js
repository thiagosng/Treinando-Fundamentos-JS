function medir(alt1,tc1,alt2,tc2){
    if(alt1 == alt2){
        if(tc1 > tc2){
            return "A criança 1 ira ultrapassar a criança 2 em 1 ano"
        }else if(tc1 < tc2){
            return "A criança 2 ira ultrapassar a criança 1 em 1 ano"
        }else{
            return "As crianças tem a mesma altura e taxa de crescimento."
        }
    }else{
        if(alt1 > alt2){
            if(tc1 >= tc2){
                return "A criança 2 nunca ira ultrapassar a criança 1"
            }else{
                return calcularTempo(alt1,tc1,alt2,tc2)
            }
        }else{
            if(tc2 >= tc1){
                return "A criança 1 nunca ira ultrapassar a criança 2"
            }else{
                return calcularTempo(alt1,tc1,alt2,tc2)
            }
        }
    }
}

function calcularTempo(altMenor,tcMenor,altMaior,tcMaior){
    let anos = 0
    while(altMenor < altMaior){
        altMenor += tcMenor
        altMaior += tcMaior
        anos++
    }

    console.log(anos)
    return anos
}

console.log(medir(160,2,140,4));