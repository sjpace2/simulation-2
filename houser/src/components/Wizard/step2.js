import React, {Component} from 'react';

import axios from 'axios';

class Wizard extends Component {
    constructor (){
        super()
        this.state = {
            inputUrl: ''
        }
        
 
    }

handleChange = (value) => {
    this.setState({
        inputUrl: value
    })
}
  
    render () {
        return(
            <div>
                <h2>Add New Listing</h2>
                <input onChange={this.handleChange} placeholder='Image URL'type="text"/>

                 <button onClick={ ()=> this.props.history.push('/wizard/step1') }>Previous Step</button>
                 
                 <button onClick={ ()=> this.props.history.push('/wizard/step3') }>Next Step</button>

            </div>
        )
    }
 }

 export default Wizard;