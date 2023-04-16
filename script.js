// arreglo para almacenar las respuestas del usuario
let respuestas = [];

// función para obtener las respuestas del usuario y almacenarlas en el arreglo
function respuesta(pregunta, opcion) {
  respuestas[pregunta] = parseInt(opcion.value);
}

// función para revisar las respuestas del usuario y calcular el grado de depresión
function revisar() {
  let sumaRespuestas = 0;
  for (let i = 0; i < respuestas.length; i++) {
    sumaRespuestas += respuestas[i];
  }
  let promedioRespuestas = sumaRespuestas / respuestas.length;

  let gradoDepresion = "";
  if (promedioRespuestas <= 1.5) {
    gradoDepresion = "No presenta síntomas de depresión, no chimbee bro esta melo";
  } else if (promedioRespuestas <= 2.5) {
    gradoDepresion = "Presenta síntomas leves de depresión, ojo con eso mi loco, quierete";
  } else if (promedioRespuestas <= 3.5) {
    gradoDepresion = "Presenta síntomas moderados de depresión, ya bro olvidala, vaya entrene";
  } else {
    gradoDepresion = "Presenta síntomas severos de depresión, bruh... ";
  }

  document.getElementById("resultado").innerHTML = gradoDepresion;
}

  