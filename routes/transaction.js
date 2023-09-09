const  router = require('express').Router();
const { addExpense, getExpense, deleteExpense } = require('../controller/expense');
const {addIncome, getIncomes, deleteIncomes, incobj}=require('../controller/income');
const { registerUser ,getUser,getUser1} = require('../controller/register');
// const session=require('express-session');
// const config=require('./config')

// router.use(session({secret:"secret",resave:true,saveUninitialized:true}))
router.post('/add-income/:userid' , addIncome)
          .get('/get-income/:userid',getIncomes)
          .get('/get-inck',incobj)
          .delete('/delete-income/:id',deleteIncomes)
          .post('/add-expense/:userid',addExpense)
          .get('/get-expense/:userid',getExpense)
          // .delete('/delete-expense/:id',deleteExpense)
          .post('/register',registerUser)
          .post('/getUser',getUser)
          .get('/getUser1',getUser1)

module.exports = router;