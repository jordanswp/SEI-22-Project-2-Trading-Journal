module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let showEditForm = (request, response) => {

        let user_name = request.cookies['user_name'];

        if (request.cookies['user_name'] === undefined) {
            response.redirect('/login');
        } else {
        const data = {
        id : request.params.id
    }
    response.render('edit-trade',data);

  };
};
  let editTradeController = (request, response) => {

        let tradeId = request.params.id;

//passing these data into models, these data are what the user types into the boxes
        let input1 = request.body.pair;
        let input2 = request.body.date_traded;
        let input3 = request.body.trend_direction;
        let input4 = request.body.short_or_long;
        let input5 = request.body.lot_size;
        let input6 = request.body.entry_price;
        let input7 = request.body.take_profit;
        let input8 = request.body.stoploss_price;
        let input9 = request.body.exit_price;
        let input10 = request.body.profit_or_loss;
        let input11 = request.body.comments;

        db.trading.edittradeCallback(input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, tradeId,(error, result) => {
            if(result === null) {
                response.send("failed");
        }else {
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
    editTradeController,
    showEditForm,
  };

}
