const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

const media = listaDeAlunosEMedias[1];

function exibeNomeENota(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    // const alunos = listaDeAlunosEMedias[0];
    // const medias = listaDeAlunosEMedias[1];

    const [alunos, medias] = listaDeAlunosEMedias;

    const indice = alunos.indexOf(aluno);

    const mediaDoAluno = medias[indice];

    console.log(
      `${aluno} está presente na lista. Sua média é: ${mediaDoAluno}`
    );
  } else {
    console.log("Aluno não encontrado!");
  }
}

exibeNomeENota("Ana");
