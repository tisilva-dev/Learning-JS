const programador = [
    {
        nome: "Tiago",
        idade: 22,
        tecnologia: { nome: "JavaScript", especialidade: "Web" }
    },
    {
        nome: "Fernando",
        idade: 38,
        tecnologia: { nome: "Flutter", especialidade: "Mobile" }
    },
    {
        nome: "Cesar",
        idade: "29",
        tecnologia: [
            { nome: "Java", especialidade: "Desktop" },
            { nome: "Python", especialidade: "Machine Learning" }

          ]
    }
]

console.log(`O usuário ${programador[0].nome} tem ${programador[0].idade} e usa a tecnologia ${programador[0].tecnologia.nome}`,
    `com especialidade em ${programador[0].tecnologia.especialidade}.`)

console.log(`O usuário ${programador[1].nome} tem ${programador[1].idade} e usa a tecnologia ${programador[1].tecnologia.nome}`,
    `com especialidade em ${programador[1].tecnologia.especialidade}.`)

console.log(`O usuário ${programador[2].nome} tem ${programador[2].idade} e usa as tecnologias ${programador[2].tecnologia[0].nome}`,
    `com especialidade em ${programador[2].tecnologia[0].especialidade} e ${programador[2].tecnologia[1].nome}`,
    `com especialidade em ${programador[2].tecnologia[1].especialidade}.`)

