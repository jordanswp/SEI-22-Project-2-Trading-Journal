import React from "react";

class Nav extends React.Component {
      render() {
            return (
        <nav class="navbar" style={{background:'#2b3d4c'}}>
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="/trades"><img src="/assets/logo.png" width="40" height="20" alt="MidasFX"/></a>
            </div>
    <ul class="nav navbar-nav">
        <li class="active"><a style={{color:'#809eb4'}} href="/trades">Home</a></li>
        <li class="dropdown">
            <a style={{color:'#809eb4'}} class="dropdown-toggle" data-toggle="dropdown" href="#">Useful Links
            <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="https://www.bloomberg.com/asia">Bloomberg</a></li>
              <li><a href="https://www.forexfactory.com/#closed">Forex Factory</a></li>
              <li><a href="https://www.tradingview.com/">Trading View</a></li>
              <li><a href="https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm">CFTC</a></li>
            </ul>
          </li>
        </ul>


    <ul class="nav navbar-nav navbar-right">
      <li><a href="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="/logout"><span class="glyphicon glyphicon-log-out"></span> Log Out</a></li>
    </ul>
  </div>
</nav>
            );
      }
}

export default Nav;