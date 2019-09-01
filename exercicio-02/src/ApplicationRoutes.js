import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { UsersDetail } from "./components/UsersDetail";
import { test } from "./components/test";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/users" component={Users} />
    <Route path="/users/:name" component={UsersDetail} />
    <Route path="/test" component={test} />
  </>  
);
