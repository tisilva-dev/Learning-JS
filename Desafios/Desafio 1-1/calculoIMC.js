//Calculo do IMS e Nível de Obesidade

const nome = "Felipe"
const altura = 1.8
const peso = 92
const sexo = "M"

const imc = peso / (altura * altura)

console.log(`Seu IMC está em ${imc.toFixed(2)}`)

if (imc >= 30) {
    console.log("Está acima do Peso.")
} else if (imc < 29.9) {
    console.log("Está abaixo do peso.")
}