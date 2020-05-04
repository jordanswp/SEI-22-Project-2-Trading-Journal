/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

//*******************************************************   USER CODES   *******************************************************************************************************
  //log in
  let userCheck = (inputUsername, inputPassword, callback) => {

    let query = "SELECT * FROM users WHERE username=" + "'" + inputUsername + "'" + "AND password=" + "'" + inputPassword + "';";

    dbPoolInstance.query(query, (error, queryResult) => {
      if ( error ) {
        callback(error, null);
      } else {
        if( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows);
        }else{
            callback(null, null);
        };
      };
    });
  };

  let addUser = (userInput, passwordInput, callback) => {


        let query = `INSERT INTO users(username, password) VALUES ($1, $2) RETURNING *`

        let values = [userInput, passwordInput];

        dbPoolInstance.query(query, values, (error, result) => {
            callback(error, result.rows[0]);
        })
    };


//******************************************************* Trading CODES ********************************************************************************************************

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

    //SHOW one trade
  let showtradeCallback = (tradeId, callback) => {

    let query = "SELECT * FROM trades WHERE id=" + tradeId + ";";

    dbPoolInstance.query(query, (error, queryResult) => {
      callback(error, queryResult.rows[0]);
      });
    };

        //DELETE one trade
  let deletetradeCallback = (tradeId, callback) => {

    let query = "DELETE FROM trades WHERE id=" + tradeId + ";";

    dbPoolInstance.query(query, (error, queryResult) => {
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
    userCheck,
    alltradesCallback,
    createtradeCallback,
    showtradeCallback,
    edittradeCallback,
    deletetradeCallback,
    addUser,
  };
};
