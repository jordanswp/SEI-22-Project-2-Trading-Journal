module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

       let deleteTradeControllerCallback = (request, response) => {

        let tradeId = request.params.id;

        db.trading.deletetradeCallback(tradeId,(error, result) => {
        if(result === null) {
            response.send("failed");
        } else {
             response.redirect('/trades');
            }
      });
    };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    deleteTradeControllerCallback,
  };

}
