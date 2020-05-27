// Criar programa que calcula media das notas 
// entre alunos e envia mensagem do calculo da media


const aluno1 = 'Ze'
const notaAluno1 = 9.2

const aluno2 = 'Dubai'
const notaAluno2 = 3.1

const aluno3 = 'Dab'
const notaaluno3 = 5.3

const media = (notaAluno1 + notaAluno2 + notaaluno3) / 3

// Se a media for maior que 5, mostrar uma mensagem
if(media > 5){
    console.log(`A nota foi ${media}. Parabéns.`)
}else{
    console.log(`A média ${media} é menor que 5`)
}