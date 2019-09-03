import React from "react";
import { Link } from "react-router-dom";

export class UsersDetail extends React.Component {        
    render(){

        if(!this.props.match.params.name) return null;
        
        return(
            <div>
                <h2>User Detail</h2>
                <p>{this.props.match.params.name}</p>
                <Link to='/users'><p>List all users</p></Link>
            </div>
        );
    }   
}
