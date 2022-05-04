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
    // console.log(portfolio);
    const [loading, setLoading] = useState(false);

    const [editedToken, setEditedToken] = useState("");
    console.log(portfolio.recalledTokens.recalledToken);
    console.log(editedToken);
    const [editedPrice, setEditedPrice] = useState("");
    const [editedQty, setEditedQty] = useState("");

    const [token, setToken] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

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
        setToken(event.target.value);
        // console.log(`id = ${event.target.value}`);
        // dispatch(portfolioActions.setToken(event.target.value));
        dispatch(portfolioActions.setToken(event.target.value));
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
        // console.log(`price = ${event.target.value}`);
        dispatch(portfolioActions.setPrice(event.target.value));
    };

    const handleQtyChange = (event) => {
        setQuantity(event.target.value);
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

        // const data = {
        //     token: portfolio.token,
        //     price: portfolio.price,
        //     quantity: portfolio.qty,
        // };

        const data = {
            token: token,
            price: price,
            quantity: quantity,
        };

        console.log(data);

        // console.log("formData", qs.stringify(formData));

        // console.log(formData.getAll("price", "quantity"));

        backendAPIs.addUserNewPortfolio(data);
        setLoading(false);
        dispatch(portfolioActions.handleSubmit());
        setToken("");
        setPrice("");
        setQuantity("");
    };

    const handleSubmitEdit = (event) => {
        event.preventDefault();
        setLoading(true);
        const data = {
            token: editedToken,
            price: editedPrice,
            quantity: editedQty,
        };
        console.log(data);
        backendAPIs.submitEditedPortfolio(data);
        setLoading(false);
        dispatch(portfolioActions.handleResetEdit());
        setEditedPrice("");
        setEditedToken("");
        setEditedQty("");
        dispatch(portfolioActions.setEdit(false));
    };

    const handleEditIdChange = (event) => {
        setEditedToken(event.target.value);
        // dispatch(portfolioActions.setEditedToken(event.target.value));
    };

    const handleEditPriceChange = (event) => {
        setEditedPrice(event.target.value);

        // dispatch(portfolioActions.setEditedPrice(event.target.value));
    };

    const handleEditQtyChange = (event) => {
        setEditedQty(event.target.value);
        // dispatch(portfolioActions.setEditedQty(event.target.value));
    };

    const callForPortfolio = async () => {
        // console.log(backendAPIs);
        const res = await backendAPIs.pullPortfolio();
        // console.log(res.data.data);
        // setPortfolio(res.data.data);
    };

    const checkEditMode = () => {
        if (portfolio.editMode === true) {
            return (
                setEditedToken(portfolio.recalledTokens.recalledToken),
                setEditedPrice(portfolio.recalledTokens.recalledPrice),
                setEditedQty(portfolio.recalledTokens.recalledQty)
            );
        }
    };

    // const handleEditSubmit = () => {
    //     const data = {
    //         token: editedToken,
    //         price: editedPrice,
    //         quantity: editedQty,
    //     };
    //             backendAPIs.editPortfolio(data);

    // };

    useEffect(() => {
        callForPortfolio();
        checkEditMode();
    }, [portfolio]);

    return (
        <Box
            sx={{
                bgcolor: "primary.main",
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
            }}
        >
            {portfolio.editMode === true ? (
                <div align="center">
                    <TextField
                        value={editedToken}
                        helperText="Please enter your token"
                        id="demo-helper-text-misaligned"
                        label="Token"
                        variant="filled"
                        color=""
                        focused
                        type="String"
                        onChange={handleEditIdChange}
                        sx={{ margin: 1.5 }}
                        name="id"
                    />
                    <TextField
                        value={editedPrice}
                        helperText="Please enter your purchase price"
                        id="demo-helper-text-misaligned-no-helper"
                        label="Price"
                        variant="filled"
                        color=""
                        focused
                        type="Number"
                        onChange={handleEditPriceChange}
                        sx={{ margin: 1.5 }}
                        name="price"
                    />
                    <TextField
                        value={editedQty}
                        helperText="Please enter your purchase quantity"
                        id="demo-helper-text-misaligned-no-helper"
                        label="Qty"
                        variant="filled"
                        color=""
                        focused
                        type="Number"
                        onChange={handleEditQtyChange}
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

            {portfolio.editMode === true ? (
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
