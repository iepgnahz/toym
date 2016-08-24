import express from 'express';
import Menus from '../models/Menus';

let router = express.Router();
//查所有数据

router.get('/', (req, res)=> {
  Menus.find({}).sort({_id:-1}).limit(9).exec(function(err, data) {
    res.send(data);
  });
});
router.get('/homePage',(req,res) =>{
  Menus.find({}).sort({_id:-1}).limit(3).exec(function (err,data) {
    res.send(data);
  });
});

router.get('/:id', (req, res)=> {
  Menus.findOne({_id: req.params.id}, (err, doc)=> {
    res.send(doc);
  });
});

router.post('/',(req,res)=>{
  new Menus(req.body).save((err)=>{
    if(err) {
      res.send('fail');
    } else {
      res.send('success');
    }
  });
});

module.exports = router;
// export default router;