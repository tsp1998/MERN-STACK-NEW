const mongoose = require('mongoose')

const blockSchema = mongoose.Schema({
  index: {
    type: Number
  },
  timestamp: {
    type: Number
  },
  transactions: {
    type: Array
  },
  nonce: {
    type: Number
  },
  hash: {
    type: String
  },
  prev_block_hash: {
    type: String
  }
})

const Block = module.exports = mongoose.model('Block', blockSchema);

// Get Blocks
module.exports.getBlocks = (callback, limit) => {
  Block.find(callback).limit(limit)
}

module.exports.getBlockById = (_id, callback) => {
  Block.findById(_id, callback);
}

module.exports.addBlock = (block, callback) => {
  Block.create(block, callback)
}