module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


   let allTradescontroller = (request, response) => {

        db.trading.alltradesCallback((error, result) => {
        if(result === null) {
            response.send("failed");
        } else {
                response.render('all-trades', {result});
        };
      });
    };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    allTradescontroller,
  };

};
