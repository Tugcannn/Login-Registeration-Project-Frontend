import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'


class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {
        e.preventDefault()

    }

    render() {

        if(this.state.loggedIn) {
            return <Redirect to = '/' />
        }

        return(
            <div className = "App" >

                    <h1> Login Form</h1>
                    
                <form onSubmit = {this.handleSubmit}>
                    <div>
                    <p><input type = "text" name ="username"  placeholder ="username" value = {this.state.username} onChange = {this.handleChange}/></p>
                    </div> 
                   
                    <div>
                    <p><input type = "text" name ="password"  placeholder ="password" value = {this.state.password} onChange = {this.handleChange}/></p>
                    </div>
                    
                    <p><button onSubmit = {this.submit} >Log In </button></p>
                    <br></br> 
                    <br></br>
                </form>
            </div>
                    
           );
    }
    
    
}
export default Login;