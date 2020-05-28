// Criar programa que calcula media das notas 
// entre alunos e envia mensagem do calculo da media

//Declarando Arrays

const alunos = [
    {
        nome: "Tiago",
        nota: 9.2
    },
    {
        nome: "Felipe",
        nota: 3.1
    },
    {
        nome: "Gabriel",
        nota: 5.3
    }
]

const nomesDeAlunos = ["Tiago", "Felipe", "Gabriel"]

console.log(alunos[1])

// Chamar Array
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

// Se a media for maior que 5, mostrar uma mensagem, por meio de uma condicional
if (media > 5) {
    console.log(`A nota foi ${media.toFixed(2)} Parabéns.`)
} else {
    console.log(`A média ${media.toFixed(2)} é menor que 5`)
}