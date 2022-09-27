'use strict'

const firebase = require('../db')
const Touro = require('../models/touro')
const firestore = firebase.firestore()

const addTouro = async (req, res, next) => {
  try {
    const data = req.body
    await firestore.collection('Touro').doc().set(data)
    res.status(201).send('Touro salvo com sucesso!')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const getAllTouro = async (req, res, next) => {
  try {
    const Touro = await firestore.collection('Touro')
    const data = await Touro.get()
    const TouroArray = []
    if (data.empty) {
      res.status(404).send('Não há touros cadastrados!')
    } else {
      data.forEach(doc => {
        const Touro = new Touro(
          doc.id,
          doc.data().number,
          doc.data().name,
          doc.data().type,
          doc.data().description,
          doc.data().weight,
          doc.data().height
        )
        TouroArray.push(Touro)
      })
      res.status(200).send(TouroArray)
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const getTouro = async (req, res, next) => {
  try {
    const id = req.params.id
    const Touro = await firestore.collection('Touro').doc(id)
    const data = await Touro.get()
    if (!data.exists) {
      res.status(404).send('Não foi encontrado um touro com o ID informado!')
    } else {
      res.status(200).send(data.data())
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const updateTouro = async (req, res, next) => {
  try {
    const id = req.params.id
    const data = req.body
    const Touro = await firestore.collection('Touro').doc(id)
    await Touro.update(data)
    res.status(201).send('Touro atualizado com sucesso!')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const deleteTouro = async (req, res, next) => {
  try {
    const id = req.params.id
    await firestore.collection('Touro').doc(id).delete()
    res.status(200).send('Touro excluído com sucesso!')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  addTouro,
  getAllTouro,
  getTouro,
  updateTouro,
  deleteTouro
}