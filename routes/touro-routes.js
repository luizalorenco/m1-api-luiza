const express = require('express')
const {
  addTouro,
  getAllTouro,
  getTouro,
  updateTouro,
  deleteTouro
} = require('../controllers/touroController')

const router = express.Router()

router.get('/touroS', getAllTouro)
router.get('/touroS/:id', getTouro)
router.post('/touroS', addTouro)
router.put('/touroS/:id', updateTouro)
router.delete('/touroS/:id', deleteTouro)

module.exports = {
  routes: router
}