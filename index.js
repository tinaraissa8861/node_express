const { application } = require("express")
const express = require("express")

app.get('/',(requisicao,resposta) => {
    resposta.send("Estou funcionando com o express")
})

app.listen(3000,()
)

