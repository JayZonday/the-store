import React, { Component } from 'react';
import './index.css';


class Footer extends Component {


  render(){

    return (
      <div className='footer'>
        <div className='footer-desc'>
          The Store.
          <br/>
          <span className='company-mission'>The Store knows you want to buy,
          <br/>
          So we've been in supply since 1995.</span>
        </div>
      </div>
    );
  }
}

export default Footer;
