// Obtener elementos del DOM
const screen = document.querySelector(".screen");
const clearButton = document.querySelector(".container input[value='C']");
const clearOne = document.querySelector(".container input[value='⇽']");
const operator = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".container input[value='=']");
const btn = document.querySelectorAll(".btn");

const sumButton = document.querySelector(".container input[value='+']");
const subtractButton = document.querySelector(".container input[value='-']");
const multiplyButton = document.querySelector(".container input[value='*']");
const divideButton = document.querySelector(".container input[value='/']");
const raizButton = document.querySelector(".container input[value='√']");
const cuadradoButton = document.querySelector(".container input[value='\u00B2']");

sumButton.addEventListener("click", sumar);
subtractButton.addEventListener("click", restar);
multiplyButton.addEventListener("click", multiplicar);
divideButton.addEventListener("click", dividir);
raizButton.addEventListener("click", raizCuadrada);
cuadradoButton.addEventListener("click", calcularCuadrado);

//Bucle que recorre la clase .btn detectando cada click
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    screen.value += btn[i].value;
  });
}
//Bucle que recorre la clase .operator detectando cada click
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", () => {
    screen.value += operator[i].value;
  });
}
//Funcion que borra el .screen
clearButton.addEventListener("click", () => {
  screen.value = "";
});

//Funcion que borra un numero en .screen
clearOne.addEventListener("click", () => {
  screen.value = screen.value.slice(0, -1);
});

///////////////Funciones matematicas////////
//Funcion suma
function sumar() {
  const valorActual = parseFloat(screen.value);
  const valores = screen.value.split("+");
  let resultado = 0;
  for (let i = 0; i < valores.length; i++) {
    resultado += parseFloat(valores[i]);
  }
  screen.value = resultado; // Se asigna el resultado a la pantalla
}

//Funcion resta
function restar() {
  const valorActual = parseFloat(screen.value);
  const valores = screen.value.split("-");
  let resultado = parseFloat(valores[0]); // Inicializamos el resultado con el primer número
  for (let i = 1; i < valores.length; i++) {
    // Empezamos en 1 para evitar el primer número que ya está en el resultado
    resultado -= parseFloat(valores[i]);
  }
  screen.value = resultado; // Se asigna el resultado a la pantalla
}

//Funcion multiplicacion
function multiplicar() {
  const screen = document.getElementsByClassName("screen"); // Se obtiene el elemento con nombre de la clase 'screen'
  const valores = screen.value.split("*"); // Se separan los valores de la pantalla por el operador *
  let resultado = 1;

  for (let i = 0; i < valores.length; i++) {
    const valorActual = parseFloat(valores[i]); // Se convierte cada valor a número
    resultado *= valorActual; // Se realiza la multiplicación de cada valor
  }

  screen.value = resultado; // Se asigna el resultado a la pantalla
}

//Funcion division
function dividir() {
  const screen = document.getElementsByClassName("screen"); // Se obtiene el elemento con nombre de clase 'screen'
  const valores = screen.value.split("/"); // Se separan los valores de la pantalla por el operador /
  let resultado = parseFloat(valores[0]); // Inicializamos el resultado con el primer número

  for (let i = 1; i < valores.length; i++) {
    // Empezamos en 1 para evitar el primer número que ya está en el resultado
    const valorActual = parseFloat(valores[i]); // Se convierte cada valor a número
    resultado /= valorActual; // Se realiza la división de cada valor
  }

  screen.value = resultado; // Se asigna el resultado a la pantalla
}

//Funcion Raiz cuadrada

function raizCuadrada() {
  const screen = document.getElementsByClassName("screen"); // Se obtiene el primer elemento con nombre de clase 'screen'
  const valores = screen.value.substring(1); // Se toma la cadena a partir del segundo caracter (posición 1)
  let resultado = Math.sqrt(parseFloat(valores)); // Se calcula la raíz cuadrada del valor numérico
  screen.value = resultado; // Se asigna el resultado a la pantalla
}

//Funcion Cuadrado
function calcularCuadrado() {
  const screen = document.getElementsByClassName("screen"); // Se obtiene el primer elemento con nombre de clase 'screen'
  const valores = screen.value.substring(0);
  let resultado = Math.pow(valores, 2);
  screen.value = resultado; // Se asigna el resultado a la pantalla
}

//Funcion igual que devuelve el resultado
equalButton.addEventListener("click", () => {
  const valorActual = parseFloat(screen.value);
  const valoresSuma = screen.value.split("+");
  const valoresResta = screen.value.split("-");
  const valoresMultiplicacion = screen.value.split("*");
  const valoresDivision = screen.value.split("/");
  const valoresRaiz = screen.value.split("√");
  const valoresCuadrado = screen.value.split("\u00B2");

  let resultado = 0;
  if (valoresSuma.length > 1) {
    // Realizamos una suma
    for (let i = 0; i < valoresSuma.length; i++) {
      resultado += parseFloat(valoresSuma[i]);
    }
  } else if (valoresResta.length > 1) {
    // Realizamos una resta
    resultado = parseFloat(valoresResta[0]);
    for (let i = 1; i < valoresResta.length; i++) {
      resultado -= parseFloat(valoresResta[i]);
    }
  } else if (valoresMultiplicacion.length > 1) {
    // Realizamos una multiplicación
    resultado = 1; // Inicializamos en 1 para que la primera multiplicación no sea 0
    for (let i = 0; i < valoresMultiplicacion.length; i++) {
      resultado *= parseFloat(valoresMultiplicacion[i]);
    }
  } else if (valoresDivision.length > 1) {
    // Realizamos una división
    resultado = parseFloat(valoresDivision[0]);
    for (let i = 1; i < valoresDivision.length; i++) {
      resultado /= parseFloat(valoresDivision[i]);
    }
  } else if (valoresRaiz.length > 1) {
    // Realizamos una raíz cuadrada
    const valorRaiz = parseFloat(valoresRaiz[valoresRaiz.length - 1]);
    if (valorRaiz >= 0) {
      resultado = Math.sqrt(valorRaiz);
    } else {
      resultado = "Error";
    }
  } else if (valoresCuadrado.length > 1) {
    resultado = parseFloat(valoresCuadrado[0]) ** 2;
  } else {
    // No hay operación a realizar
    resultado = valorActual;
  }
  screen.value = resultado;
});
