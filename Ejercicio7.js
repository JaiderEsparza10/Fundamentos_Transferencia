// ENTRADA DE DATOS: Pedimos al usuario que ingrese el precio del producto
let precio_producto = parseFloat(prompt("Ingrese el precio del producto:"));
// PROCESO: Calculamos el precio final con un descuento del 10%
let precio_descuento = precio_producto * 0.1;
let precio_final = precio_producto - precio_descuento;
// SALIDA: Mostramos el precio final al usuario
console.log("El precio final del producto con el descuento aplicado es: $" + precio_final);