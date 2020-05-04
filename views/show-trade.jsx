var React = require("react");

import Head from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";

class Show extends React.Component {
  render() {
    const deletelink = '/trades/'+ this.props.tradeId + "?_method=delete";
    const editlink = '/trades/'+ this.props.tradeId + '/edit';
    return (
      <html>
        <Head />
        <body  style={{ background: '#f4f4f4'}}>
        <Nav />
        <div className="container" style={{background: 'white', boxShadow: '0 0 0.5px grey', marginTop:'50px'}}>
              <h3 style={{fontFamily: 'arial', color:'#5a7183', marginTop:'30px'}}>Trade Information</h3>
              <table class="table table-bordered" style={{marginTop:'30px'}}>
            <thead>
              <tr>
                <th style={{color: '#706a5e'}}>Trade ID</th>
                <th style={{color: '#706a5e'}}>Pair</th>
                <th style={{color: '#706a5e'}}>Date Traded</th>
                <th style={{color: '#706a5e'}}>Trend</th>
                <th style={{color: '#706a5e'}}>Direction</th>
                <th style={{color: '#706a5e'}}>Lot Size</th>
                <th style={{color: '#706a5e'}}>Entry Price</th>
                <th style={{color: '#706a5e'}}>Take Profit</th>
                <th style={{color: '#706a5e'}}>Stop Loss</th>
                <th style={{color: '#706a5e'}}>Exit Price</th>
                <th style={{color: '#706a5e'}}>P/L</th>
                <th style={{color: '#706a5e'}}>Comments</th>
              </tr>
            </thead>

              <tbody>
                  <tr>
                    <td>{this.props.tradeId}</td>
                    <td>{this.props.pair}</td>
                    <td>{this.props.date}</td>
                    <td>{this.props.trend}</td>
                    <td>{this.props.direction}</td>
                    <td>{this.props.lot}</td>
                    <td>${this.props.entryPrice}</td>
                    <td>${this.props.tp}</td>
                    <td>${this.props.sl}</td>
                    <td>${this.props.exit}</td>
                    <td>${this.props.pl}</td>
                    <td>{this.props.comments}</td>
                  </tr>
                </tbody>
              </table>



              <form method="POST" action={deletelink}>

                <a href={editlink}> <button type="button" className="btn btn-primary" style={{marginTop:'15px', marginBottom:'20px'}}>Edit Trade</button></a>
                <span>&emsp;
                    <input type="submit" className="btn btn-danger" style={{marginTop:'15px', marginBottom:'20px'}} value="Delete Trade"/>
                </span>
              </form>

          </div>
          <Footer />
        </body>
      </html>
    );
  }
}

module.exports = Show;

