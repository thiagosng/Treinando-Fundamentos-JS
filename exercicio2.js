function triangulo (a,b,c){
    if(a == b && a == c){
        console.log("Equilatero")
    }else if(a==b || a==c || b == c){
        console.log("Isosceles")
    }else{
        console.log("Escaleno")
    }
}

triangulo(3,7,5)