import React, { useState } from "react";
import { Container, TextField, Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/user";

const SignUp = () => {
    const newUser = useSelector((state) => state.user);
    console.log(newUser);
    const dispatch = useDispatch();
    // dispatch(userActions.login());
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");

    const handleNameChange = () => {};

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
                    />
                    <TextField
                        helperText="Please enter a password"
                        id="Password"
                        label="Password"
                        // color="white"
                    />
                    <Button variant="contained"> Submit</Button>
                </Box>
            </Container>
        </>
    );
};

export default SignUp;
