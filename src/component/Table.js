import axios from "axios";
import React from "react";
import { tokenList } from "../utils/coingeckoAPICalls";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../fonts.css";
import { Typography } from "@mui/material";
import { Button, Box } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import IconButton from "@mui/material/IconButton";
import watchlistSlice, { watchlistActions } from "../redux/watchlistSlice";
import { useSelector, useDispatch } from "react-redux";
import { singleToken } from "../utils/coingeckoAPICalls";
import backendAPIs from "../utils/backendAPIs";

const TableData = () => {
    const [tokens, setTokens] = useState([]);
    const topTen = tokens.filter((element, index) => index < 10);
    // console.log(topTen);
    // const [Pending, setPending] = useState();
    const dispatch = useDispatch();
    const [faves, setFaves] = useState([]);

    const portfolioRedux = useSelector((state) => state.portfolio);
    // const watchlistRedux = useSelector((state) => state.watchlistSlice);
    const getData = async () => {
        const callForTokenList = await axios.get(tokenList());

        setTokens(callForTokenList.data);

        // console.log(callForTokenList);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleAddToFavs = async (e) => {
        const token = e.currentTarget.value;
        console.log(token);
        //send token to redux
        //send token to backend
        setFaves(token);
        // dispatch(watchlistActions.setToken(e.currentTarget.value));
        const res = await backendAPIs.addWatchlist(token);
        console.log(res);
        // const res = await axios.get(singleToken(token));
        // setFaves(res.data); // -> should be redux state
        // console.log(res.data);
        // dispatch(watchlistActions.setToken());
    };

    // console.log(watchlistRedux);

    return (
        <div>
            {/* {JSON.stringify(tokens)} */}
            <div className="int-container">
                <div className="holder">
                    {/* <h2 className="header">
                        Cryptocurrency Tokens by Market Cap
                    </h2> */}
                    <h1 style={{ color: "white", align: "" }}>Crypto Whale </h1>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 350 }} aria-label="simple table">
                            <Typography
                                variant="h4"
                                style={{ margin: 18, fontFamily: "Roboto" }}
                            ></Typography>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>Token</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">
                                        Market Cap
                                    </TableCell>
                                    <TableCell align="center">
                                        % Change (24hr)
                                    </TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {topTen.map((token) => (
                                    <TableRow
                                        key={token.name}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell align="right">
                                            <Box
                                                component="img"
                                                sx={{
                                                    height: 25,
                                                    width: 25,
                                                    maxHeight: {
                                                        xs: 233,
                                                        md: 167,
                                                    },
                                                    maxWidth: {
                                                        xs: 350,
                                                        md: 250,
                                                    },
                                                }}
                                                alt=""
                                                src={`${token.image}`}
                                            />
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {token.name}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{ width: 150 }}
                                        >
                                            {`$ ${parseFloat(
                                                token.current_price
                                            ).toLocaleString("en-US")}`}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{ width: 250 }}
                                        >
                                            {`$ ${parseFloat(
                                                token.market_cap
                                            ).toLocaleString("en-US")}`}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{ width: 150 }}
                                        >
                                            {` ${parseFloat(
                                                token.price_change_percentage_24h
                                            ).toFixed(2)}`}
                                        </TableCell>

                                        <TableCell align="center">
                                            <IconButton
                                                value={token.id}
                                                color="primary"
                                                aria-label="add to shopping cart"
                                                sx={{
                                                    height: 30,
                                                    width: 30,
                                                }}
                                                onClick={handleAddToFavs}
                                            >
                                                <StarBorderIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
};

export default TableData;
