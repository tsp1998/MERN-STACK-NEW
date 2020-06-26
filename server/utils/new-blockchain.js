const sha256 = require("sha256");

module.exports = (uid) => ({
  chain: [
    {
      index: 1,
      timestamp: Date.now(),
      transactions: [],
      nonce: 1,
      hash: "0",
      prev_block_hash: "0",
    },
  ],
  current_node_url: sha256(uid.toString()),
  pending_transactions: [],
  network_nodes: [],
});
