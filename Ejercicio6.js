// ENTRADA DE DATOS: Pedimos al usuario que ingrese un número de minutos
let numero_minutos = parseFloat(prompt("Ingrese el número de minutos:"));
// PROCESO: Convertimos los minutos a horas y minutos restantes
let numero_horas = numero_minutos / 60;
let minutos_restantes = numero_minutos % 60;
// SALIDA: Mostramos el resultado al usuario
console.log(numero_minutos + " minutos son " + numero_horas + " horas y " + minutos_restantes.toFixed(0) + " minutos.");