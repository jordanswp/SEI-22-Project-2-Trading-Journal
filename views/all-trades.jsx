var React = require("react");

import Head from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Button from "./components/new-trade-button";

class AllTrades extends React.Component {
  render() {

    let trades = this.props.result;


       function renderTableData() {
      return trades.map((trade, index) => {
         const { id, pair, date_traded, trend_direction, short_or_long, lot_size, entry_price, take_profit, stoploss_price, exit_price, profit_or_loss, comments } = trade

    const editlink = '/trades/'+ id;

         return (
            <tr key={id}>
               <td><a href={editlink}>{id}</a></td>
               <td style={{color: '#6a98c8'}}>{pair}</td>
               <td>{date_traded}</td>
               <td>{trend_direction}</td>
               <td>{short_or_long}</td>
               <td style={{color: '#6a98c8'}}>{lot_size}</td>
               <td>${entry_price}</td>
               <td>${take_profit}</td>
               <td>${stoploss_price}</td>
               <td>${exit_price}</td>
               <td>${profit_or_loss}</td>
               <td>{comments}</td>
            </tr>
         )
      })
   }
    // let allTrades = trades.map((trade) => {
    //     return <li key={trade.id}>
    //                    {trade.pair} {trade.date_traded} {trade.trend_direction} {trade.short_or_long} {trade.lot_size} {trade.entry_price} {trade.take_profit} {trade.stoploss_price} {trade.exit_price} {trade.profit_or_loss} {trade.comments}
    //             </li>
    // })
    return (
      <html>
      <Head />
        <body style={{ background: '#f4f4f4'}}>
        <Nav />
        <hr style={{borderStyle: 'inset', borderWidth: '1px', width:'125px', position:'absolute', left:'120px', top:'137px'}}></hr>
        <div className="container" style={{background: 'white', boxShadow: '0 0 0.5px grey', marginTop:'50px'}}>
          <h3 style={{fontFamily: 'arial', color:'#5a7183', marginBottom: '30px', borderBottom:'1px solid #e6e6e6', paddingBottom:'10px'}}>All trades</h3>
          <div>
            <table class="table table-bordered" id='trades' style={{marginBottom:'40px'}}>
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
                  {renderTableData()}
               </tbody>
            </table>

            <Button />

          </div>
        </div>

          <Footer />

        </body>
      </html>
    );
  }
}

module.exports = AllTrades;
