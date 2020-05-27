//Calculo de Aposentadoria utilizando os seguinte criterios:
// *    O tempo de contribuição mínimo para homens é de 35 anos e, 
// para mulheres, 30 anos;
// *    Utilizando a regra 85-95, a soma da idade com o tempo de 
// contribuição do homem precisa ser de no mínimo 95 anos, enquanto 
// a mulher precisa ter no mínimo 85 anos na soma;

const nome = 'Jorge'
const sexo = 'F'
const idade = 62
const contribuicao = 32
const regraOuro = idade + contribuicao

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && regraOuro >= 95 
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && regraOuro >= 85

if (homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}