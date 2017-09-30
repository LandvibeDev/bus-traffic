'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StoreSchema = new Schema({
  name: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Stores', StoreSchema);