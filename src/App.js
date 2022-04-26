// import "./App.css";
import React from "react";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Tracking from "./pages/Tracking";
import User from "./pages/User";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="logout" component={<Navigate replace to="/" />} />
                <Route path="/landing" component={<Landing />} />
                <Route path="/User" component={<User />} />
                <Route path="/Tracker" component={<Tracking />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
