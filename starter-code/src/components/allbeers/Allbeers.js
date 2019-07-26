import React, {Component} from 'react'


class Allbeers extends Component{

showBeers = ()=>{
    return this.props.allTheBeers.map((beerx, index)=>{
        return (
        <div key={index}>
          <hr/>
          <div> {beerx.name}</div>
          <div> {beerx.tagline}</div>
          <hr/>
        </div>
        
        )
    })
}

  render() {

    return (
      <div>
        
        <div>{this.showBeers()}</div>
      </div>
    )
  }

}

export default Allbeers