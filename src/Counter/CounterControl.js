import React from 'react';
const CounterControl= (props)=>{
    return(<button onClick={props.clicked}>{props.children}</button>)
}
export default CounterControl;