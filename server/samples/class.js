function User() {}

User.prototype.setName = function(name) {
  this.name = name;
  console.log(this);
};

User.prototype.getName = function() {
  return this.name;
};

// module.exports = {
//   User
// };
module.exports = User;
