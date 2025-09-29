// ENTRADA DE DATOS: Le pedimos al usuario que ingrese los kilometros recorridos y cuanto gastó
let cantidad_kilometros = parseFloat(prompt("Ingrese la cantidad de kilómetros recorridos:"));
let consumo_por_km = parseFloat(prompt("Ingrese el consumo de combustible por kilómetro (litros/km):"));
// PROCESO: Calculamos la cantidad de litros consumidos
let litros_consumidos = cantidad_kilometros * consumo_por_km;
// SALIDA: Mostramos la cantidad de litros consumidos al usuario
console.log("La cantidad de litros de combustible consumidos es: " + litros_consumidos.toFixed(2) + " litros.");