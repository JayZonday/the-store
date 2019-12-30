import React, { Component } from 'react';
import TopNavBar from './components/TopNavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import FeatureStrip from './components/FeatureStrip'
import './App.css';


class App extends Component {


  render(){

    return (
      <div>
        <TopNavBar/>
        <Header/>
        <h1 className='main-title'>The Store <span className='title-emblem'>➲</span></h1>
        <FeatureStrip/>
        <Footer/>
      </div>
    );
  }
}

export default App;
