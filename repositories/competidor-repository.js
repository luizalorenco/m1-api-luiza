'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()
const Competidor = require('../models/competidor')

class competidorRepository {
  constructor() {}

  async create(data) {
    let res = await firestore.collection('competidores').doc().set(data)
    return res
  }

  async update(id, data) {
    let competidor = await firestore.collection('competidores').doc(id)
    let res = await competidor.update(data)
    return res
  }

  async getAll() {
    let competidores = await firestore.collection('competidores')
    let res = await competidores.get()
    return res
  }

  async getById(id) {
    let competidor = await firestore.collection('competidores').doc(id)
    let res = await competidor.get()
    return res
  }

  async delete(id) {
    return await firestore.collection('competidores').doc(id).delete()
  }
}

module.exports = competidorRepository