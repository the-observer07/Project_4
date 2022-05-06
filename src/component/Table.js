import axios from "axios";
import React from "react";
import { tokenList } from "../utils/coingeckoAPICalls";
import { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Container,
    Button,
    Box,
    Typography,
    IconButton,
} from "@mui/material";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import "../fonts.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import watchlistSlice, { watchlistActions } from "../redux/watchlistSlice";
import { useSelector, useDispatch } from "react-redux";
import { singleToken, chart } from "../utils/coingeckoAPICalls";
import backendAPIs from "../utils/backendAPIs";
import userSlice, { userActions } from "../redux/user";
import { useNavigate } from "react-router-dom";
import Loading from "../component/Loading";
import geckoAPISlice, { geckoAPIActions } from "../redux/coingeckoAPISlice";
import Popup from "./Popup";

const TableData = ({ setOpenModal }) => {
    const [tokens, setTokens] = useState([]);
    const topTen = tokens.filter((element, index) => index < 10);
    const dispatch = useDispatch();
    const [faves, setFaves] = useState([]);
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [extAPI, setExtAPI] = useState("");
    let navigate = useNavigate();

    // const [openModal, setOpenModal] = useState(false);

    const user = useSelector((state) => state.user);
    const portfolioRedux = useSelector((state) => state.portfolio);

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const getData = async () => {
        setLoading(true);
        const callForTokenList = await axios.get(tokenList());
        setTokens(callForTokenList.data);

        const getTokenIds = callForTokenList.data.map((data) => data.id);
        const getTopTenTokenIds = getTokenIds.filter(
            (element, index) => index < 10
        );

        setExtAPI(getTopTenTokenIds);

        setLoading(false);
    };

    const checkIfLoggedIn = async () => {
        if (user.auth === true) {
            setStatus(true);
        }
    };

    /// MAYBE FOR FUTURE DEVELOPMENT //////////////////////////////////////

    // const callExternalAPI = async () => {
    //     for (let i = 0; i < extAPI.length; i++) {
    //         const id = extAPI[i];
    //         const res = await axios.get(chart(id));
    //         console.log(res);
    //     }
    // };

    useEffect(() => {
        getData();
        checkIfLoggedIn();
    }, []);

    /// MAYBE FOR FUTURE DEVELOPMENT //////////////////////////////////////

    // useEffect(() => {
    //     callExternalAPI();
    // }, [extAPI]);

    const handleAddToFavs = async (e) => {
        const body = { username: user.username, token: e.currentTarget.value };
        setFaves(body.token);
        const res = await backendAPIs.addWatchlist(body);
        if (res) {
        }
    };

    const handleTokenClick = () => {
        setOpenModal(true);
    };

    return (
        <div>
            {/* {openModal && <Popup closeModal={setOpenModal} />} */}
            {status === true ? (
                <div className="int-container">
                    <div className="holder">
                        {/* <h2 className="header">
                        Cryptocurrency Tokens by Market Cap
                    </h2> */}
                        <Typography
                            variant="h1"
                            align="center"
                            sx={{ margin: 2 }}
                        >
                            CRYPTO WHALE
                        </Typography>

                        {loading === true ? (
                            <Container
                                // justifyItems="bottom"
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Box margin={10}>
                                    <Loading />
                                </Box>
                            </Container>
                        ) : (
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
                                    className="table"
                                    sx={{
                                        maxWidth: 750,
                                    }}
                                >
                                    <Table
                                        // position="fixed"
                                        // alignSelf="center"
                                        sx={{
                                            minWidth: 350,
                                        }}
                                        aria-label="simple table"
                                    >
                                        <Typography
                                            variant="h4"
                                            style={{
                                                margin: 18,
                                                fontFamily: "Roboto",
                                            }}
                                        ></Typography>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell></TableCell>
                                                <TableCell>Token</TableCell>
                                                <TableCell align="center">
                                                    Price
                                                </TableCell>
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
                                                    <TableCell
                                                        value={token.id}
                                                        component="th"
                                                        scope="row"
                                                        onClick={
                                                            handleTokenClick
                                                        }
                                                    >
                                                        {token.name}
                                                    </TableCell>
                                                    <TableCell
                                                        align="center"
                                                        sx={{ width: 150 }}
                                                    >
                                                        {`$ ${parseFloat(
                                                            token.current_price
                                                        ).toLocaleString(
                                                            "en-US"
                                                        )}`}
                                                        {token.price_change_percentage_24h >
                                                            0}
                                                        ? (
                                                        <ArrowDropUpRoundedIcon />
                                                        ):(
                                                        <ArrowDropDownRoundedIcon />
                                                        )
                                                    </TableCell>

                                                    <TableCell
                                                        align="center"
                                                        sx={{ width: 250 }}
                                                    >
                                                        {`$ ${parseFloat(
                                                            token.market_cap
                                                        ).toLocaleString(
                                                            "en-US"
                                                        )}`}
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
                                                            aria-label="add to faves"
                                                            sx={{
                                                                height: 30,
                                                                width: 30,
                                                            }}
                                                            onClick={
                                                                handleAddToFavs
                                                            }
                                                        >
                                                            <StarBorderIcon />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        )}
                    </div>
                </div>
            ) : (
                <div className="int-container">
                    <div className="holder">
                        {/* <h2 className="header">
                        Cryptocurrency Tokens by Market Cap
                    </h2> */}
                        <Typography
                            variant="h1"
                            align="center"
                            sx={{ margin: 2 }}
                        >
                            CRYPTO WHALE
                        </Typography>
                        <TableContainer component={Paper} className="table">
                            {loading === true ? (
                                <Container
                                    // justifyItems="bottom"
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Box margin={10}>
                                        <Loading />
                                    </Box>
                                </Container>
                            ) : (
                                <Table
                                    sx={{ minWidth: 350 }}
                                    aria-label="simple table"
                                >
                                    <Typography
                                        variant="h4"
                                        style={{
                                            margin: 18,
                                            fontFamily: "Roboto",
                                        }}
                                    ></Typography>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell>Token</TableCell>
                                            <TableCell align="center">
                                                Price
                                            </TableCell>
                                            <TableCell align="center">
                                                Market Cap
                                            </TableCell>
                                            <TableCell align="center">
                                                % Change (24hr)
                                            </TableCell>
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
                                                        src={`${token.image}`}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                    onClick={handleTokenClick}
                                                >
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
                                                    sx={{ width: 200 }}
                                                >
                                                    {` ${parseFloat(
                                                        token.price_change_percentage_24h
                                                    ).toFixed(2)}`}

                                                    {token.price_change_percentage_24h >
                                                    0 ? (
                                                        <ArrowDropUpRoundedIcon
                                                            color="success"
                                                            fontSize="large"
                                                        />
                                                    ) : (
                                                        <ArrowDropDownRoundedIcon
                                                            color="error"
                                                            fontSize="large"
                                                        />
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </TableContainer>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TableData;
