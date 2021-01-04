const nome = "Tiago"
const peso = 86
const altura = 1.80

const IMC = peso / (altura * altura)

if (IMC >= 30){
    console.log(`${nome}, o seu IMC é ${IMC.toFixed(2)} e você está acima do peso.`)
}
if (IMC < 29.9){
    console.log(`${nome}, o seu IMC é ${IMC.toFixed(2)} e você não está acima do peso.`)
}