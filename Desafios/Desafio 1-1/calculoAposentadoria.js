const nome = "Tiago"
const sexo = "M"
const idade = 60
const contribuicao = 34

calculoContribuicao = idade + contribuicao

const homemPodeSeAposentar = sexo == "M" && calculoContribuicao >= 95 && contribuicao >= 35
const mulherPodeSeAposentar = sexo == "F" && calculoContribuicao >= 85 && contribuicao >= 30

if (homemPodeSeAposentar || mulherPodeSeAposentar) {
    console.log(`${nome}, você pode se aposentar.`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar.`)
}