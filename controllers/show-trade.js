module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


   let showTradecontroller = (request, response) => {

        let tradeId = request.params.id;

        db.trading.showtradeCallback(tradeId,(error, result) => {
        if(result === null) {
            response.send("failed");
        } else {
            // console.log(result.pair);
                const data = {
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
                response.render('show-trade', data);
        };
      });
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
