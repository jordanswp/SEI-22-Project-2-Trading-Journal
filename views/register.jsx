var React = require("react");

class register extends React.Component {
  render() {
    return (
      <html>
        <body>
            <h1>Register for MidasFX</h1>

            <form action="/register" method="post">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                />


              <input
                type="text"
                name="password"
                placeholder="Password"
              />


              <button type="submit">
                Register
              </button>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = register;