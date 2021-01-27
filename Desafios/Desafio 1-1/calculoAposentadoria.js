const nome = "Tiago"
const sexo = "M"
const idade = 22
const contribuicao = 4

const tempoContribuicao = idade + contribuicao

const homemPodeSeAposentar = sexo == "M"  &&  contribuicao >= 35 && tempoContribuicao >= 95
const mulherPodeSeAposentar = sexo == "F" && contribuicao >= 30 && tempoContribuicao >= 85

if (homemPodeSeAposentar || mulherPodeSeAposentar){
    console.log(`${nome}, você pode se aposentar!`)
}else{
    console.log(`${nome}, você não pode se aponsetar!`)
}