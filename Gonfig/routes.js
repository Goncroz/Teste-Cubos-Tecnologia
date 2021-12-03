const express = require('express')
const routes = express.Router()

let db = [
    { '1': {Disponibilidade_de_agendamento_dia: '27', Mes: '11', Ano: '2021', Nos_intervalos_de: '09:00 a 13:00'} },
    { '2': {Disponibilidade_de_agendamento_dia: '28', Mes: '11', Ano: '2021', Nos_intervalos_de: '09:00 a 13:00'} },
    { '3': {Disponibilidade_de_agendamento_dia: '29', Mes: '11', Ano: '2021', Nos_intervalos_de: '09:00 a 17:00'} }
]

// Listar regras de horários para atendimento
routes.get('/listar', (req, res) => {
    return res.json(db)
})

// Listar horários disponíveis dentro de um intervalo
routes.get('/lista/:horario', (req, res) => {
    return res.json(db)
})

// Cadastrar regras de horários para atendimento
routes.post('/cadastrar', (req, res) => {
    const body = req.body

    if(!body)
    return res.status(400).end()

    db.push(body)
    return res.json(body)
})

// Apagar regra de horário para atendimento
routes.delete('/:id', (req, res) => {
    const id = req.params.id

   let newDB = db.filter(item => {
       if(!item[id])
       return item
   })

   db = newDB

   return res.send(newDB)
})


module.exports = routes
