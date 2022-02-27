// include express from node_modules
const express = require('express')
const app = express()
// require express-handlebars here
const exphbs = require('express-handlebars')
// require files
const restaurantList = require('./restaurant.json')
const Restaurant = require('./models/restaurant')
// 引用 body-parser
const bodyParser = require('body-parser')
const methodOverride = require('method-override') 
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurant-list')
const routes = require('./routes')
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
// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

// define server releated variables 
const port = 3000

// start and listen server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
