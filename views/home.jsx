var React = require("react");

import Head from "./components/header";
import Nav2 from "./components/homenav";
import Footer2 from "./components/homefooter";

class Home extends React.Component {
  render() {

    return (
      <html>
      <Head />
        <body style={{backgroundImage:`url('/assets/bg9.jpg')`, backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>
        <Nav2 />
        <div style={{background:'transparent'}}>
                      <h1 style={{color:'white', fontFamily:'Futura', textShadow:'1px 1px grey', textAlign:'center'}}>MidasFX™</h1>
        </div>
          <Footer2 />
        </body>
      </html>
    );
  }
}

module.exports = Home;