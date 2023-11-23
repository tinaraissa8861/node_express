const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname,"templates")

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.post('/cadastrar/salvar',(requisicao,resposta) => {
    const nome = requisicao.body.nome
    const email =requisicao.body.email
    const senha = requisicao.body.senha

    console.log(`o email do usuario é: ${email}`)
    console.log(`o nome do usuario é:${nome}`)
    console.log(`o nome do usuario é:${senha}`)
})

app.get('/cadastrar',(requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/cadastro.html`)
})

// https://localhost:3000/usuarios/20
app.get('/usuarios/:id',(requisicao,resposta) => {
    const id = requisicao.params.id

    console.log(`acessando dados do usuario${id}`)

    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})

// https://localhost:3000
app.get('/',(requisicao,resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)

})

app.listen(3000,() => {
    console.log("Servidor rodando na porta 3000!")
}
)

