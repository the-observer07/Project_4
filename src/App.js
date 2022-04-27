// import "./App.css";
import React from "react";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import User from "./pages/User";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="logout" element={<Navigate replace to="/" />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/user" element={<User />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
