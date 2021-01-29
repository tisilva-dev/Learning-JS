const usuarios = [
    {
        nome: "Macedo",
        receitas: [115.3, 48.7, 98.3, 15.6], // 277.9
        despesas: [85.3, 13.5, 19.9] // 118.7
        // saldo = 159.2
    },
    {
        nome: "Tiago",
        receitas: [24.6, 214.3, 45.3], // 284.2
        despesas: [185.3, 12.1, 120.0] //  317.4
        // 33.2
    },
    {
        nome: "Veigar",
        receitas: [23.2, 46.3, 600.1, 12.4], // 682
        despesas: [123.4, 500.1] // 623.5
        // saldo = 58.6
    }
]

function calculaSaldo(receitas, despesas){
    let somaReceitas = somaNumeros(receitas)
    let somaDespesas = somaNumeros(despesas)

    saldo = somaReceitas - somaDespesas
    return saldo
}

function somaNumeros(numeros){

    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i];
    }
    return soma
}

for (let i = 0; i < usuarios.length; i++){
    const saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas)
    if(saldo > 0){
        console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    }else{
        console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}