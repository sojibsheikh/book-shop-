import React, { Component } from 'react'
import LoginView from './LoginView'

export class LoginContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value

        this.setState ({[name] : value})

        console.log(name);
        console.log(value)
    } 
    
    handleSubmit = (e) =>{
        e.preventDefault();

        console.log(this.state);
    }

    render() {
        return (
            <LoginView 
                handleChange={this.handleChange}
                {...this.satte}
            />
        )
    }
}

export default LoginContainer