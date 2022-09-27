'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()
const Resultado = require('../models/resultado')

class resultadoRepository {
  constructor() {}

  async create(data) {
    let res = await firestore.collection('resultados').doc().set(data)
    return res
  }

  async update(id, data) {
    let resultado = await firestore.collection('resultados').doc(id)
    let res = await resultado.update(data)
    return res
  }

  async getAll() {
    let resultados = await firestore.collection('resultados')
    let res = await resultados.get()
    return res
  }

  async getById(id) {
    let resultado = await firestore.collection('resultados').doc(id)
    let res = await resultado.get()
    return res
  }

  async delete(id) {
    return await firestore.collection('resultados').doc(id).delete()
  }
}

module.exports = resultadoRepository