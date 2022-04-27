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

const TableData = () => {
    const [tokens, setTokens] = useState([]);
    // const [Pending, setPending] = useState();

    const getData = async () => {
        const callForTokenList = await axios.get(tokenList());

        setTokens(callForTokenList.data);

        console.log(callForTokenList);
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            {/* {JSON.stringify(tokens)} */}
            <div className="int-container">
                <div className="holder">
                    <br />
                    {/* <h2 className="header">
                        Cryptocurrency Tokens by Market Cap
                    </h2> */}
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
                                    <TableCell align="right">
                                        Market Cap
                                    </TableCell>
                                    <TableCell align="right">
                                        % Change
                                    </TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tokens.map((token) => (
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
                                        <TableCell align="right">
                                            {`$ ${parseFloat(
                                                token.current_price
                                            ).toFixed(2)}`}
                                        </TableCell>
                                        <TableCell align="right">
                                            {`$ ${parseFloat(
                                                token.market_cap
                                            ).toLocaleString("en-US")}`}
                                        </TableCell>
                                        <TableCell align="right">
                                            {` ${parseFloat(
                                                token.market_cap_change_percentage_24h
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
