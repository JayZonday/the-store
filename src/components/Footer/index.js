import React, { Component } from 'react';
import TwitterPic from './twitter.png'
import InstaPic from './instagram.png'

import './index.css';


class Footer extends Component {


  render(){

    return (
      <div className='footer'>
        <div className='footer-desc'>
          <span className='company-name'>The Store.</span>
          <br/>
          <span className='company-mission'>The Store knows you want to buy,
          <br/>
          So we've been in supply since 1995.</span>
          <br/>
          <img className='social-media-btn' id='twitter' src={TwitterPic}/>
          <img className='social-media-btn' id='twitter' src={InstaPic}/>
        </div>
      </div>
    );
  }
}

export default Footer;
