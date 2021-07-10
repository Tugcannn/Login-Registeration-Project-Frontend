import React, { Component } from 'react'
import  axios from 'axios'

class User extends Component {
     
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount(){
        axios.get("http://localhost:5000/users")
        .then(response => {
           console.log(response.data);
           this.setState({users:response.data});
    })
        .catch(error => {
         console.log(error);
     })
    }

    render() {
        const{users} = this.state
        return (
            <div> {
                
                users.map(users => <div key={users.id}>{users.username}    {users.password}</div>)
                
                  }
            </div>
        )
    }
}
export default User;