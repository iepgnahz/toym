
const regRouter = (app)=> {
  app.use('/todos', require('./todos'));
  app.use('/people', require('./people'));
  
};

export default regRouter;