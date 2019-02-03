import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import * as Actions from "./actions"
class Home extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const {onIncrement,incrementNumber} = this.props;
        return (
            <div id="home-container">
                <button onClick={onIncrement}>+</button>
                <p>{incrementNumber}</p>
            </div>
        );
    }
}
//告诉容器组件，这个傻瓜组件（Home）需要什么数据
const mapStateToProps = (state) => {
    console.log(state,'state')
    return {
        incrementNumber : state.incrementNumber
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        onIncrement:()=>{
            console.log("这里1")
            dispatch(Actions.increment())
        }
    };
}

export default connect (mapStateToProps,mapDispatchToProps)(Home);