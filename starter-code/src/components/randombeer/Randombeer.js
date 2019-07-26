import React, {Component} from 'react';


class Randombeer extends Component {
 
  getRandomBeer = ()=>{
      const len = this.props.allTheBeers.length;
      let ran = Math.floor( Math.random(len)*len);
      let beerx = this.props.allTheBeers[ran];
      
        return (
          <div>
              <hr/>
              <div> {beerx.name}</div>
              <div> {beerx.tagline}</div>
              <img src={beerx.image_url} alt=""/>
              <hr/>
          </div>
        ) 
    
  }


  render(){
    return(
      <div>
        
        <div>{this.getRandomBeer() }</div>
      </div>
    )
  }

}

export default Randombeer;