let numero = prompt("Dime un número del 1 al 7 y te diré su día de la semana correspondiente:");
numero = parseFloat(numero);

if (isNaN(numero) || numero < 1 || numero > 7) {
    alert("Por favor, introduce un número válido (del 1 al 7)");
} else {
    let diaSemana;
    switch (numero) {
        case 1:
            diaSemana = "Lunes";
            break;
        case 2:
            diaSemana = "Martes";
            break;
        case 3:
            diaSemana = "Miércoles";
            break;
        case 4:
            diaSemana = "Jueves";
            break;
        case 5:
            diaSemana = "Viernes";
            break;
        case 6:
            diaSemana = "Sábado";
            break;
        default:
            diaSemana = "Domingo";
            break;
    }
    document.getElementById("dia").innerHTML = `El día ${numero} es ${diaSemana}`;
}
