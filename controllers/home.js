module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


   let homecontroller = (request, response) => {
    let user_name = request.cookies['user_name'];

        if (request.cookies['user_name'] !== undefined){
            response.render('home');

       } else {
            response.render('home2');
        };
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
