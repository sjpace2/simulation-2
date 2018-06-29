import React, {Component} from 'react';

import axios from 'axios';

import {Route, Switch} from 'react-router-dom';
import step1 from './step1';
import step2 from './step2';
import step3 from './step3';

class Wizard extends Component {
    constructor (){
        super()
        
 
    }
  
    render () {
        return(
            <div>
                <h2>Wizard</h2>
                <button onClick={ ()=> this.props.history.push('/') }>Cancel</button>
                <Switch>
                    <Route exact path='/wizard/step1' component={step1}/>
                    <Route path='/wizard/step2' component={step2}/>
                    <Route path='/wizard/step3' component={step3}/>
                </Switch>

                
            </div>
        )
    }
 }

 export default Wizard;