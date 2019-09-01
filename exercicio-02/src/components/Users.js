import React from "react";
import { Link } from "react-router-dom";

export class Users extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                { id: 1, name: 'Ana', email: 'email@user1.com',  age: 21 },
                { id: 2, name: 'Carol', email: 'email@user2.com', age: 22 },
                { id: 3, name: 'Nanda', email: 'email@user3.com', age: 23 },
                { id: 4, name: 'Manu', email: 'email@user4.com', age: 24 },
                { id: 5, name: 'Julia', email: 'email@user5.com', age: 25 },
            ]
        }
    }

    remove(id){        
        let newData = this.state.data.splice(id, 1);        
        this.setState({data: newData});
    }

    render(){
        return(
            <div>
                <div>
                    <h1>Users</h1>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                        <td>&nbsp;</td>
                    </tr>
                </div>
                <div>
                    {
                        this.state.data.map(({id, name, email, age})=>
                        <div>
                            <tr>
                                <Link to={`/users/${name}`}>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{age}</td>
                                </Link>

                                <button onClick={this.remove.bind(this, id)}>
                                    Delete
                                </button>
                            </tr>  
                        </div>
                        )                
                    } 
                </div>
            </div>
        );
    }
}