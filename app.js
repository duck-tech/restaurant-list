// include express from node_modules
const express = require('express')
const app = express()
// require express-handlebars here
const exphbs = require('express-handlebars')
// require files
const restaurantList = require('./restaurant.json')
const Restaurant = require('./models/restaurant')
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
  Restaurant.find()
            .lean()
            .then(restaurants => res.render('index',{restaurants}))
            .catch(error => console.log(error))
})

app.get('/restaurants/new' , (req,res) => {
  return res.render('new')
})

app.post('/restaurants', (req,res) => {
  Restaurant.create(req.body)
            .then(() => res.redirect('/'))
            .catch(error => console.log(error))
})

app.get('/restaurants/:id', (req,res) => {
  const id = req.params.id
  return Restaurant.findById(id)
                  .lean()
                  .then((restaurant) => res.render('show', {restaurant}))
                  .catch(error => console.log(error))
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
