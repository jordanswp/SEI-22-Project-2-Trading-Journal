module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


   let showTradecontroller = (request, response) => {

        let user_name = request.cookies['user_name'];

        if (request.cookies['user_name'] === undefined) {
            response.redirect('/login');
        }else { let tradeId = request.params.id;

        db.trading.showtradeCallback(tradeId,(error, result) => {
        if(result === null) {
            response.send("failed");
        } else {
                const data = {
                    tradeId : request.params.id,
                    pair : result.pair,
                    date : result.date_traded,
                    trend : result.trend_direction,
                    direction : result.short_or_long,
                    lot : result.lot_size,
                    entryPrice : result.entry_price,
                    tp : result.take_profit,
                    sl : result.stoploss_price,
                    exit : result.exit_price,
                    pl : result.profit_or_loss,
                    comments : result.comments
                }
                // console.log("========================================"+tradeId+"===============================================================");
                response.render('show-trade', data);
        };
      });
    };
};
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    showTradecontroller,
  };

};
