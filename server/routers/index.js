const regRouter = (app)=> {
  app.use('/menus', require('./menus'));
};

export default regRouter;