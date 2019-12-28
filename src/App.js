import React, { Component } from 'react';
import TopNavBar from './components/TopNavBar'
import Header from './components/Header'
import './App.css';


class App extends Component {


  render(){

    return (
      <div>
        <TopNavBar/>
        <Header/>
          <h1 className='main-title'>The Store.</h1>
      </div>
    );
  }
}

export default App;
