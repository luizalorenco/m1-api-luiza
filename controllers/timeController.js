'use strict'

require('../models/time')
const repository = require('../repositories/time-repository')

function timeController() {}

timeController.prototype.post = async (req, res) => {
  let resultado = await new repository().create(req.body)
  res.status(201).send(resultado)
}

timeController.prototype.put = async (req, res) => {
  let resultado = await new repository().update(req.params.id, req.body)
  res.status(202).send(resultado)
}

timeController.prototype.get = async (req, res) => {
  let lista = await new repository().getAll()
  res.status(200).send(lista)
}

timeController.prototype.getById = async (req, res) => {
  let time = await new repository().getById(req.params.id)
  res.status(200).send(time)
}

timeController.prototype.delete = async (req, res) => {
  let resultado = await new repository().delete(req.params.id)
  res.status(204).send(resultado)
}

module.exports = timeController

