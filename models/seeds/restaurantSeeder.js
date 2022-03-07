const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Restaurant = require('../restaurant')
const User = require('../user')
const db = require('../../config/mongoose')
const restaurants = require('../../restaurant.json').results

const SEED_USERS = [{
  name: 'user1',
  email: 'user1@example.com',
  password: '12345678',
  restaurantId: [1, 2, 3]

},
{
  name: 'user2',
  email: 'user2@example.com',
  password: '12345678',
  restaurantId: [4, 5, 6]
}
]

db.once('open', () => {
  Promise.all(
    SEED_USERS.map(seedUser => {
      return bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(seedUser.password, salt))
        .then(hash => {
          return User.create({
            name: seedUser.name,
            email: seedUser.email,
            password: hash
          })
        })
        .then(user => {
          const userId = user._id
          const restaurantList = restaurants.filter(restaurant => {
            return seedUser.restaurantId.includes(restaurant.id)
          })
          return Promise.all(restaurantList.map(restaurant => {
            return Restaurant.create({
              name: restaurant.name,
              name_en: restaurant.name_en,
              category: restaurant.category,
              image: restaurant.image,
              location: restaurant.location,
              phone: restaurant.phone,
              google_map: restaurant.google_map,
              rating: restaurant.rating,
              description: restaurant.description,
              userId: userId
            })
          }))
        })
    })

  ).then(() => {
      console.log('done.')
      process.exit()
    })
    .catch((err) => console.log(err))
})