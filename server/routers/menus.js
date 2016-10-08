import express from 'express';

import Menu from '../models/Menu';

const router = express.Router();

//返回所有图片并按更新排序

router.get('/',(req,res)=>{
  Menu.find({}).sort({_id:-1}).exec(function (err,data){
    res.send(data);
  })
});

router.get('/homePage',(req,res) =>{
  Menu.find({}).sort({_id:-1}).limit(3).exec(function (err,data) {
    res.send(data);
  });
});

//根据id 返回一条数据
router.get('/:id',(req,res)=>{
  Menu.findOne({_id:req.params.id},(err,doc)=>{
    res.status(200).send(doc);
  })
});

//根据用户id 返回一条数据
router.get('/user/:id',(req,res)=>{
  Menu.findOne({username:req.params.id},(err,doc)=>{
    res.status(200).send(doc);
  })
});

module.exports = router;

    