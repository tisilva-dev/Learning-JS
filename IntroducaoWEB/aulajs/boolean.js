// Criar um programa que calcula a média das turmas de alunos e envia uma mensagem de calcúlo da média

const alunosDaTurmaA = [
    {
        nome: "Tiago",
        nota: 8.2,
        // reprovado: true
    },
    {
        nome: "Matheus",
        nota: 3.9
    },
    {
        nome: "Carol",
        nota: 9
    },
    {
        nome: "Valter",
        nota: 0.8
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
    },
    {
        nome: "Pedro",
        nota: 8
    }
]

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    // console.log(media.toFixed(2))
    return media.toFixed(2)
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    // Média for maior que 6, parabenizar
    if (media >= 6) {
        console.log(`A média da turma ${turma} foi de ${media}. Parabéns.`)
    } else {
        console.log(`A média da turma ${turma} foi de ${media}. Esforce-se mais da próxima vez.`)
    }
}

enviaMensagem(media1, "Turma A")
enviaMensagem(media2, "Turma B")

// Marcar aluno como reprovado se a nota for menor que 5.
// E enviar uma mensagem 

// console.log(typeof alunosDaTurmaA[0].reprovado)

function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if (aluno.nota < 5) {
        aluno.reprovado = true;
    }
    // console.table(alunos)
}

// marcarComoReprovado(alunosDaTurmaA)

function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O Aluno ${aluno.nome} está reprovado!`)
    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno)
    }
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)