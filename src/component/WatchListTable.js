import React from "react";
import { useSelector } from "react-redux";
import watchlistSlice, { watchlistActions } from "../redux/watchlistSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Button, Box } from "@mui/material";
import backendAPIs from "../utils/backendAPIs";
import { singleToken } from "../utils/coingeckoAPICalls";

import { useState, useEffect } from "react";
import { Api } from "@mui/icons-material";

const WatchListTable = () => {
    const watchlist = useSelector((state) => state.watchlist);
    const [watchlistData, setWatchlistData] = useState([]);
    // console.log(watchlist);
    // const list = ""

    // const [watchlist, setWatchlist] = useState([]);
    // const mappedData = [];
    // const topTen = [];
    const coingeckoData = [];

    const callForWatchlist = async () => {
        // console.log(watchlist);
        const res = await backendAPIs.callWatchlistData();
        const recalledData = res.data.getWatch;
        console.log(recalledData);

        recalledData.map(async (element) => {
            console.log(element.token);
            const response = await axios.get(singleToken(element.token));
            console.log("hello");
            coingeckoData.push(response.data);
            console.log(coingeckoData);
            setWatchlistData(coingeckoData);
            console.log(watchlistData);
            // return { element, response };
            // return `${index} ${element.token}`; // logging object Object
        });

        // const stringData = mappedData.toString();
        // console.log(stringData);

        // const response = await axios.get(singleToken(mappedData));
        // console.log(response);
    };

    console.log(watchlistData.length);

    // const getString = mappedData.map ((element, index) => {
    //     const coingeckoRes = await axios.get(singleToken(getString));
    // console.log(watchlistData);
    //     return index
    // });
    // const coingeckoRes = await axios.get(singleToken(getString));

    // setWatchlistData(res.data.data);

    // console.log(callWatchlistData);
    // setFaves(res.data); // -> should be redux state
    // console.log(res);

    useEffect(() => {
        console.log("calling for watchlist");
        callForWatchlist();
    }, []);

    const handleDelete = () => {};

    return (
        <div className="container">
            <div className="holder">
                <h2 className="header">Watchlist</h2>
                <br />
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
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Market Cap</TableCell>
                                <TableCell align="right">% Change</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {JSON.stringify(watchlistData[1].id)} */}
                            {watchlistData.map((token) => (
                                <TableRow
                                    key={token.name}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
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
                                            src={`${token.image.small}`}
                                        />
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {token.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        {`$ ${parseFloat(
                                            token.market_data.current_price.usd
                                        ).toLocaleString("en-US")}`}
                                    </TableCell>
                                    <TableCell align="right">
                                        {`$ ${parseFloat(
                                            token.market_data.market_cap.usd
                                        ).toLocaleString("en-US")}`}
                                    </TableCell>
                                    <TableCell align="right">
                                        {` ${parseFloat(
                                            token.market_data
                                                .price_change_percentage_24h
                                        ).toFixed(2)}`}
                                    </TableCell>

                                    <TableCell align="right">
                                        <IconButton
                                            color="primary"
                                            aria-label="add to shopping cart"
                                            sx={{
                                                height: 30,
                                                width: 30,
                                            }}
                                            onClick={handleDelete}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default WatchListTable;
