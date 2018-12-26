import React, { Component } from 'react';
import {  } from 'reactstrap';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import './css/utilities.css';
import './App.css';

class App extends Component {
  render() {
    return (
	    <div className="App">
			<Header />
			<Content />
	        <Footer/>	         	  
	    </div>
    );
  }
}

export default App
