const programador = {
    nome: "Tiago",
    idade: "21",
    tecnologias: [
        { nome: "JavaScript", especialidade: "React/React Native" },
        { nome: "Java", especialidade: "Mobile" },
        { nome: "Python", especialidade: "Inteligência Artificial" }
    ]
}

console.log(`O Programador ${programador.nome}, tem ${programador.idade} anos
e a tecnologia que no momento está trabalhando é ${programador.tecnologias[0].nome},
só está se especializando em ${programador.tecnologias[0].especialidade}.
Também tem conhecimento das tecnologias: ${programador.tecnologias[1].nome} e ${programador.tecnologias[2].nome}.
Dessas tecnologias ele se especializou respectivamente em: ${programador.tecnologias[1].especialidade} e ${programador.tecnologias[2].especialidade}.`)
