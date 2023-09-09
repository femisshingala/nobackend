const IncomeSchema = require('../models/incomeModel');
const { registerUser } = require('./register');
const registerSchema = require("../models/register")
const {getUser}=require("./register");
// const cloudinary = require('cloudinary').v2;
const session = require("express-session")

// exports.addIncome = async (req , res) => {
//           // console.log(req.body);

//           // const {title, amount , category , description ,date} = req.body;

//           // const income = IncomeSchema({
//           //                     title,
//           //                     amount,
//           //                     category,
//           //                     description,
//           //                     date
//           //           })

//           //           console.log(income)

//           //           try{
//           //                     if(!title || !date || !category || !description )
//           //                     {
//           //                               return res.status(400).json({message:'All fields are required '})
//           //                     }
//           //                     if(amount <= 0 || !amount === 'number')
//           //                     {
//           //                               return res.status(400).json({message:'amount must be positive '})
//           //                     }
//           //                     await income.save()
//           //                     res.status(200).json({message:'income added'})

//           //           }catch(e)
//           //           {
//           //                     console.log(e);
//           //           }

          
// }



exports.addIncome=async(req,res)=>{
          // const b = req.session.userid
               const vita= await    IncomeSchema({
                              incomeobj:req.params.userid,
                              title:req.body.title,
                              amount:req.body.amount,
                              category:req.body.category,
                             description:req.body.description,
                               date:req.body.date

                    });
          console.log(vita)
          const incomedata = vita.save();
          return res.send(incomedata);
          
}

exports.incobj=async(req,res)=>{
console.log(req.session.userid)
const indata = await IncomeSchema.find({incomeobj:req.session.userid})
// .populate('incomeobj');
  res.json(indata);
}

exports.getIncomes = async (req,res) =>{
          try{
            
            // const indata=await IncomeSchema.find({});
            // console.log(req.session.userid);
            // const ab=localStorage.getItem('id');
            // console.log(ab);
            // localStorage.setItem("uid",req.session.userid)
            console.log("ready")
            const indata = await IncomeSchema.find({incomeobj:req.params.userid})
            // .populate('incomeobj');
            res.send(indata);
          }catch(e)
          {
                    res.status(500).json({message:'server error'})
          }
}

exports.deleteIncomes = async (req,res) =>{
     
                    const {id} = req.params;
                   IncomeSchema.findByIdAndDelete(id)
                   .then((income)=>{
                    res.status(200).json({message : 'income deleted'})
                   })
                   .catch((e) =>{
                    res.status(500).json({message:'server error'})
                   })
         
}