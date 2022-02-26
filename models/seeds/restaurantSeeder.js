const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
const restaurantList = require('../../restaurant').results
mongoose.connect('mongodb://localhost/restaurant-list')

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {

  console.log('mongodb connected')
  Restaurant.create(restaurantList)
  .then(() => {
    console.log("restaurantSeeder done!")
    db.close()
  })
  .catch(error => console.log(error))


})