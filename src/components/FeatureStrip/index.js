import React, { Component } from 'react';
import Open from './open.jpg'
import Product from './product.jpg'
import Shipping from './shipping.jpg'
import './index.css';


class FeatureStrip extends Component {


  render(){

    return (
      <div className='feature-strip'>
        <div className='feature' id='product'>
          <span className='feature-text'>Hottest Product!</span>
          <img className='feature-img' src={Product}/>
        </div>
        <div className='feature' id='news'>
          <span className='feature-text'>Latest News!</span>
          <img className='feature-img' src={Open}/>
        </div>
        <div className='feature' id='ad'>
          <span className='feature-text'>Free Shipping w/ Purchases over $42.00!</span>
          <img className='feature-img' src={Shipping}/>
        </div>
      </div>
    );
  }
}

export default FeatureStrip;
