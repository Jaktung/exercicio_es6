"use strict";

var alunos = [{
  nome: "Luiz",
  nota: 8
}, {
  nome: "Roberto",
  nota: 4
}, {
  nome: "Ana",
  nota: 2
}, {
  nome: "Maria",
  nota: 6
}, {
  nome: "Lucas",
  nota: 10
}];
function filtraAlunosPorNota(alunos, media) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= media;
  });
}
var alunosAprovados = filtraAlunosPorNota(alunos, 6);
console.log(alunosAprovados);