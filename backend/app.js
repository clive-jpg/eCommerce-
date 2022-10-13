const express = require("express");
const cors = require("cors");
const knexfile = require("./knexfile");
const knexFile = require("./knexfile").development;
const knex = require("knex")(knexFile);

const jwt = require("jsonwebtoken")
const auth = require("./jwt-strategy")(knex);
const bcrypt = require("bcrypt");
const port = 8000;

// auth(knex).initialize();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const AuthRouter = require("./Routers/AuthRouter");
const AuthService = require("./Services/AuthService");

const AdminService = require("./Services/AdminService");
const AdminRouter = require("./Routers/AdminRouter");

const ProductRouter = require("./Routers/Products");
const ProductService = require("./Services/ProductService")


app.use(auth.initialize());

let authService = new AuthService(knex);
let productService = new ProductService(knex);
let adminService = new AdminService(knex);

app.use("/auth", new AuthRouter(express, authService).router());
app.use("/profile", new ProductRouter(express, productService).router());
app.use("/admin", new AdminRouter(express, adminService ).router());

// app.post("/auth/signup", async (req,res)=>{
//     const {name, email, password} = req.body;
//     let query = await knex("customer").where({name: name, email: email}).first();
//     const hashed = await bcrypt.hash(password,10);
//     if(query === undefined){
//         await knex("customer").insert({name ,email, password: hashed});
//         res.json("Signup complete");
//     } else {
//         res.sendStatus(401);
//     }
// });

// app.post("/auth/login",async (req,res)=>{
//     const {email, password} = req.body;
//     let user = await knex("customer").where({email}).first();
//     if(user){
//         let result = await bcrypt.compare(password,user.password );
//         if(result){
//             const payload = {
//                 id: user.id, 
//                 name: user.name,
//             };
//             const token = jwt.sign(payload, process.env.JWT_SECRET);
//             console.log(token);
//             res.json({token});
//         } else {
//             res.sendStatus(401);
//         }
//     }
// })
//fb login
app.post("/auth/facebook", async (req,res)=>{
    console.log("body", req.body);
    let userInfo = req.body.userInfo;
    let user= await knex("customer").where({facebook_id: userInfo.id}).first();
    if(!user){
      let id = await knex("customer").insert({facebook_id: userInfo.id, name: userInfo.name, email: userInfo.email}).returning("id");
      const payload = {
        id: id[0].id,
        name: userInfo.name,
      }
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      res.json({token})
    } else{
      const payload = {
        id: user.id,
        name: user.name,
      }
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      res.json({token})
    }
  })

  app.post("/auth/google", async(req,res)=>{
    let userInfo = req.body.userInfo;
    let user = await knex("customer").where({google_id: userInfo.id}).first();
    if(!user){
      let id = await knex("customer").inserr({google_id, name: userInfo.name, email: userInfo.email}).returning("id");
      const payload = {
        id : id[0].id,
        name: userInfo.name,
      }
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      res.json({token})
    }

  })


app.listen(port, ()=>{
    console.log(`Application listening to port ${port}`)
})