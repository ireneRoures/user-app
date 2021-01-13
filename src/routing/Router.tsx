import React from "react"
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import { UserDetailsComponent } from "../components/UserDetailsComponent";
import { UserListComponent } from "../components/UserListComponent";
import { HOME_URL, USER_DETAIL_URL } from "./Routes";
  

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={HOME_URL} component={UserListComponent} exact={true}/>
                <Route path={USER_DETAIL_URL} component={UserDetailsComponent} exact={true}/>
            </Switch>
        </BrowserRouter>
    );
}