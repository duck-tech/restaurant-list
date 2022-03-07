const flash = require('connect-flash')
// include express from node_modules
const express = require('express')
const app = express()
// require express-handlebars here
const exphbs = require('express-handlebars')
// 引用 body-parser
const bodyParser = require('body-parser')
const methodOverride = require('method-override') 
const session = require('express-session')
const routes = require('./routes')
const usePassport = require('./config/passport')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
require('./config/mongoose')

// setting template engine
app.engine('handlebars',exphbs.engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

// setting static files 
app.use(express.static('public'))
// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
usePassport(app)
app.use(flash())

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})
app.use(routes)

// define server releated variables 
const port = process.env.PORT

// start and listen server
app.listen(port, () => {
console.log(`Express is running on http://localhost:${port}`)
})
