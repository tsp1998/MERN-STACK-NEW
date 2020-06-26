str = " Hello "
console.log(str);
console.log(str.trim());

var nums = [100, 200, 300];
nums.forEach(function (num) {
  num *= 2;
  console.log(num);
})
console.log(nums);

let numbers = new Array(10, 50, 20, 40, 30)
numbers.map(function(num) {
  num *= 2;
  console.log(num);
})
console.log(numbers);

console.log(numbers.filter(function (number) {
  return number > 20;
}));

let obj = {
  name: "Shubham",
  age: 22
}

let json = JSON.stringify(obj)

console.log(obj);
console.log(json);

console.log(JSON.parse(json));

console.log(Date.now());

console.log(Object.keys(obj));
console.log(Object.isFrozen(obj));

class User {
  constructor(){
    this.name = "";
    this.age = 0;
  }
  get userName(){
    return this.name;
  }
  set userName(name){
    this.name = name;
  }

  setUserName = function(name) {
    this.name = name;
  }
  getUserName = function() {
    return this.name;
  }
}

let user = new User();
console.log(user.getUserName());
console.log(user.setUserName("shubham"));
console.log(user.getUserName());
