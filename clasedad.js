

function edad(numero) {
    if(numero < 13) {
        return "niño";

    } else if(numero >= 13 && numero <= 18) {
        return "adolescente";

    } else if(numero >= 19 && numero <= 64) {
        return "adulto";

    } else {
        return "mayor";

    }
}

console.log("3--> " + edad(3));
console.log("17--> " + edad(17));
console.log("54--> " + edad(54));
console.log("643--> " + edad(643));

