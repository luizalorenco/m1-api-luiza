'use strict'

require('../models/resultado')
const repository = require('../repositories/resultado-repository')

function resultadoController() {}

resultadoController.prototype.post = async (req, res) => {
  let resultado = await new repository().create(req.body)
  res.status(201).send(resultado)
}

resultadoController.prototype.put = async (req, res) => {
  let resultado = await new repository().update(req.params.id, req.body)
  res.status(202).send(resultado)
}

resultadoController.prototype.get = async (req, res) => {
  let lista = await new repository().getAll()
  res.status(200).send(lista)
}

resultadoController.prototype.getById = async (req, res) => {
  let resultado = await new repository().getById(req.params.id)
  res.status(200).send(resultado)
}

resultadoController.prototype.delete = async (req, res) => {
  let resultado = await new repository().delete(req.params.id)
  res.status(204).send(resultado)
}

module.exports = resultadoController

