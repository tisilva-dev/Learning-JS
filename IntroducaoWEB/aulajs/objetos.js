// Criar programa que calcula media das notas 
// entre alunos e envia mensagem do calculo da media

// Declarando Objetos

const aluno01 = {
    nome: "Tiago",
    nota: 9.2
}

const aluno02 = {
    nome: "Felipe",
    nota: 3.1
}

const aluno03 = {
    nome: "Gabriel",
    nota: 5.3
}

// Chamar Objetos
const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

// Se a media for maior que 5, mostrar uma mensagem, por meio de uma condicional
if (media > 5) {
    console.log(`A nota foi ${media.toFixed(2)} Parabéns.`)
} else {
    console.log(`A média ${media.toFixed(2)} é menor que 5`)
}