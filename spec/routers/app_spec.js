import app from '../../app';
import request from 'supertest';

describe('get /menus', ()=> {
  it('should return the first menuItem', (done)=> {
    request(app)
        .get('/menus')
        .end((err, res)=> {
          if(err) {
            done.fail(err);
          } else {
            let result = [res.body[0],res.body[1],res.body[2]];
            let expectResult = [{
              _id:'57b1c147201d920964e2bc01',
              name: '茴香卤面',
              image: 'image/01.jpg',
              date: '2016-8-14',
              description: '香港名厨吴百驹师傅名菜，无敌好吃，非常赞',
              __v: 0 },{
              _id:'57b1c147201d920964e2bc02',
              name: '鱼香肉丝',
              image: 'image/02.jpg',
              date: '2016-8-15',
              description: '没想到我的麻薯包这么受欢迎，又一大波麻薯包来袭啦。',
              __v: 0 },{
              _id: '57b1c147201d920964e2bc03',
              name: '糖醋里脊',
              image: 'image/03.jpg',
              date: '2016-8-16',
              description: '没想到我的麻薯包这么受欢迎，又一大波麻薯包来袭啦。',
              __v: 0 }
                
          ];
            expect(result).toEqual(expectResult);
            done();
          }
        })

  });
  
});