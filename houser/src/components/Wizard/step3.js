import React, {Component} from 'react';

import axios from 'axios';

class Wizard extends Component {
    constructor (){
        super()
        this.state = {
            inputMortgage: '',
            inputRent: ''
        }
        
 
    }

    handleMortgageAmount = (value) => {
        this.setState({
            inputMortgage: value
        })
    }   

    handleRentAmount = (value) => {
        this.setState({
            inputRent: value
        })
    }

    addNewHouse = () => {
        axios.post('/api/houses', {
            name: this.state.name,
            adddress: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode
        }).then(this.props.history.push('/'))
    }
  
    render () {
        return(
            <div>
                <h2>Add New Listing</h2>
                <h4>Recommended Rent: $0</h4>
                <input onChange={ (e)=>this.handleMortgageAmount(e.target.value) } type="text"/>
                <input onChange={ (e)=>this.handleRentAmount(e.target.value) } type="text"/>
               
                <button onClick={ ()=> this.addNewHouse() } >Complete</button>

                <button onClick={ ()=> this.props.history.push('/wizard/step2') }>Previous Step</button>

            </div>
        )
    }
 }

 export default Wizard;