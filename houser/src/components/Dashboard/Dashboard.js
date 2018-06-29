import React, {Component} from 'react';
import axios from 'axios';

import House from '../House/House';
import {Link} from 'react-router-dom';



class Dashboard extends Component {
   constructor (){
       super()
       this.state = {
           list: []
       }

   }

   componentDidMount = () => {
        axios.get('/api/houses').then(response => {
            this.setState({list: response.data})
        })
    }

    deleteHouse = (id) => {
        axios.delete(`/api/houses/${id}`).then(response => {
            this.setState({
                list: response.data
            })
           
        })
    }



   render () {
      
    let displayedList = this.state.list.map((house, index) => {
           return <House key={ index } house={ house } deleteHouse={this.deleteHouse}/>
            console.log(displayedList)
        })
       return(
           <div>
               <h2>Dashboard</h2>
               
                <button onClick={ ()=> this.props.history.push('/wizard/step1') }>Add new property</button>

                <br/>
                {displayedList}
                
           </div>
       )
   }
}

export default Dashboard;