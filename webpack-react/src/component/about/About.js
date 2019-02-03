import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class About extends Component {
    render() {
        return (
            <div id="home-container">
                <p>做个router跳转</p>
                <Link to="/example" >点我跳去react-redux的例子</Link>
            </div>
        );
    }
}

export default About;