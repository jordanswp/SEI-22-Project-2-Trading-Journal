var React = require("react");

class EditTrade extends React.Component {
  render() {
    const tradeId = this.props.id;
    const postRoute = '/trades/'+tradeId+'?_method=put'
    return (
      <html>
      <head>
      <title>MidasFX</title>
      </head>
        <body>
          <h3>Edit Trade</h3>
          <form method='POST' action={postRoute}>

            <p>Pair</p>
            <input type='text' name='pair' placeholder="pair"/>

            <p>Date</p>
            <input type='date' name='date_traded'/>

            <p>Trend</p>
            <select name='trend_direction'>

                <option value="Undefined">Choose One</option>

                <option value="Downtrend">Downtrend</option>

                <option value="Uptrend">Uptrend</option>

                <option value="Channeling">Channeling</option>
            </select>

            <p>Short or Long</p>
            <select name='short_or_long'>

                <option value="Undefined">Choose One</option>

                <option value="Short">Short</option>

                <option value="Long">Long</option>
            </select>

            <p>Lot Size</p>
            <input type='text' name='lot_size' placeholder="Lot Size"/>

            <p>Entry Price</p>
            <input type='text' name='entry_price' placeholder="Entry Price"/>

            <p>Take Profit</p>
            <input type='text' name='take_profit' placeholder="Take Profit"/>

            <p>Stop Loss</p>
            <input type='text' name='stoploss_price' placeholder="Stop Loss"/>

            <p>Exit Price</p>
            <input type='text' name='exit_price' placeholder="Exit Price"/>

            <p>P/L</p>
            <input type='text' name='profit_or_loss' placeholder="P/L"/>

            <p>Comments</p>
            <input type='text' name='comments' placeholder="Comments"/>
            <div>
            <input type='submit' value='Submit'/>
            </div>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = EditTrade;