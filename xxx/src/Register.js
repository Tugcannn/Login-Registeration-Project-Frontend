import React, {Component} from 'react';
import axios from 'axios';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]:e.target.value }) 
    }

    handleSubmit = (e) => {
     e.preventDefault();
       console.log(this.state)
       axios.post('http://localhost:5000/users/signup', this.state)
       .then(response => {
               console.log(response)
           }
       ).catch(
           error => {
               console.log(error);
           }
       )
    };
    

   render() {
    const{username, password} = this.state 
    console.log(this.state);
       return(
        <div className="App">
                <h1> Register Form</h1>
                <h1> merhabalar</h1>
                <form onSubmit = {this.handleSubmit}>
                <div>
                <p><input type = "text" placeholder ="username" value={username} name ="username" onChange={this.changeHandler} /></p>
                </div> 
                <div>
                <p><input type = "text" placeholder = "password" value={password} name ="password" onChange={this.changeHandler} /></p>
                </div>
                <input type="submit" value ="LOGIN"/> 
                <br></br>
                <br></br>
                </form>
        </div>
                

       );
   }

}
export default Register;