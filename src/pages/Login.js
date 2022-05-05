import React, { useState } from "react";
import { Container, TextField, Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/user";
import backendAPIs from "../utils/backendAPIs";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(username);
        const data = {
            username: username,
            password: password,
        };
        console.log(data);
        backendAPIs.login(data);
        // backendAPIs.loginStatus(true);
        dispatch(userActions.login(username));
        navigate("/home");
    };

    return (
        <>
            <Container sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ backgroundColor: "white" }}>
                    <TextField
                        helperText="Please enter your username"
                        id="Username"
                        label="Username"
                        onChange={handleUsernameChange}
                    />
                    <TextField
                        helperText="Please enter a password"
                        id="Password"
                        label="Password"
                        onChange={handlePasswordChange}
                        // color="white"
                    />
                    <Button variant="contained" onClick={handleSubmit}>
                        Login
                    </Button>
                    <Button variant="contained" href="/signup">
                        Sign Up
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default Login;
