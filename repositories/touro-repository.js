'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()
const Touro = require('../models/touro')

class touroRepository {
    constructor() {}

    async create(data) {
        let res = await firestore.collection('touros').doc().set(data)
        return res
    }

    async update(id,data) {
    let touro = await firestore.collection('touros').doc(id)
    let res = await touro.update(data)
        return res
    }
    async getAll() {
        let touros = await firestore.collection('touros')
        let res = await touros.get()
        return res
    }

    async getById(id) {
        let touro = await firestore.collection('touros').doc(id)
        let res = await touro.get()
        return res
    }

    async delete(id) {
        await firestore.collection('touros').doc(id).delete()
    }
}

module.exports = touroRepository