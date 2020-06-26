let arr = new Array(1, 2, 4);

let _reduce = arr.reduce((a, b) => {
  return a / b; // a, b are 2 vars in arr iterates throughout arr like 10,20 20,30 etc
});

let _reduceRight = arr.reduceRight((a, b) => a / b);

console.log("arr", arr);
console.log("_reduce", _reduce);
console.log("_reduceRight", _reduceRight);

const date = new Date();

console.log(date.valueOf());
console.log(date.getDay());
