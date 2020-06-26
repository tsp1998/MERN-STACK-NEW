const sha256 = require('sha256');
const current_node_url = process.argv[3];
const uuid = require('uuid/v1');

function Blockchain() {
	this.chain = [];
	this.pending_transactions = [];

	this.current_node_url = current_node_url;
	this.network_nodes = [];

	this.createNewBlock(1, '0', '0'); // to create genesis block (very first block)
}


Blockchain.prototype.createNewBlock = function(nonce, prev_block_hash, hash) {
	const new_block = {
		index: this.chain.length + 1,
		timestamp: Date.now(),
		transactions: this.pending_transactions,
		nonce: nonce,
		hash: hash,
		prev_block_hash: prev_block_hash
	};

	this.pending_transactions = [];
	this.chain.push(new_block); // adding block

	return new_block;
}


Blockchain.prototype.getLastBlock = function() {
	return this.chain[this.chain.length - 1];
};

 
Blockchain.prototype.getBlock = function(block_hash) {
	let correct_block = null;
	this.chain.forEach(block => {
		if (block.hash === block_hash)
			correct_block = block;
	});
	return correct_block;
};


Blockchain.prototype.getTransaction = function(transaction_id) {
	let correct_transaction = null;
	let correct_block = null;

	this.chain.forEach(block => {
		block.transactions.forEach(transaction => {
			if (transaction.transaction_id === transaction_id) {
				correct_transaction = transaction;
				correct_block = block;
			}
		});
	});

	return {
		transaction: correct_transaction,
		block: correct_block
	}
};


// Blockchain.prototype.getAddressData = function(address) {
// 	const address_transactions = [];
// 	this.chain.forEach(block => {
// 		block.transactions.forEach(transaction => {
// 			if (transaction.sender === address || transaction.recipient === address) {
// 				address_transactions.push(transaction);
// 			}
// 		});
// 	});
 
// 	let balance = 0;
// 	address_transactions.forEach(transaction =>{
// 		if(transaction.sender === address)
// 			balance -= transaction.amount;
// 		else if (transaction.recipient === address)
// 			balance += transaction.amount;
// 	});

// 	return {
// 		address_transactions: address_transactions,
// 		address_balance: balance
// 	}
// };

Blockchain.prototype.getAddressData = function(address) {
	const addressTransactions = [];
	this.chain.forEach(block => {
		block.transactions.forEach(transaction => {
			if(transaction.sender === address || transaction.recipient === address) {
				addressTransactions.push(transaction);
			};
		});
	});

	let balance = 0;
	addressTransactions.forEach(transaction => {
		if (transaction.recipient === address) balance += transaction.amount;
		else if (transaction.sender === address) balance -= transaction.amount;
	});

	return {
		addressTransactions: addressTransactions,
		addressBalance: balance
	};
};

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient) {
	const new_transaction = {
		amount: amount,
		sender: sender,
		recipient: recipient,
		transaction_id: uuid().split('-').join()
	};

	return new_transaction;
};


Blockchain.prototype.addTransactionToPendingTransactions = function(transaction) {
	this.pending_transactions.push(transaction);

	return this.getLastBlock()['index'] + 1;
};


Blockchain.prototype.hashBlock = function(prev_block_hash, current_block_data, nonce) {
	const data_as_string = prev_block_hash + nonce.toString() + JSON.stringify(current_block_data);
	const hash = sha256(data_as_string);

	return  hash;
};


Blockchain.prototype.proofOfWork = function(prev_block_hash, current_block_data) {
	let nonce = 0;
	let hash = this.hashBlock(prev_block_hash, current_block_data, nonce);
	while(hash.substring(0, 4) !== '0000'){
		hash = this.hashBlock(prev_block_hash, current_block_data, ++nonce);
		// console.log(hash);
	}
		// console.log(hash = this.hashBlock(prev_block_hash, current_block_data, ++nonce));

	return nonce;
};



Blockchain.prototype.chainIsValid = function(blockchain) {
	let is_valid_chain = true;

	for (var i = 1; i < blockchain.length; i++) {
		const current_block = blockchain[i];
		const prev_block = blockchain[i - 1];
		const block_hash = this.hashBlock(prev_block['hash'], { transactions: current_block['transactions'], index: current_block['index'] }, current_block['nonce']);
		if (block_hash.substring(0, 4) !== '0000') is_valid_chain = false;
		if (current_block['prev_block_hash'] !== prev_block['hash']) is_valid_chain = false;
	};

	const genesis_block = blockchain[0];
	const is_correct_nonce = genesis_block['nonce'] === 1;
	const is_correct_prev_block_hash = genesis_block['prev_block_hash'] === '0';
	const is_correct_hash = genesis_block['hash'] === '0';
	const is_correct_transactions = genesis_block['transactions'].length === 0;

	if (!is_correct_nonce || !is_correct_prev_block_hash || !is_correct_hash || !is_correct_transactions) is_valid_chain = false;

	return is_valid_chain;
};

module.exports = Blockchain;