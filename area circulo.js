radio_circulo=45;
function ac(number){
let total= radio_circulo * Math.PI * radio_circulo;
return total;
}
total_area=ac(3);
console.log("El area de radio 45 es " + total_area);