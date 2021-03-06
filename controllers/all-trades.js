module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


   let allTradescontroller = (request, response) => {
    let user_name = request.cookies['user_name'];

    if (request.cookies['user_name'] !== undefined){

        db.trading.alltradesCallback((error, result) => {

        if(result === null) {
            response.send("failed");

        } else {
                response.render('all-trades', {result});
        };
      });
    } else {
            response.status(403);
            response.redirect('/login');
        };
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
