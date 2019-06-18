import React,{Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import slider from "./components/slider";
import SosaIndex from "./components/sosa-index-component";



function App() {
  return (
    
  	<Router>
  	<div>

  	<header className="header" style={{backgroundColor:'#0000ff', width:'100%'}}>
  	<div>
  	<img src={require('./images/sosa_logo.jpg')} style={{height:'100px', width:'100px', padding:'10px', float:'left'}} />
   	<img src={require('./images/sneha_logo.jpg')} style={{height:'100px', width:'100px', padding:'10px', float:'right'}} />
	
	<p className="heading"><b>SNEHA OLD STUDENTS ASSOCIATION</b></p>
	<p  className="motto"><b>"Together we can change"</b></p>
	</div>
	</header>
  	</div>
  
  	<Route path="/" component={slider} />
	<Route path="/" component={SosaIndex} />
	
  	
  	</Router>

  );
}

export default App;
