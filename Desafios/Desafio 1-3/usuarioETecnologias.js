const usuarios = [
    { nome: "Tiago", tecnologia: ["JavaScript", "Java"] },
    { nome: "Fernando", tecnologia: ["Flutter", "Python"] },
    { nome: "Maisa", tecnologia: ["SQL", "JavaScript" ]}
]

for(let i = 0; i < usuarios.length; i++){
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologia[0]}, ${usuarios[i].tecnologia[1]}.`)
}