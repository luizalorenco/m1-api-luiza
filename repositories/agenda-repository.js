'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()
const Agenda = require('../models/agenda')

class agendaRepository {
  constructor() {}

  async create(data) {
    let res = await firestore.collection('agendas').doc().set(data)
    return res
  }

  async update(id, data) {
    let agenda = await firestore.collection('agendas').doc(id)
    let res = await agenda.update(data)
    return res
  }

  async getAll() {
    let agendas = await firestore.collection('agendas')
    let res = await agendas.get()
    return res
  }

  async getById(id) {
    let agenda = await firestore.collection('agendas').doc(id)
    let res = await agenda.get()
    return res
  }

  async delete(id) {
    return await firestore.collection('agendas').doc(id).delete()
  }
}

module.exports = agendaRepository