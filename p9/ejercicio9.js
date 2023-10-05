let notaTrimestre;
let nota1;
let nota2;
let recuperacion;

while(true){
    nota1 = prompt("Introduce la nota del primer examen: ");
    nota1 = parseFloat(nota1);
    nota2 = prompt("Introduce la nota del segundo examen: ");
    nota2 = parseFloat(nota2);
    if(isNaN(nota1) || isNaN(nota2)){
        alert("Por favor, introduce un número válido.");
        break;
    }
    notaTrimestre = (nota1 + nota2)/2;
    if(notaTrimestre >= 5){
        alert(`Estás aprobado! Nota Trimestre: ${notaTrimestre}`)
    }else{
        recuperacion = prompt("¿Cuál ha sido el resultado de la recuperación? (apto/no apto");
        if(recuperacion === "no apto"){
            alert("Tu nota es un 1");
        }else if(recuperacion === "apto"){
            alert("Tu nota es un 5");
        }else{
            alert(`Por favor, introduce "apto" o "no apto"`);
            continue;
        }
    }
    break;
}

document.getElementById("notaTrimestre").innerHTML = `Tu nota del trimestre es: ${notaTrimestre}`;