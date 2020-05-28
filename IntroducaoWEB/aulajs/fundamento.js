// Criar programa que calcula media das notas 
// entre alunos e envia mensagem do calculo da media

//Declarando Variáveis

const aluno01 = "Tiago"
const notaAluno1 = 9.2

const aluno02 = "Felipe"
const notaAluno2 = 3.1

const aluno03 = "Gabriel"
const notaAluno3 = 5.3

// Chamar Variáveis
const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3

// Se a media for maior que 5, mostrar uma mensagem, por meio de uma condicional
if (media > 5) {
    console.log(`A nota foi ${media.toFixed(2)} Parabéns.`)
} else {
    console.log(`A média ${media.toFixed(2)} é menor que 5`)
}