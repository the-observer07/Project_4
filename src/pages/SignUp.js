import React, { useState } from "react";
import { Container, TextField, Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/user";
import backendAPIs from "../utils/backendAPIs";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const user = useSelector((state) => state.user);
    console.log(user);
    const dispatch = useDispatch();
    // dispatch(userActions.login());
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async () => {
        const data = {
            name: name,
            username: username,
            password: password,
        };
        const res = await backendAPIs.createNewUser(data);
        console.log(res);
        if (res.data.created) {
            dispatch(userActions.login(username));
            navigate("/home");
        } else {
            setErrorMessage(res.data.message);
        }

        // if (res.json("status: ok")) {
        //     navigate("/home");
        // }
    };
    return (
        <>
            <Container>
                <Box sx={{ color: "white" }}>
                    <TextField
                        helperText="Please enter your name"
                        id="Name"
                        label="Name"
                        onChange={handleNameChange}
                    />
                    <TextField
                        helperText="Please enter your username"
                        id="Username"
                        label="Username"
                        onChange={handleUsernameChange}
                    />
                    {errorMessage}
                    <TextField
                        helperText="Please enter a password"
                        id="Password"
                        label="Password"
                        type="Password"
                        // color="white"
                        onChange={handlePasswordChange}
                    />
                    <Button variant="contained" onClick={handleSubmit}>
                        {" "}
                        Submit
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default SignUp;
