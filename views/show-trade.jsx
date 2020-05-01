var React = require("react");

class Show extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h1>Trade Information</h1>
          <p>{this.props.pair}</p>
          <p>{this.props.date}</p>
          <p>{this.props.trend}</p>
          <p>{this.props.direction}</p>
          <p>{this.props.lot}</p>
          <p>{this.props.entryPrice}</p>
          <p>{this.props.tp}</p>
          <p>{this.props.sl}</p>
          <p>{this.props.exit}</p>
          <p>{this.props.pl}</p>
          <p>{this.props.comments}</p>
          <p>{this.props.lot}</p>
        </body>
      </html>
    );
  }
}

module.exports = Show;

