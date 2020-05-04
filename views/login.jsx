var React = require('react');

import Head from "./components/header";
import Nav from "./components/nav";
import Footer2 from "./components/homefooter";

class Login extends React.Component {
  render() {

    return (
      <html>
      <Head />
        <body style={{backgroundImage:`url('/assets/bg.jpg')`, backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>
        <Nav />
            <div className="container" style={{background: 'white' }}>
                <div class="row">
                    <div class="col-sm-4 col-md-offset-3" style={{backgroundColor:'white', boxShadow: '0 0 50px grey', position:'absolute', top:'200px'}}>
                        <h1 style={{textAlign:'center'}}>Login</h1>
                        <div>
                            <form action="/login" method="POST">

                                <div class="form-group has-feedback">
                                    <label class="control-label">Username</label>
                                    <input className="form-control" name="username" placeholder="Username"/>
                                    <i class="glyphicon glyphicon-user form-control-feedback"></i>
                                </div>

                                <div class="form-group has-feedback">
                                    <label class="control-label">Password</label>
                                    <input className="form-control" name="password" placeholder="Password"/>
                                    <i class="glyphicon glyphicon-lock form-control-feedback"></i>
                                </div>

                                <p>
                                    <input className="btn btn-info btn-block" type="submit"/>
                                </p>
                            </form>
                                <p>
                                    Don't have an account? <a href="/register">Sign Up Here</a>
                                </p>
                        </div>
                    </div>
                  </div>
              </div>
          <Footer2 />
        </body>
      </html>
    );
  }
}

module.exports = Login;