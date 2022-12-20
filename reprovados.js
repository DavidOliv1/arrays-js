// const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
// const medias = [7, 4.5, 8, 7.5];

// let alunosReprovados = null;
// alunos.forEach((_, i) => {
//   if (medias[i] < 7) {
//     alunosReprovados = alunos.slice(i, i + 1);
//   }
// });

// console.log(alunosReprovados);

// --------------------------------------------------------------------------

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const alunosReprovados = alunos.filter((_, i) => {
  return medias[i] < 7;
});

console.log(alunosReprovados);
