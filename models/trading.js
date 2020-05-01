/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  // //log in
  // let userCheck = (requestUser, call) => {
  //   let query = "SELECT * from users where name="+"'"+requestUser+"'" ;
  //   dbPoolInstance.query(query, (error, queryResult) => {
  //     if ( error ) {
  //       call(error, null);
  //     } else {
  //       if( queryResult.rows.length > 0 ){
  //           call(null, queryResult.rows);
  //       }else{
  //           call(null, null);
  //       };
  //     };
  //   });
  // };

//show all past trades
  let alltradesCallback = (callback) => {
    let query = "SELECT * from trades ORDER BY id ASC;";
    dbPoolInstance.query(query, (error, queryResult) => {
      callback(error, queryResult.rows);
      });
    };

        //edit one trade
  let edittradeCallback = (input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11,tradeId, callback) => {


    let query = "UPDATE trades SET pair='"+input1 +"', date_traded='"+ input2 +"', trend_direction='"+ input3 +"', short_or_long='" + input4 +"', lot_size='"+ input5 +"', entry_price='"+ input6 +"', take_profit='"+ input7 +"', stoploss_price='"+ input8 +"', exit_price='"+ input9 +"', profit_or_loss='"+ input10 +"', comments='"+ input11 +"' WHERE id=" + tradeId +" RETURNING *;";

    dbPoolInstance.query(query, (error, queryResult) => {
              console.log(query);
      callback(error, queryResult.rows[0]);
      });
    };

    //view one trade
  let showtradeCallback = (tradeId, callback) => {

    let query = "SELECT * FROM trades WHERE id=" + tradeId + ";";

    dbPoolInstance.query(query, values, (error, queryResult) => {
      callback(error, queryResult.rows[0]);
      });
    };

//create new trade
  let createtradeCallback = (pairInput, dateInput, trendInput, directionInput, lotInput, entryPriceInput, tpInput, slInput, exitInput, profitOrLossInput, commentsInput, callback) => {

    let query = "INSERT INTO trades (pair, date_traded, trend_direction, short_or_long, lot_size, entry_price, take_profit, stoploss_price, exit_price, profit_or_loss, comments) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *";

     const values = [pairInput,
                    dateInput,
                    trendInput,
                    directionInput,
                    lotInput,
                    entryPriceInput,
                    tpInput,
                    slInput,
                    exitInput,
                    profitOrLossInput,
                    commentsInput];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      callback(error, queryResult.rows[0]);
      });
    };


  return {
    // userCheck,
    alltradesCallback,
    createtradeCallback,
    showtradeCallback,
    edittradeCallback,
  };
};
