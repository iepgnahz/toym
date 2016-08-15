import app from '../../app';
import people from '../../server/routers/menus'
import request from 'supertest';

describe('get /', ()=> {
  it('should return menuItem', (done)=> {
    request(app)
        .get('/menus')
        .expect(
            [ { _id: '57b190d21af9491c475516c3',
              name: '糖醋里脊',
              image: 'image/03.jpg',
              __v: 0 },
              { _id: '57b190d21af9491c475516c1',
                name: '宫保鸡丁',
                image: 'image/01.jpg',
                __v: 0 },
              { _id: '57b190d21af9491c475516c2',
                name: '鱼香肉丝',
                image: 'image/02.jpg',
                __v: 0 } ]
        )
        .end((err, res)=> {
          if(err) {
            done.fail(err);
          } else {
            done();
          }
        })

  })
});