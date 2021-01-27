const nome = "Tiago"
const peso = "88"
const altura = "1.80"
const IMC = peso / (altura * altura)

if (IMC >= 30){
    console.log(`${nome}, você está acima do peso e o seu IMC é ${IMC.toFixed(2)}.`)
}

if (IMC < 29.9){
    console.log(`${nome}, você está abaixo do peso e o seu IMC é ${IMC.toFixed(2)}.`)
}