var React = require("react");

class AllTrades extends React.Component {
  render() {
    let trades = this.props.result;
    let allTrades = trades.map((trade) => {
        return <li key={trade.id}>
                       {trade.pair} {trade.date_traded} {trade.trend_direction} {trade.short_or_long} {trade.lot_size} {trade.entry_price} {trade.take_profit} {trade.stoploss_price} {trade.exit_price} {trade.profit_or_loss} {trade.comments}
                </li>
    })
    return (
      <html>
      <head>
        <title>MidasFX</title>
      </head>
        <body>
          <h1>All Trades</h1>
          <ol>{allTrades}</ol>
        </body>
      </html>
    );
  }
}

module.exports = AllTrades;
