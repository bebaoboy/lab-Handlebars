const express = require('express');
const route = express.Router();
const controller = require('../controllers/task2Controller');
route.get('/', (req,res) =>
{
    controller.show(req,res);
})
route.post('/', (req,res)=>
{
    controller.showPost(req,res);
})
route.get('/task2', (req, res)=>{
  
    res.render('task2',  {title: 'Jars Saving'});
})
module.exports= route; 