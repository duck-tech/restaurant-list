const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema({
  name : {type:String, required: True},
  name_en: {type:String, required: True},
  category: {type:String, required: True},
  image:{type:String, required: True},
  location: {type:String, required: True},
  phone: {type:String, required: True},
  google_map: {type:String, required: True},
  rating: {type:Number, required: True},
  description: {type:String, required: True}
})