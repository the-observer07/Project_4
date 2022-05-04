import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import backendAPIs from "../utils/backendAPIs";
import { useState, useEffect } from "react";
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

    const portfolioRedux = useSelector((state) => state.portfolio);

    // const selector = useSelector((state) => state.portfolio);

    // const checkEditMode = useSelector(portfolioSlice.editMode);
    // console.log(checkEditMode);

    // const [token, setToken] = useState("");
    // const [price, setPrice] = useState("");
    // const [qty, setQty] = useState("");

    // const randomObj = { one: 1, two: 2, three: 3 };

    const initialValues = {
        id: "",
        price: "",
        qty: "",
        loading: false,
    };

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

    const handleSubmitEdit = (event) => {
        event.preventDefault();
        setLoading(true);
        const data = {
            token: portfolio.token,
            price: portfolio.price,
            quantity: portfolio.qty,
        };
        backendAPIs.editPortfolio(data);
        setLoading(false);
        dispatch(portfolioActions.handleResetEdit());
    };

    // const callForPortfolio = async () => {
    //     // console.log(backendAPIs);
    //     const res = await backendAPIs.pullPortfolio();
    //     // console.log(res.data.data);
    //     // setPortfolio(res.data.data);
    // };

    // useEffect(() => {
    //     callForPortfolio();
    // }, [portfolioRedux]);

    return (
        <Box
            sx={{
                bgcolor: "primary.main",
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
            }}
        >
            {portfolioRedux.editMode === true ? (
                <div align="center">
                    <TextField
                        value={portfolioRedux.recalledTokens.recalledToken}
                        helperText="Please enter your token"
                        id="demo-helper-text-misaligned"
                        label="Token"
                        variant="filled"
                        color=""
                        focused
                        type="String"
                        onChange={handleIdChange}
                        sx={{ margin: 1.5 }}
                        name="id"
                    />
                    <TextField
                        value={portfolioRedux.recalledTokens.recalledPrice}
                        helperText="Please enter your purchase price"
                        id="demo-helper-text-misaligned-no-helper"
                        label="Price"
                        variant="filled"
                        color=""
                        focused
                        type="Number"
                        onChange={handlePriceChange}
                        sx={{ margin: 1.5 }}
                        name="price"
                    />
                    <TextField
                        value={portfolioRedux.recalledTokens.recalledQty}
                        helperText="Please enter your purchase quantity"
                        id="demo-helper-text-misaligned-no-helper"
                        label="Qty"
                        variant="filled"
                        color=""
                        focused
                        type="Number"
                        onChange={handleQtyChange}
                        sx={{ margin: 1.5 }}
                        name="qty"
                    />
                </div>
            ) : (
                <div>
                    <TextField
                        value={portfolio.token}
                        helperText="Please enter your token"
                        id="demo-helper-text-misaligned"
                        label="Token"
                        variant="filled"
                        color=""
                        focused
                        type="String"
                        onChange={handleIdChange}
                        sx={{ margin: 1.5 }}
                        name="token"
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
                        sx={{ margin: 1.5 }}
                        name="price"
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
                        sx={{ margin: 1.5 }}
                        namne="qty"
                    />
                </div>
            )}

            {portfolioRedux.editMode === true ? (
                <Button variant="contained" onClick={handleSubmitEdit}>
                    Save
                </Button>
            ) : (
                <Button variant="contained" onClick={handleSubmit}>
                    Submit
                </Button>
            )}
        </Box>
    );
}
