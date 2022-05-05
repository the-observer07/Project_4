import React from "react";
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
import { useSelector, useDispatch } from "react-redux";
import watchlistSlice, { watchlistActions } from "../redux/watchlistSlice";

const WatchListTable = () => {
    const watchlist = useSelector((state) => state.watchlist);
    const [watchlistData, setWatchlistData] = useState([]);
    // console.log(watchlist);
    // const list = ""
    let recalledData = [];
    // const [watchlist, setWatchlist] = useState([]);
    // const mappedData = [];
    // const topTen = [];
    const coingeckoData = [];
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    // console.log(user);

    const callForWatchlist = async () => {
        // console.log(watchlist);
        const body = { username: user.username };
        // console.log(body);
        const res = await backendAPIs.callWatchlistData(body);
        // console.log(res);
        recalledData = res.data.getWatch.watchlist;
        // console.log(recalledData);

        for await (let element of recalledData) {
            // console.log(element);
            const response = await axios.get(singleToken(element));
            // console.log("hello");
            coingeckoData.push(response.data);
            // console.log(coingeckoData);
        }

        setWatchlistData(coingeckoData);
        // console.log(watchlistData);
    };

    // console.log(watchlistData);

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
        // outsideApi();
    }, [watchlist]);

    const handleDelete = async (e) => {
        // const body = { username: user.username };
        e.preventDefault();
        const body = { username: user.username, token: e.currentTarget.value };
        // console.log(body);
        console.log("TRYING TO PRINTTTTT");
        dispatch(watchlistActions.setDelete()); // not setting
        // dispatch(watchlistActions.setToken(body.token)); // not setting
        console.log(watchlist);
        const res = await backendAPIs.removeWatchlist(body);
        // console.log(res);
        dispatch(watchlistActions.setDefault());
        console.log(watchlist);

        // dispatch(watchlistActions.setToken(""));
        // dispatch(portfolioActions.setDeleteMode(true));
        // dispatch(portfolioActions.setDelete(true));
        // dispatch(portfolioActions.handleReset());
    };

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
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Market Cap</TableCell>
                                <TableCell align="center">% Change</TableCell>
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
                                    <TableCell align="center">
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
                                    <TableCell align="center">
                                        {`$ ${parseFloat(
                                            token.market_data.current_price.usd
                                        ).toLocaleString("en-US")}`}
                                    </TableCell>
                                    <TableCell align="center">
                                        {`$ ${parseFloat(
                                            token.market_data.market_cap.usd
                                        ).toLocaleString("en-US")}`}
                                    </TableCell>
                                    <TableCell align="center">
                                        {` ${parseFloat(
                                            token.market_data
                                                .price_change_percentage_24h
                                        ).toFixed(2)}`}
                                    </TableCell>

                                    <TableCell align="center">
                                        <IconButton
                                            value={token.name}
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
