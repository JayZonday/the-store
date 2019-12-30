import React, { Component } from 'react';
import './index.css';


class FeatureStrip extends Component {


  render(){

    return (
      <div className='feature-strip'>
        <div className='feature' id='product'>
          Hottest Product!
        </div>
        <div className='feature' id='news'>
          Latest News!
        </div>
        <div className='feature' id='ad'>
          Free Shipping w/ Purchases over $42.00!
        </div>
      </div>
    );
  }
}

export default FeatureStrip;
