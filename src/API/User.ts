const expressModule = require('express')
const User = require('../DB/User')

const route = expressModule.Router()

route.post('/', async(req, res) => {
  const { firstName, lastName } = req.body
  let userModel = new User({ firstName, lastName });
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

route.post('/:id', async (req, res) => {
  User.findById(req.params.id).then(user => {
    let { firstName, lastName } = req.body;
    console.log(user);
    user.firstName = firstName
    user.lastName = lastName
    user.save()
      .then(() => {
      res.json('User details updated')
      }).catch(err => {
      res.status(400).json(`Error: ${err}`)
    })

    res.json(`Successfully updated the item`)
  }).catch(err => {
    res.status(500).json(`Error: ${err}`)
  })
})



module.exports = route