const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

class ProductService{
    constructor(knex){
        this.knex = knex;
    }

    async showProduct(token){
        let data = await this.knex.select("*").from("products").orderBy("id")
        return data;
    }
    async purchaseHistory(){
        let data = await this.knex.select("*").from("purchase_history").orderBy("id")
        return data;
    }
}
module.exports = ProductService;