//Declaramos las variables
let texto = "Hola Mundo";
let entero = 10;
let decimal = 1.5;

//Lo podemos mostrar directamente en el documento HTML
document.getElementById("valorTexto").innerHTML = `Texto: ${texto}`;
document.getElementById("valorEntero").innerHTML = `Entero: ${entero}`;
document.getElementById("valorDecimal").innerHTML = `Decimal: ${decimal}`;

//O lo podemos mostrar en la consola del navegador a través del documento HTML
console.log(`Texto: ${texto}`);
console.log(`Entero: ${entero}`);
console.log(`Decimal: ${decimal}`);