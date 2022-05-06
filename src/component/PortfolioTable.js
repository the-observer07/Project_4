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
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import portfolioSlice, { portfolioActions } from "../redux/portfolioSlice";
// import { AirlineSeatReclineNormalOutlined } from "@material-ui/icons";

const PortfolioTable = () => {
    // const [tokens, setTokens] = useState([]);
    // const topTen = tokens.filter((element, index) => index < 10);
    // console.log(topTen);
    // const [Pending, setPending] = useState();
    const [portfolio, setPortfolio] = useState([]);
    // const [apiData, setApiData] = useState();
    // const [recallData, setRecallData] = useState([]);

    // const portfolioDelete = useSelector((state) => state.portfolio);
    // console.log(portfolio);

    //===========================================================================

    // REDUX //

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const portfolioRedux = useSelector((state) => state.portfolio);

    //

    //===========================================================================

    const callForPortfolio = async () => {
        const body = {
            username: user.username,
        };

        const res = await backendAPIs.pullPortfolio(body);
        console.log(res.data.data.portfolio);
        setPortfolio(res.data.data.portfolio);
    };

    const handleDelete = async (e) => {
        // console.log(value);
        const token = e.currentTarget.value;
        const body = { username: user.username, token: token };
        console.log(body);
        const res = await backendAPIs.removePortfolio(body);
        // dispatch(portfolioActions.setDeleteMode(true));
        dispatch(portfolioActions.setDelete(true));
        dispatch(portfolioActions.handleReset());
        // dispatch(portfolioActions.setDeleteMode(false));
    };

    const handleEdit = async (e) => {
        dispatch(portfolioActions.setEdit(true));
        const token = e.currentTarget.value;
        const body = { username: user.username, token: token };
        console.log(body);
        const res = await backendAPIs.editPortfolio(body);
        const portfolioData = res.data.editedEntry.portfolio;
        console.log(portfolioData);
        const filteredData = portfolioData.filter(
            (element) => element.token == token
        );
        console.log(filteredData[0]);
        const data = filteredData[0];
        console.log(data);
        // for (let element of portfolioData) {
        dispatch(
            portfolioActions.setRecall({
                recalledToken: data.token,
                recalledPrice: data.price,
                recalledQty: data.quantity,
            })
        );
        // }

        // dispatch(
        //     portfolioActions.setRecall({
        //         recalledToken: res.data.editedEntry.token,
        //         recalledPrice: res.data.editedEntry.price,
        //         recalledQty: res.data.editedEntry.quantity,
        //     })

        // need to refresh form and update table
        // );
    };

    useEffect(() => {
        callForPortfolio();
    }, [portfolioRedux]);

    // console.log(portfolioRedux);

    return (
        <div>
            {/* {JSON.stringify(tokens)} */}
            <div className="int-container">
                <div className="holder">
                    <Typography variant="h1" align="center" sx={{ margin: 2 }}>
                        PORTFOLIO
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            p: 1,
                            m: 1,
                            // bgcolor: "background.paper",
                            borderRadius: 1,
                        }}
                    >
                        <TableContainer
                            component={Paper}
                            sx={{ maxWidth: 750 }}
                        >
                            <Table
                                sx={{ minWidth: 350 }}
                                aria-label="simple table"
                            >
                                <Typography
                                    variant="h4"
                                    style={{ margin: 18, fontFamily: "Roboto" }}
                                ></Typography>
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            align="center"
                                            sx={{ width: 100 }}
                                        >
                                            Token
                                        </TableCell>
                                        {/* <TableCell
                                            align="center"
                                            sx={{ width: 100 }}
                                        >
                                            Chart
                                        </TableCell> */}
                                        <TableCell
                                            align="center"
                                            sx={{ width: 150 }}
                                        >
                                            Price
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{ width: 120 }}
                                        >
                                            Quantity
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{ width: 100 }}
                                        >
                                            Current Price
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{ width: 70 }}
                                        ></TableCell>
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
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                align="center"
                                            >
                                                {portfolio.token}
                                            </TableCell>
                                            {/* <TableCell></TableCell> */}
                                            <TableCell
                                                align="center"
                                                sx={{ width: 150 }}
                                            >
                                                {`$ ${parseFloat(
                                                    portfolio.price
                                                ).toFixed(2)}`}
                                            </TableCell>
                                            <TableCell
                                                align="center"
                                                sx={{ width: 120 }}
                                            >
                                                {portfolio.quantity.toLocaleString(
                                                    "en-US"
                                                )}
                                            </TableCell>
                                            <TableCell
                                                align="center"
                                                sx={{ width: 100 }}
                                            ></TableCell>
                                            <TableCell sx={{ width: 50 }}>
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
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default PortfolioTable;
