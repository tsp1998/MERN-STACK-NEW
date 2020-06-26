const mongoose = require('mongoose')

const AccountSchema = mongoose.Schema({
  uid: {
    type: String
  },
  balance: {
    type: Number
  }
})

mongoose.model('Account', AccountSchema)