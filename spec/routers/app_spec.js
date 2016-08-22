import app from '../../app';
import request from 'supertest';

describe('get /menus', ()=> {
  it('should return the first menuItem', (done)=> {
    request(app)
        .get('/menus')
        .end((err, res)=> {
          if (err) {
            done.fail(err);
          } else {
            let result = res.body.length;
            let expectResult = 9;

            expect(result).toEqual(expectResult);
            done();
          }
        })

  });


});

describe('get /menus',()=>{
  it('should return homePage item',(done)=>{
    request(app)
        .get('/menus/homePage')
        .end((err,res)=>{
          if(err){
            done.fail(err);
          }
          else{
            let result = res.body.length;
            let expectResult = 3;
            expect(result).toEqual(expectResult);
            done();
          }

        })
        
  })
});

describe('get /menus', ()=> {
  it('should return identify menudetail item', (done)=> {
    request(app)
        .get('/menus/57b1c147201d920964e2bc01')
        .end((err, res)=> {
          if (err) {
            done.fail(err);
          } else {
            let result = res.body;
            let expectResult = {
              _id: '57b1c147201d920964e2bc01',
              name: '茴香卤面',
              image: 'image/01.jpg',
              date: '2016-8-14',
              description: '香港名厨吴百驹师傅名菜，无敌好吃，非常赞',
              materials: [{
                source: '茴香苗',
                amount: '250g'
              }, {
                source: '鸡蛋',
                amount: '2个'
              }, {
                source: '苗条',
                amount: '250g'
              }, {
                source: '油',
                amount: '适量'
              }, {
                source: '盐',
                amount: '适量'
              }, {
                source: '葱花',
                amount: '适量'
              }
              ],
              __v: 0,
              steps: '1. 通脊片成片然后码放整齐准备切丝，如果有时候可以冻一下，然后再切丝会非常好切而且会非常工整\n' +
              '2. 切成丝然后泡在水里面，这样可以把肉丝里的血水泡出来，多换几次水，出来的肉丝会非常洁白漂亮\n'
              + '3. 泡白后放在笊篱里滗水，不用太干，因为肉丝需要有水，不然炒出来不会嫩了\n'
              + '4. 然后加少许盐和料酒腌下，再放蛋清抓匀，最后放干淀粉，然后放少许油封住，这样肉丝不会脱浆\n'
              + '5. 用好点的泡红椒，颜色和味道都会不同的\n'
              + '6. 所有调料的备齐\n'
              + '7. 泡红椒去籽剁碎，越烂越好，然后葱姜蒜切米备用，冬笋切和肉丝差不多的丝，木耳切丝\n'
              + '8. 五成热时下泡椒和浆好的肉丝炒开，炒开立刻放葱姜蒜炒香，然后放入焯过的冬笋丝和木耳丝，最后倒入味汁，再炒几下就可以了\n'
            };
            expect(result).toEqual(expectResult);
            done();
          }
        })

  })
});

describe('post /menus',()=>{
  it("should return err message",()=>{
    request(app)
        .post('/menus')
        .end((err,res)=>{
          expect(err).toEqual(null);
        });

  })
});