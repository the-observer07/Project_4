import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import backendAPIs from "../utils/backendAPIs";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import portfolioSlice, { portfolioActions } from "../redux/portfolioSlice";
import userSlice, { userActions } from "../redux/user";

// import store from "./app/store";
// import { Provider } from "react-redux";

export default function HelperTextMisaligned() {
    // const [data, setData] = useState("");
    // console.log(portfolio.recalledTokens.recalledToken);
    // console.log(editedToken);
    // console.log(portfolio);
    const [loading, setLoading] = useState(false);
    const [editedToken, setEditedToken] = useState("");
    const [editedPrice, setEditedPrice] = useState("");
    const [editedQty, setEditedQty] = useState("");
    const [token, setToken] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    // REDUX
    const dispatch = useDispatch();
    const portfolio = useSelector((state) => state.portfolio);
    const user = useSelector((state) => state.user);

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
        // dispatch(portfolioActions.setToken(event.target.value));
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
        // console.log(`price = ${event.target.value}`);
        // dispatch(portfolioActions.setPrice(event.target.value));
    };

    const handleQtyChange = (event) => {
        setQuantity(event.target.value);
        // console.log(`qty = ${event.target.value}`);
        // dispatch(portfolioActions.setQty(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(portfolioActions.setSubmit());
        setLoading(true);

        const data = {
            username: user.username,
            token: token,
            price: price,
            quantity: quantity,
        };

        backendAPIs.addUserNewPortfolio(data);
        setLoading(false);
        dispatch(portfolioActions.handleSubmit());
        setToken("");
        setPrice("");
        setQuantity("");
    };

    const handleSubmitEdit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const data = {
            username: user.username,
            token: editedToken,
            price: editedPrice,
            quantity: editedQty,
        };
        console.log(data);
        const res = await backendAPIs.submitEditedPortfolio(data);
        // console.log(res);
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

    useEffect(() => {
        callForPortfolio();
        checkEditMode();
    }, [portfolio]);

    return (
        <Box
            className="form"
            sx={{
                display: "flex",
                justifyContent: "space-evenly",
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
                        variant="standard"
                        color="primary"
                        focused
                        type="String"
                        sx={{ margin: 1.5 }}
                        name="id"
                    />
                    <TextField
                        value={editedPrice}
                        helperText="Please enter your purchase price"
                        id="demo-helper-text-misaligned-no-helper"
                        label="Price"
                        variant="standard"
                        color="primary"
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
                        variant="standard"
                        color="primary"
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
                        value={token}
                        helperText="Please enter your token"
                        id="demo-helper-text-misaligned"
                        label="Token"
                        variant="standard"
                        color="primary"
                        focused
                        type="String"
                        onChange={handleIdChange}
                        sx={{ margin: 1.5 }}
                        name="token"
                    />
                    <TextField
                        value={price}
                        helperText="Please enter your purchase price"
                        id="demo-helper-text-misaligned-no-helper"
                        label="Price"
                        variant="standard"
                        color="primary"
                        focused
                        type="Number"
                        onChange={handlePriceChange}
                        sx={{ margin: 1.5 }}
                        name="price"
                    />
                    <TextField
                        value={quantity}
                        helperText="Please enter your purchase quantity"
                        id="demo-helper-text-misaligned-no-helper"
                        label="Qty"
                        variant="standard"
                        color="primary"
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
