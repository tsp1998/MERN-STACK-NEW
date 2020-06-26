https://intense-castle-19234.herokuapp.com/

npm run node1
npm run node2

postman by post method
http://localhost:3001/register-and-broadcast-node
{
	"new_node_url": "http://localhost:3002"
}

node connected

http://localhost:3001/transaction/broadcast
{
	"amount": 1000,
	"sender": "00",
	"recipient": "shubham"
}
00 means transaction by securum

then mine by
http://localhost:3001/mine
OR
http://localhost:3002/mine

first 12.5 given by 00 means by securum

now shubham have 1000 securum coins after mining
so he can send upto 1000

lets have transactions
http://localhost:3001/transaction/broadcast
{
	"amount": 100,
	"sender": "shubham",
	"recipient": "sham"
}

then mine by
http://localhost:3001/mine
OR
http://localhost:3002/mine

now in pending transactions reward for miner is 12.5 given by shubham which will be in next mining

now lets try another transactions
http://localhost:3001/transaction/broadcast
{
	"amount": 10,
	"sender": "sham",
	"recipient": "ram"
}

next

{
	"amount": 10,
	"sender": "sham",
	"recipient": "akshay"
}

now sham have done two transactions
lets mine the block from 3002 host

http://localhost:3002/mine

now check pending transactions reward is given by all senders of previous block


in order to access balance of any securum user copy sender or recipient hash (e.g. shubham, sham, ram) from blockchain transactions

goto http://localhost:3001/block-explorer/

paste there

select address in drop down and search

you will get all transactions and balance

in case if user have less balance than he wanted to send, the transaction get failed
