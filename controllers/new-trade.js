module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


  // let newTradeFormController = (request, response) => {

  //       response.render('newtrade',);
  // };

    let newTradeFormController = (request, response) => {

        let user_name = request.cookies['user_name'];

        if (request.cookies['user_name'] !== undefined) {
        response.render('newtrade',);
    } else {
            response.render('login');
        };
  };

  let newTradePost = (request, response) => {

        // let userId = request.cookies.user_id;
        let pairInput = request.body.pair;
        let dateInput = request.body.date_traded;
        let trendInput = request.body.trend_direction;
        let directionInput = request.body.short_or_long;
        let lotInput = request.body.lot_size;
        let entryPriceInput = request.body.entry_price;
        let tpInput = request.body.take_profit;
        let slInput = request.body.stoploss_price;
        let exitInput = request.body.exit_price;
        let profitOrLossInput = request.body.profit_or_loss;
        let commentsInput = request.body.comments;

        db.trading.createtradeCallback(pairInput, dateInput,
            trendInput, directionInput,
            lotInput, entryPriceInput,
            tpInput, slInput,
            exitInput, profitOrLossInput,
            commentsInput,(error, result) => {
        if(result === null) {
            response.send("failed")
        } else {
            response.redirect('/trades');
        };
      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    newTradeFormController,
    newTradePost,
  };

}
