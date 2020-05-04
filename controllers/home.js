module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


   let homecontroller = (request, response) => {
            response.render('home');
        };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    homecontroller,
  };

};
