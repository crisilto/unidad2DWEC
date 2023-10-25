let diasSemana = [
    " Lunes",
    " Martes",
    " Miércoles",
    " Jueves",
    " Viernes",
    " Sábado",
    " Domingo"
];

//Lo podemos mostrar directamente en el documento HTML
document.getElementById("diasSemana").innerHTML = `Días de la semana: ${diasSemana}`;

//O lo podemos mostrar en la consola del navegador a través del documento HTML
//Con foreach
diasSemana.forEach(dia => {
    console.log(dia);
});

//Con for
for (let i = 0; i < diasSemana.length; i++) {
    console.log(diasSemana[i]);
}