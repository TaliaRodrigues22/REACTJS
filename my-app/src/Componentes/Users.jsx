import React from "react";
import { Switch, Route } from "react-router-dom";
import AllUsers from "./AllUsers";
import Profile from "./Profile";

const Users = ({ match }) => (
    <Switch>
        <Route exact path={`${match.url}`} component={AllUsers} />
        <Route path={`${match.url}/:id`} component={Profile} />
    </Switch>
);

export default Users;
