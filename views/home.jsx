var React = require("react");

import Head from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";

class Home extends React.Component {
  render() {

    return (
      <html>
      <Head />
        <body style={{ background: '#f4f4f4'}}>
        <Nav />
        <p>hello</p>
          <Footer />
        </body>
      </html>
    );
  }
}

module.exports = Home;