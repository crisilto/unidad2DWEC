//Lo podemos mostrar directamente en el documento HTML
let n = 320;
let resultado = "";
do {
    resultado += n + "<br>";
    n -= 20;
} while (n >= 160);
document.getElementById("resultado").innerHTML = resultado;

//O lo podemos mostrar en la consola del navegador a través del documento HTML
let i = 320;
do {
    console.log(i);
    i -= 20;
} while (i >= 160);