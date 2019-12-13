const express = require('express')
const mongoose = require('mongoose')
const User = require('../DB/User')

const route = express.Router()

route.post('/', async(req, res) => {
  const { firstName, lastName } = req.body
  let user = {}
  user.firstName = firstName
  user.lastName = lastName
  let userModel = new User(user);
  await userModel.save()
  res.json(userModel);
})

route.get('/', async (req, res) => {
  User.find({}).then(users => {
      res.json(users)
  }).catch(err => {
    res.status(400).json(`Error: ${err}`)
  })
})

route.get('/:id', async (req, res) => {
  User.findById(req.params.id).then((user) => {
      res.json(user)
  })
  .catch(err => {
    res.status(400).json(`Error: ${err}`) 
  })
})

route.delete('/:id', async (req, res) => {
  User.findByIdAndDelete(req.params.id).then(user => {
      res.json(`Successfully deleted item`)
  }).catch(err => {
    res.status(500).json(`Error: ${err}`)
  })
})


module.exports = route