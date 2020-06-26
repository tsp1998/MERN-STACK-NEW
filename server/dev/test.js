const Blockchain = require('./blockchain');

const Securum = new Blockchain();

// to check genesis block created or not at the very first defined in constructor by createNewBlock
console.log(Securum); 


///// create transactions and blocks ////////////
/*Securum.createNewBlock(1, 'AGDHGAFTYAf26536', '678VghfTYDDuy7856');

Securum.createNewTransaction(100, 'fsaghfvdhsfg5675', 'dshgyugyu5462')

Securum.createNewBlock(2, 'FHGSFDGtg56464c', 'hgyugds6575Djh');

Securum.createNewBlock(3, 'HFG5675HGFGgf', 'Ghds5GFGFyhftsa')

Securum.createNewTransaction(500, 'y6456GHFGHFAGH', 'FYTf564hgyugyYF');

Securum.createNewBlock(4, 'hsdfgyhvf6576ghfg', 'gfhg657fghfghy78');

Securum.createNewBlock(5, 'jhdfg5675hgvdf', 'bjhdfghj76575ghf');

Securum.createNewTransaction(2000, 'hgfdhjg65675sf', 'dshgg56564sd');

Securum.createNewBlock(6, 'sdhgyu6756r56sa4', 'dg546aafhgha56');

console.log("----------------------------Blockchain Blocks----------------------------");
for (var i = 0; i < Securum.chain.length; i++) {
	console.log(Securum.chain[i]);
}
console.log("----------------------------Blockchain Blocks----------------------------");

console.log("----------------------------Whole Blockchain----------------------------");
console.log(Securum);
console.log("----------------------------Whole Blockchain----------------------------");*/




//// test hash method and create hash for block ////////
/*const prev_hash = 'HGFJHSGg67576ghfghdf';
const current_block_data = [
	{
		amount: 100,
		sender: 'HGHJGtd5667gRFTYF',
		recipient: 'FGHFdfsrt56456DTYFD'
	},
	{
		amount: 500,
		sender: 'dshgyus6576fgdfs',
		recipient: 'afdxscf65rt67ghvgh'
	},
	{
		amount: 2000,
		sender: 'YTYugbjhgd65fvghfd',
		recipient: 'EWrGHvhgfghf656ghhg'
	}
];

const nonce = 100;

console.log(Securum.hashBlock(prev_hash, current_block_data, nonce));*/



//////// TEST PROOF OF WORK METHOD /////////////////
/*
const prev_hash = 'HGFJHSGg67576ghfghdf';
const current_block_data = [
	{
		amount: 100,
		sender: 'HGHJGtd5667gRFTYF',
		recipient: 'FGHFdfsrt56456DTYFD'
	},
	{
		amount: 500,
		sender: 'dshgyus6576fgdfs',
		recipient: 'afdxscf65rt67ghvgh'
	},
	{
		amount: 2000,
		sender: 'YTYugbjhgd65fvghfd',
		recipient: 'EWrGHvhgfghf656ghhg'
	}
];

console.log(Securum.proofOfWork(prev_hash, current_block_data));*/