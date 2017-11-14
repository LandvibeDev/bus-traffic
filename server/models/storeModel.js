'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StoreSchema = new Schema({
  name: {
    type: String
  },
  phone_number: {
    type: String
  },
  img:{
    type: String
  },
  description:{
    type: String
  }
});

module.exports = mongoose.model('Stores', StoreSchema);