import React from "react";

class Nav2 extends React.Component {
      render() {
            return (
        <nav class="navbar" style={{background:'transparent'}}>
          <div class="container-fluid">
            <div class="navbar-header">

            </div>
    <ul class="nav navbar-nav">
        <li class="active"><a style={{color:'#809eb4'}} href="/trades">Dashboard</a></li>
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
      <li><a style={{color:'#dedee4'}} href=""><span class="glyphicon glyphicon-search"></span> Search</a></li>
      <li><a style={{color:'#dedee4'}} href="/logout"><span class="glyphicon glyphicon-log-out"></span> Log Out</a></li>
    </ul>
  </div>
</nav>
            );
      }
}

export default Nav2;