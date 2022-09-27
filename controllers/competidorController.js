'use strict'

require('../models/competidor')
const repository = require('../repositories/competidor-repository')

function competidorController() {}

competidorController.prototype.post = async (req, res) => {
  let resultado = await new repository().create(req.body)
  res.status(201).send(resultado)
}

competidorController.prototype.put = async (req, res) => {
  let resultado = await new repository().update(req.params.id, req.body)
  res.status(202).send(resultado)
}

competidorController.prototype.get = async (req, res) => {
  let lista = await new repository().getAll()
  res.status(200).send(lista)
}

competidorController.prototype.getById = async (req, res) => {
  let competidor = await new repository().getById(req.params.id)
  res.status(200).send(competidor)
}

competidorController.prototype.delete = async (req, res) => {
  let resultado = await new repository().delete(req.params.id)
  res.status(204).send(resultado)
}

module.exports = competidorController

