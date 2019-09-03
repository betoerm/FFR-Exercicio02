import React, { useState } from 'react';
import { Link } from "react-router-dom";

export function UsersHooks (){
  // Declarar uma nova variável de state, na qual chamaremos de "count"
    const [data, setData] = useState([
        { id: 1, name: 'Ana', email: 'email@user1.com',  age: 21 },
        { id: 2, name: 'Carol', email: 'email@user2.com', age: 22 },
        { id: 3, name: 'Nanda', email: 'email@user3.com', age: 23 },
        { id: 4, name: 'Manu', email: 'email@user4.com', age: 24 },
        { id: 5, name: 'Julia', email: 'email@user5.com', age: 25 },
    ]);

    return (
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
                data.map(({id, name, email, age})=>
                <div>
                    <tr>
                    <Link to={`/users/${name}`}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{age}</td>
                    </Link>
                    <button onClick={()=> setData(data.filter(e => {return e.id !== id}))}>Delete</button>
                    </tr>  
                </div>
                )                
            } 
            </div>
    </div>
  );



}

