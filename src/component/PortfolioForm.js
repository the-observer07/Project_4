import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import backendAPIs from "../utils/backendAPIs";
import { useState } from "react";

export default function HelperTextMisaligned() {
    const [data, setData] = useState("");
    const handleChange = (event) => {
        console.log(event.target.value);
    };
    const handleSubmit = () => {};

    return (
        <Box
            sx={{
                bgcolor: "primary.main",
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
            }}
        >
            <TextField
                helperText="Please enter your token"
                id="demo-helper-text-misaligned"
                label="Token"
                variant="filled"
                color=""
                focused
                onChange={handleChange}
            />
            <TextField
                helperText="Please enter your purchase price"
                id="demo-helper-text-misaligned-no-helper"
                label="Price"
                variant="filled"
                color=""
                focused
                onChange={handleChange}
            />
            <TextField
                helperText="Please enter your purchase quantity"
                id="demo-helper-text-misaligned-no-helper"
                label="Qty"
                variant="filled"
                color=""
                focused
                onChange={handleChange}
            />
            <Button variant="contained" onSubmit={handleSubmit}>
                Submit
            </Button>
        </Box>
    );
}
