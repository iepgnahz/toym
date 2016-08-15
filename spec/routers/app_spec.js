import app from '../../app';
import people from '../../server/routers/menus'
import request from 'supertest';

describe('get /', ()=> {
  it('should return menuItem', (done)=> {
    request(app)
        .get('/menus')
        .expect(
            [ { _id: '57b1c147201d920964e2bc96',
              name: '茴香卤面',
              image: 'image/01.jpg',
              date: '2016-8-14',
              description: '香港名厨吴百驹师傅名菜，无敌好吃，非常赞',
              __v: 0 },
              { _id: '57b1c147201d920964e2bc97',
                name: '鱼香肉丝',
                image: 'image/02.jpg',
                date: '2016-8-15',
                description: '没想到我的麻薯包这么受欢迎，又一大波麻薯包来袭啦。',
                __v: 0 },
              { _id: '57b1c147201d920964e2bc98',
                name: '糖醋里脊',
                image: 'image/03.jpg',
                date: '2016-8-16',
                description: '没想到我的麻薯包这么受欢迎，又一大波麻薯包来袭啦。',
                __v: 0 },
              { _id: '57b1c147201d920964e2bc99',
                name: '乌东面',
                image: 'image/04.jpg',
                date: '2016-8-17',
                description: '香港名厨吴百驹师傅名菜，无敌好吃，非常赞',
                __v: 0 },
              { _id: '57b1c147201d920964e2bc9a',
                name: '干锅菜花',
                image: 'image/05.jpg',
                date: '2016-8-18',
                description: '香港名厨吴百驹师傅名菜，无敌好吃，非常赞',
                __v: 0 },
              { _id: '57b1c147201d920964e2bc9b',
                name: '冰棍冰棍',
                image: 'image/06.jpg',
                date: '2016-8-19',
                description: '香港名厨吴百驹师傅名菜，无敌好吃，非常赞',
                __v: 0 },
              { _id: '57b1c147201d920964e2bc9c',
                name: '清蒸鲜鱼',
                image: 'image/07.jpg',
                date: '2016-8-20',
                description: '没想到我的麻薯包这么受欢迎，又一大波麻薯包来袭啦。',
                __v: 0 },
              { _id: '57b1c147201d920964e2bc9d',
                name: '红烧鸡腿',
                image: 'image/08.jpg',
                date: '2016-8-21',
                description: '没想到我的麻薯包这么受欢迎，又一大波麻薯包来袭啦。',
                __v: 0 },
              { _id: '57b1c147201d920964e2bc9e',
                name: '糖醋里脊',
                image: 'image/03.jpg',
                date: '2016-8-22',
                description: '没想到我的麻薯包这么受欢迎，又一大波麻薯包来袭啦。',
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