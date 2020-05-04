module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR TWEEDR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

//*******************************************************   USER CODES   *******************************************************************************************************
  // require the LOGIN controller
  const midasFXLogin = require('./controllers/log-in')(allModels);

    //require the LOGOUT controller
  const midasFXlogOut = require('./controllers/logout')(allModels);

//logging in
  app.get('/login', midasFXLogin.loginCallback);
  app.post('/login', midasFXLogin.loginCheck);

    app.get("/register", midasFXLogin.getRegisterForm);

    app.post("/register", midasFXLogin.addUserControllerCallback);

    app.get("/logout", midasFXlogOut.logOutcontroller)

//******************************************************* Trading CODES ********************************************************************************************************
//require the HOME controller
  const home = require('./controllers/home')(allModels);

//require the EDIT TRADE controller
  const editTrade = require('./controllers/edit-trade')(allModels);

//require the SHOW TRADE controller
  const showTrade = require('./controllers/show-trade')(allModels);

// require the NEW TRADE controller
  const newTrade = require('./controllers/new-trade')(allModels);

    // require the ALL trades controller
  const allTrades = require('./controllers/all-trades')(allModels);

  //EDIT a trade
  app.get('/trades/:id/edit', editTrade.showEditForm);

    app.put('/trades/:id', editTrade.editTradeController);

    // require the DELETE trade controller
  const deleteTrade = require('./controllers/delete-trade')(allModels);

    //create a new TRADE
  app.get('/trades/new', newTrade.newTradeFormController);

  //view ONE particular trade
  app.get('/trades/:id', showTrade.showTradecontroller);

          //DELETE a trade
  app.delete('/trades/:id/', deleteTrade.deleteTradeControllerCallback);

    app.post('/trades', newTrade.newTradePost);

//view ALL trades
  app.get('/trades', allTrades.allTradescontroller);

//HOME
  app.get('/', home.homecontroller);
};
