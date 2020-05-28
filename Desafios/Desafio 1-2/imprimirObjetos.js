const empresa = {
    nome: "Rocketseat",
    cor: "Roxa",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: "260"
    },
    foco: "Programacão",
    cursos: {
        gratuito: "Starter",
        inicial: "Launchbase",
        avancado: "GoStack"
    }
}

console.log(`A ${empresa.nome} é conhecida pela sua cor ${empresa.cor}, 
fica localizada na ${empresa.endereco.rua} de número ${empresa.endereco.numero}. 
O Foco da empresa são cursos de ${empresa.foco} e seus cursos ofertados 
são: ${empresa.cursos.gratuito}, ${empresa.cursos.inicial} e ${empresa.cursos.avancado}.`)