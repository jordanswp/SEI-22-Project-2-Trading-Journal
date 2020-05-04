module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


  // let loginCallback = (request, response) => {
  //       response.render('login');
  // };

  let loginCallback = (request, response) => {
        let user_name = request.cookies['user_name'];

        if (request.cookies['user_name'] !== undefined){
            response.redirect('/trades');

       } else {
            response.render('login');
        };
    };

  // let getRegisterForm = (request, response) => {
  //       response.render('register');
  //   };

  let getRegisterForm = (request, response) => {
        let user_name = request.cookies['user_name'];

        if (request.cookies['user_name'] !== undefined){
            response.redirect('/trades');

       } else {
            response.render('register');
        };
    };

  let addUserControllerCallback = (request, response) => {

        let userInput = request.body.username;
        let passwordInput = request.body.password;
        db.trading.addUser(userInput, passwordInput,(error, result) => {
            response.redirect('/trades')
        });
    };

  let loginCheck = (request, response) => {
        let inputUsername = request.body.username;
        let inputPassword = request.body.password;

        db.trading.userCheck(inputUsername, inputPassword, (error, result) => {
        if(result === null) {
            response.send("login failed, please try again");
        } else {
            if (result[0].password === inputPassword && result[0].username === inputUsername) {
                let user_name = result[0].username;
                // let userLog = user_name;
                response.cookie('user_name', user_name);
                // response.cookie('logged in', userLog);
                response.redirect('/');
            } else {
                response.send("login failed, please try again");
            };
        };
      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    loginCallback,
    loginCheck,
    getRegisterForm,
    addUserControllerCallback,
  };

}
