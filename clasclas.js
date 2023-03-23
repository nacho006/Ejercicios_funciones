
function edadd(numero) {
 if(numero >= 90) {
        return "A";

    } else if(numero >= 80 && numero <= 89) {
        return "B";

    } else if(numero >= 70 && numero <= 79) {
        return "C";

    } else if(numero >= 60 && numero <= 69) {
        return "D";

    }else if(numero <= 60) {
        return "F";

    }else {
        console.log("esta fuera srry");

    }

}
console.log("92--> " + edadd(92));
console.log("82--> " + edadd(82));
console.log("72--> " + edadd(72));
console.log("62--> " + edadd(62));
console.log("52--> " + edadd(52));

