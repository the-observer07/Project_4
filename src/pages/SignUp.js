import React, { useState } from "react";
import { Container, TextField, Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/user";
import backendAPIs from "../utils/backendAPIs";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

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
    const [viewPassword, setViewPassword] = useState(false);
    // const [iconChange, setIconChange] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleMouseDownPassword = () => {
        setViewPassword(true);
    };

    const handleMouseUpPassword = () => {
        setViewPassword(false);
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
    };
    return (
        <>
            <Container className="parent" maxWidth="sm">
                <br />
                <br />
                <br />
                <br />
                <br />
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="stretch"
                    margin={5}
                    sx={{ alignContent: "flex-end" }}
                >
                    <TextField
                        color="secondary"
                        variant="standard"
                        helperText="Please enter your name"
                        id="Name"
                        label="Name"
                        onChange={handleNameChange}
                    />
                    <TextField
                        color="secondary"
                        variant="standard"
                        helperText="Please enter your username"
                        id="Username"
                        label="Username"
                        onChange={handleUsernameChange}
                    />
                    <TextField
                        color="secondary"
                        variant="standard"
                        helperText="Please enter a password"
                        id="Password"
                        label="Password"
                        type={viewPassword ? "text" : "password"}
                        // color="white"
                        onChange={handlePasswordChange}
                    />

                    {viewPassword ? (
                        <VisibilityIcon onMouseUp={handleMouseUpPassword} />
                    ) : (
                        <VisibilityOutlinedIcon
                            onMouseDown={handleMouseDownPassword}
                        />
                    )}

                    <br />
                    {errorMessage}
                    <br />
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
