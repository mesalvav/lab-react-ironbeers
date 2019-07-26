import React from 'react';

import './App.css';
import axios from 'axios';
import {Route, Link, Switch} from 'react-router-dom';

import Allbeers from './components/allbeers/Allbeers.js';
import Homepage from './components/homepage/Homepage.js';
import Randombeer from './components/randombeer/Randombeer.js';
import Addbeer from './components/addbeer/Addbeer.js';

class App extends React.Component {

constructor(props){
  super(props)
  this.state = {listofbeers: ''}
}
  
componentDidMount() {
  this.getAllBeers();
}

getAllBeers = ()=>{
  axios.get(`https://sample-api-ih.herokuapp.com/`)
  .then(responseapi =>{
    console.log(responseapi.data)
    this.setState({listofbeers: responseapi.data})
  })
}


  render (){
    // this.getAllBeers();

    return (
      <div>
      <div><li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li></div>
      <hr/>
     

      <Switch>
      <Route exact path="/" render ={(props)=> <Homepage
           {...props} 
           
           />} />

        <Route exact path="/allbeers" render ={(props)=> <Allbeers
           {...props} 
           allTheBeers = {this.state.listofbeers}
           />} />

        <Route exact path="/randombeer" render ={(props)=> <Randombeer
           {...props} 
           allTheBeers = {this.state.listofbeers}
           />} />

        <Route exact path="/addbeer" render ={(props)=> <Addbeer
           {...props} 
           allTheBeers = {this.state.listofbeers}
           />} />
          
      </Switch>

      </div>
    );
  }
  
}

export default App;
