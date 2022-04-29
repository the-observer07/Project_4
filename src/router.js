import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./pages (react router 5)/Main";
import PageOne from "./pages (react router 5)/PageOne";
import PageTwo from "./pages (react router 5)/PageTwo";
import PageThree from "./pages (react router 5)/PageThree";
import NavBar from "./component (react router 5)/NavBar";
import Details from "./pages (react router 5)/Details";

const App = () => {
    return (
        <div className="container">
            <NavBar />
            <main>
                <Route exact path="/">
                    {/* <Main /> */}
                    <Redirect to="/page-one" />
                </Route>
                <Route path="/page-one">
                    <PageOne />
                </Route>
                <Route path="/page-two">
                    <PageTwo />
                </Route>
                <Route path="/page-three">
                    <PageThree />
                </Route>
            </main>
        </div>
    );
};

export default App;
