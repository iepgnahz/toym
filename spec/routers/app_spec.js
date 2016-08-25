import app from '../../app';
import request from 'supertest';

describe('get /menus', ()=> {
  it('should return the first menuItem', (done)=> {
    request(app)
        .get('/menus')
        .end((err, res)=> {
          if (err) {
            done.fail(err);
          } else{
            let temp=res.body.length;
            let result = [res.body[temp-1], res.body[temp-2]];
            let expectResult = [{
              _id: '57b1c147201d920964e2bc01',
              user:'zhangpei',
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

            }, {
              _id: '57b1c147201d920964e2bc02',
              user:'zhangpei',
              name: '鱼香肉丝',
              image: 'image/02.jpg',
              date: '2016-8-15',
              description: '没想到我的麻薯包这么受欢迎，又一大波麻薯包来袭啦。',
              materials: [
                {
                  source: '猪里脊肉',
                  amount: '300g'
                }, {
                  source: '冬笋',
                  amount: '80g'
                }, {
                  source: '黑木耳',
                  amount: '3朵'
                }, {
                  source: '鸡蛋清',
                  amount: '1个'
                }, {
                  source: '植物油',
                  amount: '50g'
                }, {
                  source: '淀粉',
                  amount: '15g'
                }, {
                  source: '小葱',
                  amount: '2棵'
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

            }];
            expect(result).toEqual(expectResult);
            done();
          }
        })

  });

  it("should return array length", (done)=> {
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
  })
});
describe('get /menus',()=>{
  it('should return menudetail item',(done)=>{
    request(app)
        .get('/menus/homePage')
        .end((err,res)=>{
          if(err){
            done.fail(err);
          }else{
            let result=[res.body[0],res.body[1],res.body[2]];
            let expectResult=[
               {
              name: '红烧鸡腿',
              user:'guoxin',
              image: 'image/08.jpg',
              date: '2016-8-21',
              description: '没想到我的麻薯包这么受欢迎，又一大波麻薯包来袭啦。',
              materials: [
                {
                  source: '猪里脊肉',
                  amount: '300g'
                }, {
                  source: '冬笋',
                  amount: '80g'
                }, {
                  source: '黑木耳',
                  amount: '3朵'
                }, {
                  source: '鸡蛋清',
                  amount: '1个'
                }, {
                  source: '植物油',
                  amount: '50g'
                }, {
                  source: '淀粉',
                  amount: '15g'
                }, {
                  source: '小葱',
                  amount: '2棵'
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

            }, {
              name: '糖醋里脊',
              user:'guoxin',
              image: 'image/03.jpg',
              date: '2016-8-22',
              description: '没想到我的麻薯包这么受欢迎，又一大波麻薯包来袭啦。',
              materials: [
                {
                  source: '猪里脊肉',
                  amount: '300g'
                }, {
                  source: '冬笋',
                  amount: '80g'
                }, {
                  source: '黑木耳',
                  amount: '3朵'
                }, {
                  source: '鸡蛋清',
                  amount: '1个'
                }, {
                  source: '植物油',
                  amount: '50g'
                }, {
                  source: '淀粉',
                  amount: '15g'
                }, {
                  source: '小葱',
                  amount: '2棵'
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

            }, {
              name: '干锅菜花',
              user:'zhangpei',
              image: 'image/05.jpg',
              date: '2016-8-18',
              description: '香港名厨吴百驹师傅名菜，无敌好吃，非常赞',
              materials: [
                {
                  source: '猪里脊肉',
                  amount: '300g'
                }, {
                  source: '冬笋',
                  amount: '80g'
                }, {
                  source: '黑木耳',
                  amount: '3朵'
                }, {
                  source: '鸡蛋清',
                  amount: '1个'
                }, {
                  source: '植物油',
                  amount: '50g'
                }, {
                  source: '淀粉',
                  amount: '15g'
                }, {
                  source: '小葱',
                  amount: '2棵'
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

            }];
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
              user:'zhangpei',
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
  it("should return err message",(done)=>{
    request(app)
        .post('/menus')
        .end((err,res)=>{
          expect(res.text).toEqual('success');
          done();
        });

  })
});

//登录与注册
describe('post/menus/loginTest',()=>{
  it('should post the password error',(done)=>{
    request(app)
        .post('/menus/loginTest')
        .type('json')
        .send( {
          username:'zhangpei',
          password:'zhangpei'
        })
        .end((err,res)=>{
          if(err) {
            done.fail(err);
          }else{
            let expectedResult='密码不正确';
            let result=res.body.err;
            expect(result).toEqual(expectedResult);
            done();
          }
        })
  });

  it('should post the user not exist',(done)=>{
    request(app)
        .post('/menus/loginTest')
        .type('json')
        .send({
          username:'yujuan',
          password:'zhangpei'
        })
        .end((err,res)=>{
          if(err){
            done.fail(err);
          }
          else{
            let expectedResult='该用户不存在';
            let result=res.body.err;
            expect(result).toEqual(expectedResult);
            done();
          }
        })
  });

  it('should post the usr',(done)=>{
    request(app)
        .post('/menus/loginTest')
        .type('json')
        .send({
          username:'zhangpei',
          password:'zhangpei123'
        })
        .end((err,res)=>{
          if(err){
            done.fail(err);
          }
          else{
            let expectedResult='zhangpei';
            let result=res.body.data;
            expect(result).toEqual(expectedResult);
            done();
          }
        })
  })
});
describe('post /menus/registerCheck',()=>{
  it('should post the error',(done)=>{
    request(app)
        .post('/menus/registerCheck')
        .type('form')
        .send({username:'zhangpei',password:'qq',tel:'111'})
        .end((err,res)=>{
          if(err){
            done.fail(err);
          }
          else{
            let expectedresult='用户名重复';
            let result=res.body.err;
            expect(result).toEqual(expectedresult);
            done();
          }
        })
  });
  it('should post the success',(done)=>{
    request(app)
        .post('/menus/registerCheck')
        .type('form')
        .send({username:'zhanglei123',password:'qq',tel:'111'})
        .end((err,res)=>{
          if(err){
            done.fail(err)
          }
          else{
            let expectedResult='success';//每测一次，本次测试数据用户名应该另写。因为此测试每写一次，数据就存入，就不能测试注册成功
            let result=res.body.data;
            expect(result).toEqual(expectedResult);
            done();
          }
        })
  })
});

//用户
describe('get /menus',()=>{
  it("should return user message with usename and telephone",(done)=>{
    request(app)
        .get('/menus/user/zhangpei')
        .end((err,res)=>{
          if(err){
            done.fail(err);
          }else{
            let result={username:'zhangpei',tel:'17791378995'};
            let expectResult={username:res.body.username,tel:res.body.tel};
            expect(expectResult).toEqual(result);
            done();
          }
        })
  })
});
//用户作品

describe('get /menus',() => {
  it("should return user works",(done) =>{
    request(app)
        .get('/menus/userWorks/zhangpei')
        .end((err,res)=>{
          if(err){
            done.fail(err);
          }else{
            let result=[{
              _id: '57b1c147201d920964e2bc01',
              user:'zhangpei',
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

            }, {
              _id: '57b1c147201d920964e2bc02',
              user:'zhangpei',
              name: '鱼香肉丝',
              image: 'image/02.jpg',
              date: '2016-8-15',
              description: '没想到我的麻薯包这么受欢迎，又一大波麻薯包来袭啦。',
              materials: [
                {
                  source: '猪里脊肉',
                  amount: '300g'
                }, {
                  source: '冬笋',
                  amount: '80g'
                }, {
                  source: '黑木耳',
                  amount: '3朵'
                }, {
                  source: '鸡蛋清',
                  amount: '1个'
                }, {
                  source: '植物油',
                  amount: '50g'
                }, {
                  source: '淀粉',
                  amount: '15g'
                }, {
                  source: '小葱',
                  amount: '2棵'
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

            }];
            let temp=res.body.length;
            let expectResult = [res.body[temp-1], res.body[temp-2]];
            expect(expectResult).toEqual(result);
            done();
          }
        })
  })
});