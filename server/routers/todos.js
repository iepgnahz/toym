import express from 'express';
import Todo from '../models/Todo';

let router = express.Router();
//查所有数据
router.get('/', (req, res)=> {
  Todo.find((err, data)=> {
    res.send(data);
  });
});
//查一条数据
router.get('/:id', (req, res)=> {
  Todo.findOne({
    _id: req.params.id
  }, (err, data)=> {
    res.send(data);
  });
});
//更新
router.put('/:id', (req, res)=> {
  Todo.update({
    _id: req.params.id
  }, {
    text: req.body.text
  }, (err, data)=> {
    res.send({
      error: err,
      data
    });
  });
});
//插入
router.post('/', (req, res, next)=> {
  new Todo({
    text: req.body.text
  }).save((err, todo) => {
    if(err) {
      return next(err);
    } else {
      res.send(todo);
    }
  });
});

router.delete('/:id', (req, res)=> {
  //删除
  Todo.findByIdAndRemove(req.params.id, (err)=> {
    res.send({
      error: err
    });
  });
});

module.exports = router;
// export default router;