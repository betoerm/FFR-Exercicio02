import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { UsersHooks } from "./components/UsersHooks";
import { UsersDetail } from "./components/UsersDetail";
export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/users" component={Users} />
    <Route path="/usershooks" component={UsersHooks} />
    <Route path="/users/:name" component={UsersDetail} />
  </>  
);
