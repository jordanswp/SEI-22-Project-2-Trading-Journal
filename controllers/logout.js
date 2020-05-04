module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


   let logOutcontroller = (request, response) => {
    let user_name = request.cookies['user_name'];

    if (request.cookies['user_name'] !== undefined){

        response.clearCookie('user_name');
        response.redirect('/login');
        };
    };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    logOutcontroller,
  };

};
