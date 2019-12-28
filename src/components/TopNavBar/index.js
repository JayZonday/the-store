import React, { Component } from 'react';
import './index.css';


class TopNavBar extends Component {


  render(){

    return (
      <div>
        <div className='main-nav'>
          <button className='nav-btn'>Home</button>
          <button className='nav-btn'>Products</button>
          <button className='nav-btn'>History</button>
          <button className='nav-btn'>Locations</button>
          <button className='nav-btn'>Contact Us</button>
        </div>
      </div>
    );
  }
}

export default TopNavBar;
