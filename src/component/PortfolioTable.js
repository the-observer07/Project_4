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
import backendAPIs from "../utils/backendAPIs";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import portfolioSlice, { portfolioActions } from "../redux/portfolioSlice";

const PortfolioTable = () => {
    // const [tokens, setTokens] = useState([]);
    // const topTen = tokens.filter((element, index) => index < 10);
    // console.log(topTen);
    // const [Pending, setPending] = useState();
    const [portfolio, setPortfolio] = useState([]);
    // const [apiData, setApiData] = useState();
    const dispatch = useDispatch();
    const portfolioDelete = useSelector((state) => state.portfolio);
    console.log(portfolio);

    const callForPortfolio = async () => {
        // console.log(backendAPIs);
        const res = await backendAPIs.pullPortfolio();
        // console.log(res.data.data);
        setPortfolio(res.data.data);
    };
    // console.log("API Call");
    // const res = await axios.get("http://127.0.0.1:5001/portfolio/pull");
    // console.log("API Called");
    // console.log(res);
    // console.log(res.data.data);
    // setPortfolio(res.data.data);
    console.log(portfolio);

    const portfolioRedux = useSelector((state) => state.portfolio);

    useEffect(() => {
        callForPortfolio();
    }, [portfolioRedux]);

    const handleDelete = async (e) => {
        // console.log(value);
        const token = e.currentTarget.value;
        console.log(token);
        const res = await backendAPIs.removePortfolio(token);
        dispatch(portfolioActions.setDelete(e));
        dispatch(portfolioActions.handleReset());
    };

    const handleEdit = async (e) => {
        const token = e.currentTarget.value;
        console.log(token);
        const res = await backendAPIs.editPortfolio(token);
        console.log(res.data); // -> to take res.data and print it in the input fields for editing
        console.log(res.data.editedEntry.token);
        console.log(res.data.editedEntry.price);
        console.log(res.data.editedEntry.quantity);
    };

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
                                    <TableCell>Token</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">
                                        Quantity
                                    </TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {portfolio.map((portfolio) => (
                                    <TableRow
                                        key={portfolio.name}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {portfolio.token}
                                        </TableCell>
                                        <TableCell align="right">
                                            {`$ ${parseFloat(
                                                portfolio.price
                                            ).toFixed(2)}`}
                                        </TableCell>
                                        <TableCell align="right">
                                            {portfolio.quantity}
                                        </TableCell>
                                        <TableCell sx={{ width: 120 }}>
                                            <IconButton
                                                value={portfolio.token}
                                                color="primary"
                                                aria-label="Edit button"
                                                sx={{
                                                    height: 30,
                                                    width: 30,
                                                }}
                                                onClick={handleEdit}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton
                                                value={portfolio.token}
                                                color="primary"
                                                aria-label="Del button"
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
        </div>
    );
};

export default PortfolioTable;
