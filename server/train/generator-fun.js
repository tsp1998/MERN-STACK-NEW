function* gen(){
  console.log("Hello From Generator Function");
}

const g = gen();
console.log(g)
const gObj = g.next()
console.log(gObj)