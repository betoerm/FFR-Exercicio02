import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Users } from "./components/Users";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/users" component={Users} />
  </>
);
