const mongoose = require('mongoose');
require('dotenv').config();

const db = async () => {
          try{
                    mongoose.set('strictQuery',false)
                    await mongoose.connect(process.env.MONGO_URL)
                    console.log('Db connected')

          }catch(e)
          {
                    console.log("Db conection error" + e)
          }
}


module.exports = {db}