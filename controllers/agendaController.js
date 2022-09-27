'use strict'

require('../models/agenda')
const repository = require('../repositories/agenda-repository')

function agendaController() {}

agendaController.prototype.post = async (req, res) => {
  let resultado = await new repository().create(req.body)
  res.status(201).send(resultado)
}

agendaController.prototype.put = async (req, res) => {
  let resultado = await new repository().update(req.params.id, req.body)
  res.status(202).send(resultado)
}

agendaController.prototype.get = async (req, res) => {
  let lista = await new repository().getAll()
  res.status(200).send(lista)
}

agendaController.prototype.getById = async (req, res) => {
  let agenda = await new repository().getById(req.params.id)
  res.status(200).send(agenda)
}

agendaController.prototype.delete = async (req, res) => {
  let resultado = await new repository().delete(req.params.id)
  res.status(204).send(resultado)
}

module.exports = agendaController

