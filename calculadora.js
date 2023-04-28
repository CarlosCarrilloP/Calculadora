// Obtener elementos del DOM
const screen = document.querySelector(".screen");
const clearButton = document.querySelector(".container input[value='C']");
const operator = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".container input[value='=']");
const btn = document.querySelectorAll('.btn');

//Bucle que recorre la clase .btn detectando cada click
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
      screen.value += btn[i].value;
    });
  }
//Bucle que recorre la clase .operator detectando cada click
  for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', () => {
      screen.value += operator[i].value;
    });
  }
//Funcion que borra el .screen
clearButton.addEventListener('click', () => {
  screen.value = "";
});
//Funcion igual que devuelve el resultado
equalButton.addEventListener('click', () => {
  screen.value = eval(screen.value);
});
