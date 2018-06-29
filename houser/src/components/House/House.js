import React from 'react';

export default function House (props) {
    console.log(props)
    return (
        <div>
            
            <h3>House:</h3>
            
            {props.house.name}<br/>
            {props.house.address}<br/>
            {props.house.city},{" "}
            {props.house.state}<br/>
            {props.house.zipcode}<br/>
            <button>Delete</button>
            
        </div>

    )
}

