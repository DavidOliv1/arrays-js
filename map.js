// const notas = [10, 9.5, 8, 7, 6];

// notas.forEach((nota) => {
//   notas.splice(notas.indexOf(nota), 1, (nota += 1));
// });

// console.log(notas);

// -------------------------------------------------------------------

// const notas = [10, 9.5, 8, 7, 6];

// notas.forEach((nota, indice) => {
//   notas.splice(indice, 1, (nota += 1));
// });

// console.log(notas);

// -------------------------------------------------------------------

const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas);
