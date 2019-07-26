import React, {Component} from 'react';
import { Link} from 'react-router-dom';

class Homepage extends Component {

  render(){

    return (
      <div> 
      <ul>
        <li><Link to="/allbeers" style={{ textDecoration: 'none' }}>Allbeers</Link></li>
        <li><Link to="/randombeer" style={{ textDecoration: 'none' }}>Random Beer</Link></li>
        <li><Link to="/addbeer" style={{ textDecoration: 'none' }}>Add Beer</Link></li>
      </ul>
      </div>
    )
  }
}

export default Homepage;