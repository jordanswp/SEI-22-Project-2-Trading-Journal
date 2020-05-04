import React from "react";

class Button extends React.Component {
      render() {
            return (
                  <div>
                  <a href="/trades/new"> <button type="button" className="btn btn-primary" style={{marginBottom:'20px'}}>Create New Trade</button></a>
                  </div>
            );
      }
}

export default Button;