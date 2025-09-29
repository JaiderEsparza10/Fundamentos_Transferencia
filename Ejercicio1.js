// DATOS DE ENTRADA DEL PROGRAMA 
let nombre_producto = prompt("Ingrese el nombre del producto:");
let precio_producto = parseFloat(prompt("Ingrese el precio del producto:"));
let cantidad_producto = parseInt(prompt("Ingrese la cantidad del producto:"));
// PROCESO EN DONDE SE CALCULA EL TOTAL DE LA COMPRA
let total_pago = precio_producto * cantidad_producto;
// SALIDA, DONDE SE MUESTRA EL RESULTADO Y EL PAGO TOTAL DE LA COMPRA
console.log("El total a pagar por " + cantidad_producto + " de " + nombre_producto + " es: $" + total_pago.toFixed(2));