import React from "react";
import { Container, TextField, Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/user";

const [username, setUsername] = setState("");
const [password, setPassword] = setState("");

const handleUsernameChange = () => {
    set;
};

const Login = () => {
    return (
        <>
            <Container>
                <Box sx={{ color: "white" }}>
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
                        // color="white"
                    />
                    <Button variant="contained"> Login </Button>
                </Box>
            </Container>
        </>
    );
};

export default Login;
