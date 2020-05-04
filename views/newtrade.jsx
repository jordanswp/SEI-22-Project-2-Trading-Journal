var React = require("react");

import Head from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";

class NewTrade extends React.Component {
  render() {
    return (
      <html>
      <Head />

        <body style={{ background: '#f4f4f4'}}>
        <Nav />
        <div className="container" style={{background: 'white', boxShadow: '0 0 0.5px grey'}}>
              <h3 style={{fontFamily: 'arial', color:'#5a7183'}}>Create New Trade</h3>
              <form method='POST' action='/trades'>


            <div className="row">
                <div className="col-xs-6 col-md-4">
                    <p>Pair</p>
                    <input type='text' name='pair' placeholder="pair"/>
                    </div>

                <div className="col-xs-6 col-md-4">
                    <p>Date</p>
                    <input type='date' name='date_traded'/>
                </div>

                <div className="col-xs-6 col-md-4">
                <p>Trend</p>
                <select name='trend_direction'>

                    <option value="Undefined">Choose One</option>

                    <option value="Downtrend">Downtrend</option>

                    <option value="Uptrend">Uptrend</option>

                    <option value="Channeling">Channeling</option>
                </select>
                </div>
            </div>



            <div className="row"  style={{marginTop:'15px'}}>
                <div className="col-xs-6 col-md-4">
                <p>Short or Long</p>
                <select name='short_or_long'>

                    <option value="Undefined">Choose One</option>

                    <option value="Short">Short</option>

                    <option value="Long">Long</option>
                </select>
                </div>

                <div className="col-xs-6 col-md-4">
                <p>Lot Size</p>
                <input type='text' name='lot_size' placeholder="Lot Size"/>
                </div>

                <div className="col-xs-6 col-md-4">
                <p>Entry Price</p>
                <input type='text' name='entry_price' placeholder="Entry Price"/>
                </div>
            </div>



            <div className="row"  style={{marginTop:'15px'}}>
                <div className="col-xs-6 col-md-4">
                <p>Take Profit</p>
                <input type='text' name='take_profit' placeholder="Take Profit"/>
                </div>

                <div className="col-xs-6 col-md-4">
                <p>Stop Loss</p>
                <input type='text' name='stoploss_price' placeholder="Stop Loss"/>
                </div>

                <div className="col-xs-6 col-md-4">
                <p>Exit Price</p>
                <input type='text' name='exit_price' placeholder="Exit Price"/>
                </div>
            </div>


            <div style={{marginTop:'15px'}}>
                <p>P/L</p>
                <input type='text' name='profit_or_loss' placeholder="P/L"/>
            </div>



                <p  style={{marginTop:'15px'}}>Comments</p>
                <input type='text' className="form-control" name='comments' placeholder="Comments" />
                <div>
                <input type='submit' class="btn btn-primary" style={{marginTop:'30px', marginBottom:'15px'}} value='Submit Trade'/>
                </div>
              </form>
            </div>



          <Footer />
        </body>
      </html>
    );
  }
}

module.exports = NewTrade;