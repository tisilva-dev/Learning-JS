// Criar programa que calcula media das notas 
// entre alunos e envia mensagem do calculo da media

//Declarando Variáveis

const aluno01 = "Tiago"
const notaAluno01 = 9.2

const aluno02 = "Felipe"
const notaAluno02 = 3.1

const aluno03 = "Gabriel"
const notaAluno03 = 5.3

// Chamar Variáveis
const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// Se a media for maior que 5, mostrar uma mensagem, por meio de uma condicional
if (media > 5) {
    console.log(`A nota foi ${media.toFixed(2)} Parabéns.`)
} else {
    console.log(`A média ${media.toFixed(2)} é menor que 5`)
}