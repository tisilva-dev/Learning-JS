const usuarios = [
    { nome: "Tiago", tecnologia: ["JavaScript", "Java"] },
    { nome: "Fernando", tecnologia: ["Flutter", "Python"] },
    { nome: "Maisa", tecnologia: ["SQL", "JavaScript"] }
]

function checaSeUsuarioUsaJavaScript(usuario) {
    for (let i = 0; i < usuario.tecnologia.length; i++) {
        if (usuario.tecnologia[i] == "JavaScript") {
            return true
        }
    }
    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const checaSeUsariosTrabalhaComJavaScript = checaSeUsuarioUsaJavaScript(usuarios[i])
    if (checaSeUsariosTrabalhaComJavaScript) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com JavaScript.`)
    }
}