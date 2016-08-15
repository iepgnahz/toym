/**
 * Created by jae on 16-8-13.
 */
import express from 'express';
import Menus from '../models/Menus';

let router = express.Router();
//查所有数据

  router.get('/', (req, res)=> {
    Menus.find((err,data)=>{
      res.send(data);
    })
  });

//查一条数据,把ID加到后面
router.get('/:id', (req, res)=> {
  Menus.findOne({
    _id: req.params.id
  }, (err, data)=> {
    res.send(data);
  });
});
//更新
router.put('/:id', (req, res)=> {
  Menus.update({
    _id: req.params.id
  }, req.body, (err, data)=> {
    res.send({
      error: err,
      data
    });
  });
});
//插入
router.post('/', (req, res, next)=> {
  new Menus({
    name: req.body.name,
    image: req.body.image
  }).save((err, person) => {
    if (err) {
      return next(err);
    } else {
      res.send(person);
    }
  });
});

router.delete('/:id', (req, res)=> {
  //删除
  Menus.findByIdAndRemove(req.params.id, (err)=> {
    res.send({
      error: err
    });
  });
});

module.exports = router;
// export default router;