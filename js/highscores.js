// results.html Página para mostrar resultado del quiz

const puntuacionMayorLista = document.getElementById("puntuacionMayorLista");
const puntuacionMayor =
  JSON.parse(localStorage.getItem("puntuacionMayor")) || [];

puntuacionMayorLista.innerHTML=
    
    puntuacionMayor.map(puntuacion => {
        return `<li class="puntuacionMayor">${puntuacion.nombre}: ${puntuacion.puntuacion}</li>`;
    }).join("");
