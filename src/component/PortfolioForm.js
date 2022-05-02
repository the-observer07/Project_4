import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import backendAPIs from "../utils/backendAPIs";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import portfolioSlice, { portfolioActions } from "../redux/portfolioSlice";

// import store from "./app/store";
// import { Provider } from "react-redux";

export default function HelperTextMisaligned() {
    // const [data, setData] = useState("");
    const dispatch = useDispatch();
    const portfolio = useSelector((state) => state.portfolio);
    console.log(portfolio);
    const [loading, setLoading] = useState(false);
    // const [token, setToken] = useState("");
    // const [price, setPrice] = useState("");
    // const [qty, setQty] = useState("");

    // const randomObj = { one: 1, two: 2, three: 3 };

    const handleIdChange = (event) => {
        // setToken(event.target.value);
        // console.log(`id = ${event.target.value}`);
        // dispatch(portfolioActions.setToken(event.target.value));
        dispatch(portfolioActions.setToken(event.target.value));
    };

    const handlePriceChange = (event) => {
        // setPrice(event.target.value);
        // console.log(`price = ${event.target.value}`);
        dispatch(portfolioActions.setPrice(event.target.value));
    };

    const handleQtyChange = (event) => {
        // setQty(event.target.value);
        // console.log(`qty = ${event.target.value}`);
        dispatch(portfolioActions.setQty(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        // dispatch(portfolioActions.handleSubmit(true));

        // let formData = new FormData();
        // formData.append("token", token);
        // formData.append("price", price);
        // formData.append("quantity", qty);
        // console.log(token, price, qty);

        const data = {
            token: portfolio.token,
            price: portfolio.price,
            quantity: portfolio.qty,
        };

        console.log(data);

        // console.log("formData", qs.stringify(formData));

        // console.log(formData.getAll("price", "quantity"));

        backendAPIs.addNewPortfolio(data);
        setLoading(false);
        dispatch(portfolioActions.handleSubmit());
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
                value={
                    portfolioSlice.editMode
                        ? portfolioSlice.recalledTokens.recalledToken
                        : portfolio.token
                }
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
                value={portfolio.price}
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
                value={portfolio.qty}
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
