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
  const restaurants = restaurantList.results.filter(restaurant => {return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.includes(keyword)})
  res.render('index',{restaurants:restaurants, keyword:keyword})
})

module.exports = router