
const ExpenseSchema = require('../models/expenseModel')

// exports.addExpense = async (req , res) => { 
//           // console.log(req.body);

//           const {title, amount , category , description ,date} = req.body;

//           const income = ExpenseSchema({
//                               title,
//                               amount,
//                               category,
//                               description,
//                               date
//                     })

//                     console.log(income)

//                     try{
//                               if(!title || !date || !category || !description )
//                               {
//                                         return res.status(400).json({message:'All fields are required '})
//                               }
//                               if(amount <= 0 || !amount === 'number')
//                               {
//                                         return res.status(400).json({message:'amount must be positive '})
//                               }
//                               await income.save()
//                               res.status(200).json({message:'Expense added'})

//                     }catch(e)
//                     {
//                               console.log(e);
//                     }
// }

exports.addExpense=async(req,res)=>{
          
          const vita= await    ExpenseSchema({
                         expenseobj:req.params.userid,
                         title:req.body.title,
                         amount:req.body.amount,
                         category:req.body.category,
                        description:req.body.description,
                          date:req.body.date

               });

     
     const expensedata = vita.save();
     return res.send(expensedata);
     
}

exports.getExpense= async (req,res) =>{
          try{
                    const income = await ExpenseSchema.find({expenseobj:req.params.userid}).sort({createdAt:-1})
                    res.status(200).send(income)
          }catch(e)
          {
                    res.status(500).json({message:'server error'})
          }
}

exports.deleteExpense = async (req,res) =>{
     
                    const {id} = req.params;
                    ExpenseSchema.findByIdAndDelete(id)
                   .then((income)=>{
                    res.status(200).json({message : 'Expense deleted'})
                   })
                   .catch((e) =>{
                    res.status(500).json({message:'server error'})
                   })
          
}