import React, { Component } from 'react';
import axios from 'axios';
// import Login from '../src/Login';

class Display extends Component {
    constructor(props){
        super(props)
        this.viewData = JSON.parse(localStorage.getItem('Login'))
    }
    componentDidMount() {
        axios.get('http://localhost:4567/login/5de250a39be30c476cddee3a')
        .then(res => console.log(res.data))
       
    }
    render() {
       
        return (
            <div align = "center">
                 <h3>Welcome to {this.viewData.name}</h3>
                <h4>Phone:- {this.viewData.mobile}</h4> 
            </div>
        )
    }
}

export default Display
