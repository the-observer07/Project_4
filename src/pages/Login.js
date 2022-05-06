import React, { useState } from "react";
import { Container, TextField, Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/user";
import backendAPIs from "../utils/backendAPIs";
import { useNavigate } from "react-router-dom";
import "../index.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [viewPassword, setViewPassword] = useState(false);

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

    const handleMouseDownPassword = () => {
        setViewPassword(true);
    };

    const handleMouseUpPassword = () => {
        setViewPassword(false);
    };

    return (
        <>
            <div>
                <div>
                    {/* <img
                        src={background}
                        // width="500"
                        // height="150px"
                        // overflow="hidden"
                        style={{ marginleft: 1000, marginright: 1000 }}
                    /> */}
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
                            // justifyItems="bottom"
                            sx={{ alignContent: "flex-end" }}
                        >
                            <TextField
                                color="secondary"
                                variant="standard"
                                className="child-one"
                                helperText="Please enter your username"
                                id="Username"
                                label="Username"
                                onChange={handleUsernameChange}
                                // margin={5}
                            />
                            <TextField
                                color="secondary"
                                variant="standard"
                                className="child-two"
                                helperText="Please enter a password"
                                id="Password"
                                label="Password"
                                onChange={handlePasswordChange}
                                // color="white"
                                type={viewPassword ? "text" : "password"}
                            />
                            {viewPassword ? (
                                <VisibilityIcon
                                    onMouseUp={handleMouseUpPassword}
                                />
                            ) : (
                                <VisibilityOutlinedIcon
                                    onMouseDown={handleMouseDownPassword}
                                />
                            )}
                            <br />
                            <br />
                            <Button
                                variant="contained"
                                className="button-one"
                                onClick={handleSubmit}
                                border="50px"
                            >
                                Login
                            </Button>
                            <br />
                            <br />
                            <Button
                                variant="contained"
                                className="button-two"
                                href="/signup"
                                padding={5}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Login;
