// ENTRADA DE DATOS: Pedimos al usuario que ingrese la distancia y la velocidad promedio
let distancia_recorrida = parseFloat(prompt("Ingrese la distancia recorrida en kilómetros:"));
let velocidad_promedio = parseFloat(prompt("Ingrese la velocidad promedio en kilómetros por hora (km/h):"));
// PROCESO: Calculamos el tiempo estimado del viaje
let tiempo_viaje = distancia_recorrida / velocidad_promedio;
// SALIDA: Mostramos el tiempo estimado del viaje al usuario
console.log("El tiempo estimado del viaje es: " +tiempo_viaje+ " horas.");