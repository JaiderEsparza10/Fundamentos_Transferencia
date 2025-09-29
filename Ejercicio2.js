// DATOS DE ENTRADA: le pedimos al usurio que ingrese las horas trabajadas y el valor por hora
let horas_trabajadas = parseFloat(prompt("Ingrese el número de horas trabajadas en la semana:"));
let valor_hora = parseFloat(prompt("Ingrese el valor por hora trabajada:"));
// PROCESO: calculamos el salario semanal
let salario_semanal = horas_trabajadas * valor_hora;
// SALIDA: mostramos el salario semanal al usuario
console.log("El salario semanal es: $" + salario_semanal);