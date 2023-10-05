let suma = 0;
let numero;

while(true){
    numero = prompt("Introduce un número (Introduce 0 para finalizar): ");
    numero = parseFloat(numero);
    if (isNaN(numero)){
        alert("Por favor, ingresa un número válido.");
        continue;
    }
    if (numero === 0){
        break;
    }
    suma += numero;
}
alert(`La suma de todos los números introducidos es: ${suma}`)

document.getElementById("suma").innerHTML = `La suma de tus números es ${suma}`;
