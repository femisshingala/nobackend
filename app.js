const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync } =require('fs');
const bodyParser=require('body-parser');
const session=require("express-session")
const fileUpload=require('express-fileupload');

const app = express();
app.use(session({secret:"secret",resave:true,saveUninitialized:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

require('dotenv').config();

const PORT = process.env.PORT || 5000;

// //middleware
app.use(fileUpload({
          useTempFiles:true
}))

app.use(express.json())
app.use(cors())



app.get('/',(req,res)=>{
          res.send("hello world")
})


//routes

readdirSync('./routes').map((route)=> app.use('/api/v1' , require('./routes/' + route)) )



const server = () => {

          db()     
          
          if(process.env.NODE_ENV == "production")
          {
                    app.use(express.static("front\expense\build"))
          }
          
           app.listen(PORT , () => {

                    console.log('you are listen to port ',PORT)
          })

}

server()
// console.log("hello")

// MONGO_URL = mongodb+srv://femisshingala54:eYfAb4cvelqLl9qZ@cluster0.qknvmuh.mongodb.net/?retryWrites=true&w=majority
// # MONGO_URL=mongodb+srv://femisshingala54:xj9Pg2VbJ0wj1Qb0@cluster0.qknvmuh.mongodb.net/?retryWrites=true&w=majority