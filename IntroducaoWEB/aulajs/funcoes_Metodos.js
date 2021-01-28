// Criar um programa que calcula a média das turmas de alunos e envia uma mensagem de calcúlo da média

const alunosDaTurmaA = [
    {
        nome: "Tiago",
        nota: 8.2
    },
    {
        nome: "Matheus",
        nota: 3.9
    },
    {
        nome: "Carol",
        nota: 9
    }
]

const alunosDaTurmaB = [
    {
        nome: "Vagner",
        nota: 6.8
    },
    {
        nome: "Manuela",
        nota: 6.2
    },
    {
        nome: "Fernanda",
        nota: 4.2
    }
]


function calculaMedia(alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

// Média for maior que 6, parabenizar

function enviaMensagem(media, turma){
    if (media >= 6) {
        console.log(`A média da turma ${turma} foi de ${media}. Parabéns.`)
    } else {
        console.log(`A média da turma ${turma} foi de ${media}. Esforce-se mais da próxima vez.`)
    }
}

enviaMensagem(media1, "Turma A")
enviaMensagem(media2, "Turma B")