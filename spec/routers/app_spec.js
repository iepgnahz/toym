import app from '../../app';
import request from 'supertest';

describe('get /demo', ()=> {
  it('should return obj', (done)=> {
    request(app)
        .get('/demo')
        .expect({
          error: null,
          data: 12334
        })
        .end((err)=> {
          if(err) {
            done.fail(err);
          } else {
            done();
          }
        })

  })
});