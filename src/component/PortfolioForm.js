import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import backendAPIs from "../utils/backendAPIs";
import { useState } from "react";
import axios from "axios";
import qs from "qs";

// import store from "./app/store";
// import { Provider } from "react-redux";

export default function HelperTextMisaligned() {
    // const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");

    const handleIdChange = (event) => {
        setToken(event.target.value);
        console.log(`id = ${event.target.value}`);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
        console.log(`price = ${event.target.value}`);
    };

    const handleQtyChange = (event) => {
        setQty(event.target.value);
        console.log(`qty = ${event.target.value}`);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        // let formData = new FormData();
        // formData.append("token", token);
        // formData.append("price", price);
        // formData.append("quantity", qty);
        // console.log(token, price, qty);

        const data = {
            token,
            price,
            quantity: qty,
        };

        // console.log("formData", qs.stringify(formData));

        // console.log(formData.getAll("price", "quantity"));

        backendAPIs.addNewPortfolio(data).then((res) => {
            setLoading(false);
        });

        // });
        // axios({
        //     method: "post",
        //     url: `http://127.0.0.1:5001/portfolio/newentry`,
        //     // data: qs.stringify(formData),
        //     data: data,
        //     headers: { "content-type": "application/json" },
        // })
        //     .then(function (response) {
        //         //handle success
        //         console.log(response);
        //     })
        //     .catch(function (response) {
        //         //handle error
        //         console.log(response);
        //     });
    };

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
                type="String"
                onChange={handleIdChange}
            />
            <TextField
                helperText="Please enter your purchase price"
                id="demo-helper-text-misaligned-no-helper"
                label="Price"
                variant="filled"
                color=""
                focused
                type="Number"
                onChange={handlePriceChange}
            />
            <TextField
                helperText="Please enter your purchase quantity"
                id="demo-helper-text-misaligned-no-helper"
                label="Qty"
                variant="filled"
                color=""
                focused
                type="Number"
                onChange={handleQtyChange}
            />
            <Button variant="contained" onClick={handleSubmit}>
                Submit
            </Button>
        </Box>
    );
}
