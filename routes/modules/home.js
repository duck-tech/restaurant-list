const express = require('express')
const router = express.Router()
const restaurantList = require('../../restaurant.json')
const Restaurant = require('../../models/restaurant')

router.get('/',(req,res) => {
  Restaurant.find()
            .lean()
            .then(restaurants => res.render('index',{restaurants}))
            .catch(error => console.log(error))
})

router.get('/search',(req,res) => {
  const keyword = req.query.keyword.trim()
  console.log(req.query.sort)
  const sortCriteria = req.query.sort
  const sortMethod = {}

  switch (sortCriteria) {
    case 'asc':
      sortMethod['name'] = 'asc'
      break
    case 'desc':
      sortMethod['name'] = 'desc'
      break
    case 'category':
      sortMethod['category'] = 'asc'
      break
    case 'location':
      sortMethod['location'] = 'asc'
      break
    default:
      sortMethod['name'] = 'asc'
  }
  Restaurant.find()
          .lean()
          .sort(sortMethod)
          .then(restaurants => {
            restaurants = restaurants.filter(restaurant => {return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.includes(keyword)})
          
          res.render('index',{restaurants:restaurants, keyword:keyword})
        })
})

module.exports = router