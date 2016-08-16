const regRouter = (app)=> {
  app.use('/menus', require('./menus'));
  //app.use('menus',router);
};

export default regRouter;