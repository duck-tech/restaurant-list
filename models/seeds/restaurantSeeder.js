const db = require('../../config/mongoose')
const Restaurant = require('../restaurant')
const restaurantList = require('../../restaurant').results

db.once('open', () => {

  console.log('mongodb connected')
  Restaurant.create(restaurantList)
  .then(() => {
    console.log("restaurantSeeder done!")
    db.close()
  })
  .catch(error => console.log(error))


})