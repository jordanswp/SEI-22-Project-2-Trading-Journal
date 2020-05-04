import React from "react";

class Footerhome extends React.Component {
      render() {
            return (
        <div class="footer-bottom" style={{ background: '#343434', minHeight: '30px',  width: '100%', position: 'fixed', bottom: '0'}}>

    <div class="container">

        <div class="row">

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">

                <div class="copyright" style={{color: '#656565', lineHeight: '30px', minHeight: '30px', padding: '7px 0', fontFamily:'sans'}}>

                    © 2020 MidasFX, All Rights Reserved

                </div>

            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">

                <div class="design" style={{color: '#fff', lineHeight: '30px', minHeight: '30px', padding: '7px 0', textAlign: 'right'}}>

                     <a style={{color: '#656565'}} href="#">MidasFX </a> |  <a style={{color: '#656565', fontFamily:'sans'}} target="_blank" href="http://www.webenlance.com">Web Design & Development by Jordan</a>

                </div>

            </div>

        </div>

    </div>

</div>
            );
      }
}

export default Footerhome;


