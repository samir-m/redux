import React from 'react';
import CounterControl from './CounterControl';
import {connect} from 'react-redux';
import * as ActionTypes from '../Store/ActionTypes';
class Counter extends React.Component
{
    render()
    {
        return(
            <React.Fragment>
                <div className="counter">
                    <h1>Current Counter value: {this.props.ctr}</h1>
                    <CounterControl clicked={this.props.onIncrement}>Increment ++ </CounterControl>
                    <CounterControl clicked={this.props.onDecrement}>Decrement -- </CounterControl>
                    <CounterControl clicked={()=>this.props.onAddition(10)}>Add 10</CounterControl>
                    <CounterControl clicked={()=>this.props.onSubtraction(5)}>Subtract 5</CounterControl>
                    <br/>
                    <button onClick={()=>this.props.onStoreResult(this.props.ctr)} style={{background:'#eee'}}>Store Result</button>    
                </div>
                <ul>
                    {
                        this.props.results.map((ctr)=>{
                            return(
                                <li onClick={()=>this.props.onDeleteResult(ctr.id)} key={ctr.id}>{ctr.resultCtr}</li>
                                )
                        })
                    }
                </ul>
            </React.Fragment>
        )
        
    }
}
const mapStateToProps = (state) => {
    return{
        ctr:state.counter,
        results:state.result

    };
};
const mapDispatchToProps= (dispatch) =>{
    return{
        onIncrement: () => dispatch({type:ActionTypes.INCREMENT}),
        onDecrement: () => dispatch({type:ActionTypes.DECREMENT}),
        onAddition: (num) => dispatch({type:ActionTypes.ADD,value:num}),
        onSubtraction: (num) => dispatch({type:ActionTypes.SUBTRACT,value:num}),
        onStoreResult: () => dispatch({type:ActionTypes.STORE_RESULT}),
        onDeleteResult: (id) => dispatch({type:ActionTypes.DELETE_RESULT,id:id}),
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);