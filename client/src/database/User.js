const fs = require('fs')

class User {
  constructor(firstName, lastName, email, password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password
  }

  meta(){
    console.log(this)
  }
  
  addUserToDatabase(){
    const usersData = fs.readFileSync('./users.json');
    if (usersData) {
      usersData = JSON.parse(usersData);
      usersData = [...usersData, this];
      console.log(usersData);
      if (fs.writeFileSync("./users.json", JSON.stringify(usersData)))
        return true
      else
        return false
    } else {
      usersData = new Array();
      usersData = [...usersData, this];
      if (fs.writeFileSync("./users.json", JSON.stringify(usersData)))
        return true
      else
        return false
    }
  }
}

export default User;