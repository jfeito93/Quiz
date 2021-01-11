// results.html Página para mostrar resultado del quiz

const usuario = document.getElementById("usuario");
const botonGuardado = document.getElementById("botonGuardado");
const resultadoFinal = document.getElementById("resultadoFinal");
const puntuacionUltima = localStorage.getItem("puntuacionUltima");
const puntuacionMayor =
  JSON.parse(localStorage.getItem("puntuacionMayor")) || [];

const puntuacionMayorLimite = 3;

resultadoFinal.innerText = puntuacionUltima;

usuario.addEventListener("keyup", () => {
  botonGuardado.disabled = !usuario.value;
});

guardarPuntuacion = (e) => {
  console.log("Resultados guardados");
  e.preventDefault();

  const puntuacion = {
    puntuacion: Math.floor(Math.random() * 100),
    nombre: usuario.value,
  };
  puntuacionMayor.push(puntuacion);
  puntuacionMayor.sort((a, b) => b.puntuacion - a.puntuacion);
  puntuacionMayor.splice(3);

  localStorage.setItem('puntuacionMayor', JSON.stringify(puntuacionMayor));
//   window.location.assign("./index.html");  **DEJAR ESTO Y QUITAR LA OPCION DEL BOTON QUE LLEVA A INICIOO CAMBIAR EL LLEVADO A INICIO POR UN LLEVADO A LA PAGINA DE MAYORES RESULTADOS Y EN ESA PONER UN BOTON DE VUELTA AL JUEGO**
};
