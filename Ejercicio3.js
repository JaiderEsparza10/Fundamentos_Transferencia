// DATOS DE ENTRADA: Pedimos al usuario que ingrese las edades de cuatro personas
let edad_primera_persona = parseInt(prompt("Ingrese la edad de la primera persona:"));
let edad_segunda_persona = parseInt(prompt("Ingrese la edad de la segunda persona:")); 
let edad_tercera_persona = parseInt(prompt("Ingrese la edad de la tercera persona:"));
let edad_cuarta_persona = parseInt(prompt("Ingrese la edad de la cuarta persona:"));
// PROCESO: Calculamos la edad promedio de las cuatro personas
let edad_promedio = (edad_primera_persona + edad_segunda_persona + edad_tercera_persona + edad_cuarta_persona) / 4;
// SALIDA: Mostramos la edad promedio al usuario
console.log("La edad promedio de las cuatro personas es: " + edad_promedio + " años.");