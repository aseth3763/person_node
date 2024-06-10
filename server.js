const express = require("express")
const app = express()
const path = require('path')

const bodyParser = require("body-parser")
app.use(bodyParser.json())

const db = require("./db")

app.set("view engine", "ejs")   // Set EJS as the view engine
app.set("views",path.resolve("./views"))// Specify the directory for views



  //
  
const personRouter = require("./Router/personRoutes")
app.use("/person",personRouter)

const staticRouter = require("./Router/staticRouter")
app.use("/a",staticRouter)

const port = 3100 
app.listen(port,()=>{
  console.log("Server connected")
});