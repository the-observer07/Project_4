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
import { Button } from "@mui/material";

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
                                    <TableCell
                                        style={{
                                            color: "black",
                                            fontWeight: "700",
                                            variant: "h2",
                                            margin: 30,
                                            fontFamily: "Roboto",
                                        }}
                                    >
                                        Token
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        style={{
                                            color: "black",
                                            fontWeight: "700",
                                            variant: "h2",
                                            margin: 30,
                                            fontFamily: "Roboto",
                                        }}
                                    >
                                        Price
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        style={{
                                            color: "black",
                                            fontWeight: "700",
                                            variant: "h2",
                                            margin: 30,
                                            fontFamily: "Roboto",
                                        }}
                                    >
                                        Market Cap
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        style={{
                                            color: "black",
                                            fontWeight: "700",
                                            variant: "h2",
                                            margin: 30,
                                            fontFamily: "Roboto",
                                        }}
                                    >
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
                                            {<img src="token.image" alt="" />}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {token.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {`$ ${token.current_price}`}
                                        </TableCell>
                                        <TableCell align="right">
                                            {`$ ${token.market_cap}`}
                                        </TableCell>
                                        <TableCell align="right">
                                            {
                                                token.market_cap_change_percentage_24h
                                            }
                                        </TableCell>
                                        {loggedIn === "true" ? (
                                            <div></div>
                                        ) : (
                                            <TableCell align="right">
                                                <Button variant="contained">
                                                    Add to watchlist
                                                </Button>
                                            </TableCell>
                                        )}
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
