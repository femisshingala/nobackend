const mongoose =  require('mongoose');

const registerSchema = new mongoose.Schema({
          username : {
                    type:String,
                    required:true,
                    trim:true,
                   
                   

          },
          // name:{
          //           type:String,
          //           required:true
          // },
          // age:{
          //           type:Number,
          //           required:true
          // },
          // profile:{
          //           type:String,
          // }
          token:{
                    type:String
          },

          password:{
                    type:String,
                    required:true
          }

},{timestamps:true})

module.exports = mongoose.model('register1' , registerSchema)