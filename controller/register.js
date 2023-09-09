const registerSchema = require('../models/register');
// const cloudinary = require('cloudinary').v2;
const Income = require("../models/incomeModel");
const Expense = require("../models/expenseModel");
// require('dotenv').config();
// const session = require('express-session');
const jwt=require("jsonwebtoken");
// session({secret:"secret",resave:true,saveUninitialized:true})
const bcryptjs=require('bcryptjs')


// cloudinary.config({
//           cloud_name:'dddup02lo',
//           api_key:'321278376993753',
//           api_secret:'OLlWkwyI8iYr7mUNxkFDeHP0MUA'
// });

const securrePassword =async(password)=>{
  try {
         const passwordHash= await bcryptjs.hash(password,10); 

            return passwordHash;
  } catch (error) {
            res.status(400).send(error.message);
  }
}

const mysecret="femissecreat"

const create_token =  async(id)=>{
  try {

   const token =await jwt.sign({_id:id},mysecret)
    return token;
  } catch (error) {
    res.status(400).send(error.message)
    
  }
}

exports.registerUser = async (req , res) => {
          // // console.log(req.body);

          // // const {userid ,name ,age  ,password} = req.body;
          // const file = req.files.photo;

          // cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
          //           console.log(result);
          //           console.log(err)
          // })

          // // const reg = registerSchema({
          // //                    userid,
          // //                    name,
          // //                    age,
          // //                    profile,
          // //                    password
          // //           })

          // //           console.log(reg)

          // //           try{
          // //                     if(!userid || !name || !age || !profile || !password )
          // //                     {
          // //                               return res.status(400).json({message:'All fields are register required '})
          // //                     }
                             
          // //                     await reg.save()
          // //                     res.status(200).json({message:'user added'})

          // //           }catch(e)
          // //           {
          // //                     console.log(e);
          // //           }+

          const spassword = await securrePassword(req.body.password);
          const { username} = req.body;
          const incomm=await registerSchema({
            username:username,
            password:spassword
          })
          console.log(incomm)

          //  req.session.user_id = incomm._id

          const incomedata = await incomm.save();
          console.log(incomedata);
          res.send(incomedata);


         //  const incomeobj = await Income.create({
         //    incomeobj:req.body.incomeid,
         //    username:req.body.uname,
         //    password:req.body.pass
            
         //  });

         //  const incomedata = await incomeobj.save();
         //  return res.send(incomedata);



                  //   console.log(regis);

                  //   try{
                  //             // if(!userid || !password )
                  //             // {
                  //             //           return res.status(400).json({message:'All fields are required '})
                  //             // }
                              
                  //             await regis.save()
                  //             res.status(200).json({message:'user added'})

                  //   }catch(e)
                  //   {
                  //             console.log(e);
                  //   }
}

exports.getUser1 = async (req,res) =>{

  try{
   // username:req.body.username
   // username:req.body.username
            const regis = await registerSchema.find({});


            console.log(regis)
            res.send(regis)
           
          //  if(regis)
          //  {
           
          
           // const spassword = await securrePassword(req.body.password);
          //  const passwordmatch=await bcryptjs.compare(req.body.password,regis.password);
          //  console.log(passwordmatch)
          //      if(passwordmatch)
          //      {
          //        req.session.userid=regis._id;
          //        req.session.save();
          //        const ab=req.session.userid;
          //        console.log(ab);

          //        // const tokendata =await create_token(regis._id);

                //  const userresult={
                //    _id:regis._id,
                //    username:regis.username,
                //    password:regis.password,
                   
                //  }
                //  console.log(userresult);
                 // res.status(200).send(userresult)



          //      }else{
          //        res.status(200).send("not login")
  
          //     }
          //  }else{
          //     res.status(200).send("not login")

          //  }
           
           
             
           //  res.status(200).send(regis);
           // 
  }catch(e)
  {
            res.status(500).json({message:'server getUser error'})
  }
}

exports.getUser = async (req,res) =>{

  
    // username:req.body.username
    // username:req.body.username
             const regis = await registerSchema.findOne({username:req.body.username});


             console.log(regis)
            
            if(regis)
            {
            
           
            // const spassword = await securrePassword(req.body.password);
            const passwordmatch=await bcryptjs.compare(req.body.password,regis.password);
            console.log(passwordmatch)
                if(passwordmatch)
                {
                //  req.session.userid = regis._id;
                  // req.session.save();
                  // const ab=req.session.userid;
                  // console.log(ab);
                  // localStorage.setItem('id',regis._id)
                  // const tokendata =await create_token(regis._id);

                  // const userresult={
                  //   _id:regis._id,
                  //   username:regis.username,
                  //   password:regis.password,
                    
                  // }
                  // console.log(userresult);
                  res.status(200).send(regis._id)



                }else{
                  res.status(200).send("not login")
   
               }
            }else{
               res.status(200).send("not login")

            }
            
            
              
            //  res.status(200).send(regis);
            // 
 
}