const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

class AdminService {
  constructor(knex) {
    this.knex = knex;
  }

  async login(email, password) {
      console.log(email, password);
    let user = await this.knex("admin_users").where({ email}).first();
    console.log(user)
    if (user) {
        let result = await bcrypt.compare(password, user.password);
        console.log(result);
        if (result) {
          const payload = {
            id: user.id,
            name: user.name,
          };
    let token = jwt.sign(payload, process.env.JWT_SECRET);
    return token;
  } }}

  async signup(name, email,phone_number, password){
    //   let query = await this.knex("customer").where({name: name, email: email}).first();
      const hashed = await bcrypt.hash(password,10);
      password = hashed;
     
    let result = await this.knex("admin_users").insert({name, email,phone_number, password}).returning("id");
    return result;


  }
}

module.exports = AdminService;
