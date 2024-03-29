import React from "react";
import { Link } from "react-router-dom";
import { ApplicationRoutes } from "./ApplicationRoutes";

export function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>  
        <li>
          <Link to="/usershooks">Users Hooks</Link>
        </li>  
      </ul>
      <ApplicationRoutes />
    </div>
  );
}

export default App;
