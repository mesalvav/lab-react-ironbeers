import React, {Component} from 'react';
import axios from 'axios';

class Addbeer extends Component {
  
  constructor(props){
    super(props)

    this.state =
     {
      newName: '',
      newDescription:'',
      newUrl:'',
      newTagline:'',
      newBrewed:'',
      newTip:'',
      newLevel:'',
      newContributed:''
    }
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
}


handleFormSubmit = (event) => {
  event.preventDefault();
  axios.post(`https://sample-api-ih.herokuapp.com/new`, 
  {
    name: this.state.newName,
    description: this.state.newDescription,
    image_url: this.state.newUrl,
    tagline: this.state.newTagline,
    first_brewed: this.state.newBrewed,
    brewers_tips: this.state.newTip,
    attenuation_level: this.state.newLevel,
    contributed_by: this.state.newContributed,
  }
  
  )
  .then( () => {
      //this.props.getData();
      // this function updates the list in ProjectIndex.js
      // this.setState({newTitle: "", newDescription: ""});
  })
  .catch( error => console.log(error) )
}

  render(){

    return (
      <div >
        <form onSubmit={this.handleFormSubmit}>
          <div>
          <label>Name:</label>
          <input type="text" name="newName" value={this.state.newName} onChange={ e => this.handleChange(e)}/>
          </div>
          <div>
          <label>Description:</label>
          <input name="newDescription" value={this.state.newDescription} onChange={ e => this.handleChange(e)} />
          </div>
          <div>
          <label>Image URL:</label>
          <input type="text" name="newUrl" value={this.state.newUrl} onChange={ e => this.handleChange(e)}/>
          </div>
          <div>
          <label>Tagline:</label>
          <input type="text" name="newTagline" value={this.state.newTagline} onChange={ e => this.handleChange(e)}/>
          </div>
          <div>
          <label>First Brewed:</label>
          <input type="text" name="newBrewed" value={this.state.newBrewed} onChange={ e => this.handleChange(e)}/>
          </div>
          <div>
          <label>Brewers Tip:</label>
          <input type="text" name="newTip" value={this.state.newTip} onChange={ e => this.handleChange(e)}/>
          </div>
          <div>
          <label>Attenuation level</label>
          <input type="text" name="newLevel" value={this.state.newLevel} onChange={ e => this.handleChange(e)}/>
          </div>
          <div>
          <label>Contributed by: </label>
          <input type="text" name="newContributed" value={this.state.newContributed} onChange={ e => this.handleChange(e)}/>
          </div>
          

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Addbeer;