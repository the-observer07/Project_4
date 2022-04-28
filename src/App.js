// import "./App.css";
import React from "react";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Portfolio from "./pages/Portfolio";
import User from "./pages/User";
import SignUp from "./pages/SignUp";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="logout" element={<Navigate replace to="/" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/user" element={<User />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
