let num1 = 27;
let num2 = 47;
let resultado;

num1 < num2 ? resultado = `El número ${num1} es menor que el número ${num2}` : resultado = `El número ${num2} es menor que el número ${num1}`;

//Lo podemos mostrar directamente en el documento HTML
document.getElementById("numeroMenor").innerHTML = resultado;

//O lo podemos mostrar en la consola del navegador a través del documento HTML
console.log(resultado);