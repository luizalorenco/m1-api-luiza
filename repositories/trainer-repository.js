'use strict'

const firebase = require('../db')
const firestore = firebase.firestore()
const Trainer = require('../models/trainer')

class trainerRepository {
    constructor() {}

    async create(data) {
        let res = await firestore.collection('trainers').doc().set(data)
        return res
    }

    async update(id,data) {
    let trainer = await firestore.collection('trainers').doc(id)
    let res = await trainer.update(data)
        return res
    }
    async getAll() {
        let trainers = await firestore.collection('trainers')
        let res = await trainers.get()
        return res
    }

    async getById(id) {
        let trainer = await firestore.collection('trainers').doc(id)
        let res = await trainer.get()
        return res
    }

    async delete(id) {
        await firestore.collection('trainers').doc(id).delete()
    }
}

module.exports = trainerRepository