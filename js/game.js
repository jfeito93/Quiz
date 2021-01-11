// question.html SPA. Página para renderizar las 10 distintas preguntas

const pregunta = document.getElementById("pregunta");
const elecciones = Array.from(document.getElementsByClassName("eleccionTexto"));
console.log(elecciones);
const preguntasContadorTexto = document.getElementById("preguntasContador");
const puntuacionTexto = document.getElementById("puntuacion");

let preguntaActual = {};
let aceptarRespuesta = true;
let puntuacion = 0;
let preguntasContador = 0;
let preguntasRestantes = [];

let preguntas = [

    // ** FETCH A API. ¡¡¡NO FUNCIONA!!!**
/*
[];

fetch(
  'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
)
  .then((res) => {
    return res.json();
  })
  .then((loadedQuestions) => {
    questions = loadedQuestions.results.map((loadedQuestion) => {
      const formattedQuestion = {
        question: loadedQuestion.question,
      };

      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );

      answerChoices.forEach((choice, index) => {
        formattedQuestion["eleccion" + (index + 1)] = choice;
      });

      return formattedQuestion;
    });
    startGame();
  })
  .catch((err) => {
    console.error(err);
  });
*/

// ** FETCH A PREGUNTAS.JSON ¡¡¡NO FUNCIONA!!!**
/*
 fetch('questions.json')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });
*/

// **SIN FETCH**

  // pregunta 1
  {
    pregunta: "Inside which HTML element do we put the JavaScript??",
    eleccion1: "<script>",
    eleccion2: "<javascript>",
    eleccion3: "<js>",
    eleccion4: "<scripting>",
    respuesta: 1,
  },
  // pregunta 2
  {
    pregunta:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    eleccion1: "<script href='xxx.js'>",
    eleccion2: "<script name='xxx.js'>",
    eleccion3: "<script src='xxx.js'>",
    eleccion4: "<script file='xxx.js'>",
    respuesta: 3,
  },
  // pregunta 3
  {
    pregunta: "How do you write 'Hello World' in an alert box?",
    eleccion1: "msgBox('Hello World');",
    eleccion2: "alertBox('Hello World');",
    eleccion3: "msg('Hello World');",
    eleccion4: "alert('Hello World');",
    respuesta: 4,
  },

// **PARA LLEGAR A LAS 10 PREGUNTAS SIN FETCH**
/*
  // pregunta 4
  {
    pregunta: "How do you write 'Hello World' in an alert box?",
    eleccion1: "msgBox('Hello World');",
    eleccion2: "alertBox('Hello World');",
    eleccion3: "msg('Hello World');",
    eleccion4: "alert('Hello World');",
    respuesta: 4,
  },
  // pregunta 5
  {
    pregunta: "How do you write 'Hello World' in an alert box?",
    eleccion1: "msgBox('Hello World');",
    eleccion2: "alertBox('Hello World');",
    eleccion3: "msg('Hello World');",
    eleccion4: "alert('Hello World');",
    respuesta: 4,
  },
  // pregunta 6
  {
    pregunta: "How do you write 'Hello World' in an alert box?",
    eleccion1: "msgBox('Hello World');",
    eleccion2: "alertBox('Hello World');",
    eleccion3: "msg('Hello World');",
    eleccion4: "alert('Hello World');",
    respuesta: 4,
  },
  // pregunta 7
  {
    pregunta: "How do you write 'Hello World' in an alert box?",
    eleccion1: "msgBox('Hello World');",
    eleccion2: "alertBox('Hello World');",
    eleccion3: "msg('Hello World');",
    eleccion4: "alert('Hello World');",
    respuesta: 4,
  },
  // pregunta 8
  {
    pregunta: "How do you write 'Hello World' in an alert box?",
    eleccion1: "msgBox('Hello World');",
    eleccion2: "alertBox('Hello World');",
    eleccion3: "msg('Hello World');",
    eleccion4: "alert('Hello World');",
    respuesta: 4,
  },
  // pregunta 9
  {
    pregunta: "How do you write 'Hello World' in an alert box?",
    eleccion1: "msgBox('Hello World');",
    eleccion2: "alertBox('Hello World');",
    eleccion3: "msg('Hello World');",
    eleccion4: "alert('Hello World');",
    respuesta: 4,
  },
  // pregunta 10
  {
    pregunta: "How do you write 'Hello World' in an alert box?",
    eleccion1: "msgBox('Hello World');",
    eleccion2: "alertBox('Hello World');",
    eleccion3: "msg('Hello World');",
    eleccion4: "alert('Hello World');",
    respuesta: 4,
  },
*/

];

//CONSTANTS
const respuestaCorrecta = 10;
const preguntasLimite = 3;

quizComienzo = () => {
  preguntasContador = 0;
  puntuacion = 0;
  preguntasRestantes = [...preguntas];
  console.log();
  preguntaNueva();
};

preguntaNueva = () => {
  if (preguntasRestantes.length === 0 || preguntasContador >= preguntasLimite) {
    localStorage.setItem("puntuacionUltima", puntuacion);
    return window.location.assign("./end.html");
  }

  preguntasContador++;
  preguntasContadorTexto.innerText = `${preguntasContador}/${preguntasLimite}`;
  /*
  preguntasContadorTexto.innerText = preguntasContador + "/" + preguntasLimite;
  */

  const preguntasIndice = Math.floor(Math.random() * preguntasRestantes.length);
  preguntaActual = preguntasRestantes[preguntasIndice];
  pregunta.innerText = preguntaActual.pregunta;

  elecciones.forEach((eleccion) => {
    const numero = eleccion.dataset["numero"];
    eleccion.innerText = preguntaActual["eleccion" + numero];
  });

  preguntasRestantes.splice(preguntasIndice, 1);

  aceptarRespuesta = true;
};

elecciones.forEach((eleccion) => {
  eleccion.addEventListener("click", (e) => {
    if (!aceptarRespuesta) return;

    aceptarRespuesta = false;
    const eleccionElegida = e.target;
    const respuestaElegida = eleccionElegida.dataset["numero"];

    /*
        const resultadoRespuesta = 'fallo';
        if (respuestaElegida == preguntaActual.respuesta) {
            resultadoRespuesta = 'acierto';
        }
    */
    const resultadoRespuesta =
      respuestaElegida == preguntaActual.respuesta ? "acierto" : "fallo";

    if (resultadoRespuesta === "acierto") {
      aumentoPuntuacion(respuestaCorrecta);
    }

    eleccionElegida.parentElement.classList.add(resultadoRespuesta);

    setTimeout(() => {
      eleccionElegida.parentElement.classList.remove(resultadoRespuesta);
      preguntaNueva();
    }, 1000);

    // console.log();
  });
});

aumentoPuntuacion = (numero) => {
  puntuacion += numero;
  puntuacionTexto.innerText = puntuacion;
};

quizComienzo();
