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

//   // require the LOGIN controller
//   const tweedrLogin = require('./controllers/log-in')(allModels);

// //logging in
//   app.get('/login', tweedrLogin.loginCallback);
//   app.post('/login', tweedrLogin.loginCheck);

//require the EDIT TRADE controller
  const editTrade = require('./controllers/edit-trade')(allModels);

//require the SHOW TRADE controller
  const showTrade = require('./controllers/show-trade')(allModels);

// require the NEW TRADE controller
  const newTrade = require('./controllers/new-trade')(allModels);

    // require the ALL trades CONTROLLER
  const allTrades = require('./controllers/all-trades')(allModels);

  //create a new TRADE
  app.get('/trades/new', newTrade.newTradeFormController);

    app.post('/trades', newTrade.newTradePost);

//EDIT a trade
  app.get('/trades/:id/edit', editTrade.showEditForm);

    app.put('/trades/:id', editTrade.editTradeController);

//view ONE particular trade
  app.get('/trades/:id', showTrade.showTradecontroller);

//view ALL trades
  app.get('/trades', allTrades.allTradescontroller);
};
