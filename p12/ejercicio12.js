//Lo podemos mostrar directamente en el documento HTML
let numero;

function calcularFactorial(){
    numero = prompt("Introduce un número entero positivo para conocer su factorial: ");
    numero = parseFloat(numero);

    if(isNaN(numero) || !Number.isInteger(numero) || numero < 0){
        document.getElementById("resultado").innerHTML = "Por favor, introduce un número entero positivo.";
        return;
    }

    let factorial = 1; 

    for(let i = 1; i <= numero; i++){
        factorial *= i;
    }

    document.getElementById("resultado").innerHTML = `El factorial de ${numero} es ${factorial}`;
}
calcularFactorial();

//O lo podríamos haber mostrado directamente con alert()
//Las dos líneas de código "document.getElement..." serían alert() sin más 
