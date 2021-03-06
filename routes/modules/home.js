const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/',(req,res) => {
  const userId = req.user._id
  Restaurant.find({userId})
            .lean()
            .sort({_id : 'asc'})
            .then(restaurants => res.render('index',{restaurants}))
            .catch(error => console.log(error))
})

router.get('/search',(req,res) => {
  const userId = req.user._id
  const keyword = req.query.keyword.trim()
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
    case 'rating':
      sortMethod['rating'] = 'desc'
      break
    default:
      sortMethod['name'] = 'asc'
  }
  Restaurant.find({userId})
          .lean()
          .sort(sortMethod)
          .then(restaurants => {
            restaurants = restaurants.filter(restaurant => {return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.includes(keyword)})
          
          res.render('index',{restaurants:restaurants, keyword:keyword})
        })
})

module.exports = router