const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/new' , (req,res) => {
  return res.render('new')
})

router.post('/', (req,res) => {
  console.log(req.body)
  Restaurant.create(req.body)
            .then(() => res.redirect('/'))
            .catch(error => console.log(error))
})

router.get('/:id', (req,res) => {
  const id = req.params.id
  return Restaurant.findById(id)
                  .lean()
                  .then((restaurant) => res.render('show', {restaurant}))
                  .catch(error => console.log(error))
})

router.get('/:id/edit', (req,res) => {
  const id = req.params.id
  return Restaurant.findById(id)
                  .lean()
                  .then((restaurant) => res.render('edit',{restaurant}))
                  .catch(error => console.log(error))
}) 

router.put('/:id', (req,res) => {
  const id = req.params.id
  return Restaurant.findById(id)
            .then(restaurant => {
              restaurant.name = req.body.name
              restaurant.name_en = req.body.name_en
              restaurant.category = req.body.category
              restaurant.image = req.body.image
              restaurant.locatoin = req.body.location
              restaurant.phone = req.body.phone
              restaurant.google_map = req.body.google_map
              restaurant.rating = req.body.rating
              restaurant.description = req.body.description
              return restaurant.save()
             })
             .then(() => res.redirect(`/restaurants/${id}`))
             .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router