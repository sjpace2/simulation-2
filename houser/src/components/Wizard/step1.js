import React, {Component} from 'react';

import axios from 'axios';

class Wizard extends Component {
    constructor (){
        super()
        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zipcode: 0
        }
 
    }

    handleNameChange = (value) => {
        this.setState({
            name: value
        })
    }
    
    handleAddressChange = (value) => {
        this.setState({
            address: value
        })
    }
    
    handleCityChange = (value) => {
        this.setState({
            city: value
        })
    }
    
    handleStateChange = (value) => {
        this.setState({
            state: value
        })
    }
    
    handleZipCodeChange = (value) => {
        this.setState({
            zipcode: value
        })
    }

   

    
  
    render () {
        return(
            <div>
                <h2>Step 1</h2>
                <section>
                    <input placeholder = 'name' onChange={ (e)=> this.handleNameChange(e.target.value) } type="text"/>
                    <input placeholder = 'address' onChange={ (e)=> this.handleAddressChange(e.target.value) } type="text"/>
                    <input placeholder = 'city' onChange={ (e)=> this.handleCityChange(e.target.value) } type="text"/>
                    <input placeholder = 'state' onChange={ (e)=> this.handleStateChange(e.target.value) } type="text"/>
                    <input placeholder = 'zipcode' onChange={ (e)=> this.handleZipCodeChange(e.target.value) } type="text"/>
                </section>

                 <button onClick={ ()=> this.props.history.push('/wizard/step2') }>Next Step</button>
                
                

            </div>
        )
    }
 }

 export default Wizard;