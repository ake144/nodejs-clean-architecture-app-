class User {
    constructor(id, name, email, password, role) {
      if(!email.includes('@')){
        throw new Error('please type your correct email')
      }
      if(password.length < 6){
        throw new Error('Password must be at least 8 characters');
      }
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
      this.role = role;
    }
  }



module.exports = User;
  