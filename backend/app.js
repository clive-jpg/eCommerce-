const express = require("express");
const cors = require("cors");
const knexfile = require("./knexfile");
const knexFile = require("./knexfile").development;
const knex = require("knex")(knexfile);
const port = 8000;

const app = express();
app.use(cors());

app.use(express.json());



app.listen(port, ()=>{
    console.log(`Application listening to port ${port}`)
})