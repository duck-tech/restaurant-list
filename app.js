// include express from node_modules
const express = require('express')
const app = express()
// require express-handlebars here
const exphbs = require('express-handlebars')
// require files
const restaurantList = require('./restaurant.json')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/restaurant-list')

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected')
})

// setting template engine
app.engine('handlebars',exphbs.engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
// setting static files 
app.use(express.static('public'))

// define server releated variables 
const port = 3000





// route setting
app.get('/',(req,res) => {
  res.render('index',{restaurants: restaurantList.results})
})
app.get('/restaurants/:id', (req,res) => {
  console.log(req.params)
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.id)
  res.render('show', {restaurant:restaurant})
})
app.get('/search',(req,res) => {
  const keyword = req.query.keyword.trim()
  const restaurants = restaurantList.results.filter(restaurant => {return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.includes(keyword)})
  res.render('index',{restaurants:restaurants, keyword:keyword})
})

// start and listen server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
