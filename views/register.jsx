var React = require("react");

import Head from "./components/header";
import Nav3 from "./components/homelogoutnav";
import Footer2 from "./components/homefooter";

class register extends React.Component {
  render() {
    return (
      <html>
      <Head />

        <body style={{backgroundImage:`url('/assets/registerbg.jpg')`, backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>

        <Nav3 />
        <div className="container" style={{background: 'white' }}>
                <div class="row">
                    <div class="col-sm-4 col-md-offset-3" style={{backgroundColor:'white', boxShadow: '0 0 50px grey', position:'absolute', top:'200px'}}>
                        <h1 style={{textAlign:'center'}}>Register for MidasFX</h1>
                        <div>

                        <form action="/register" method="post">
                                <div class="form-group has-feedback">
                                    <label class="control-label">Username</label>
                                    <input className="form-control" name="username" placeholder="Username"/>
                                    <i class="glyphicon glyphicon-user form-control-feedback"></i>
                                </div>



                                <div class="form-group has-feedback">
                                    <label class="control-label">Password</label>
                                    <input className="form-control" type="password" name="password" placeholder="Password"/>
                                    <i class="glyphicon glyphicon-lock form-control-feedback"></i>
                                </div>


                                <p>
                                    <input className="btn btn-info btn-block" type="Submit"/>
                                </p>
                        </form>
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

module.exports = register;