import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "../pages/home/home";
import AboutPage from "../pages/about/about";
import ContactPage from "../pages/contact/contact";

function AppRouters() {
    return(
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/contact' component={ContactPage} />
        </Switch>
    )
}
export default AppRouters;