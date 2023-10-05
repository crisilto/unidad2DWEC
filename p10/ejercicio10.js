//Lo podemos mostrar directamente en el documento HTML
let multiplos = "";
for (let i = 0; i <= 100; i += 5) {
    multiplos += `${i}, `;
}
multiplos = multiplos.slice(0, -2);
document.getElementById("multiplos").innerHTML = `Múltiplos de 5, de 0 a 100: ${multiplos}`;

//O lo podemos mostrar en la consola del navegador a través del documento HTML
for(let i=0; i<=100; i+=5){
    console.log(i);
}


