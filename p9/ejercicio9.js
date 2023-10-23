let notaTrimestre;
let nota1;
let nota2;
let recuperacion;

while(true){
    nota1 = prompt("Nota del primer control: ");
    nota1 = parseFloat(nota1);
    nota2 = prompt("Nota del segundo control: ");
    nota2 = parseFloat(nota2);
    if(isNaN(nota1) || isNaN(nota2)){
        alert("Por favor, introduce un número válido.");
        break;
    }
    notaTrimestre = (nota1 + nota2)/2;
    if(notaTrimestre >= 5){
        alert(`Tu nota de Porgramación es: ${notaTrimestre}`)
    }else{
        recuperacion = prompt("¿Cuál ha sido el resultado de la recuperación? (apto/no apto");
        if(recuperacion === "no apto"){
            alert("Tu nota de Porgramación es 1");
        }else if(recuperacion === "apto"){
            alert("Tu nota de Porgramación es 5");
        }else{
            alert(`Por favor, introduce "apto" o "no apto"`);
            continue;
        }
    }
    break;
}

document.getElementById("notaTrimestre").innerHTML = `Tu nota del trimestre es: ${notaTrimestre}`;