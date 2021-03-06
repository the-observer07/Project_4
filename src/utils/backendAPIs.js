import axios from "axios";
const loginUrl = "/users";
const porfolioUrl = "/portfolio";
const watchlistUrl = "/watchlist";
const localHost = "http://127.0.0.1:5001";

//=======================

//      USER

//=======================

const login = async (body) => {
    // console.log(body);
    const res = await axios.post(localHost + "/users/login", body);
    return res;

    // console.log(res);
};

const loginStatus = async (body) => {
    const res = await axios.post(localHost + "/users/login/status", body);
    return res;
};

const status = async () => {
    const res = await axios.post(localHost + "/users/status");
    return res;
};

const logout = async () => {
    const res = await axios.post(localHost + "/users/logout");
    return res;
};

const createNewUser = async (body) => {
    const res = await axios.post(localHost + "/users/newuser", body);
    return res;
};

const addUserNewPortfolio = async (body) => {
    console.log(body);
    const res = await axios.post(localHost + "/users/portfolio/newentry", body);
    // console.log(response);
    return res;
};

//=======================

//      PORTFOLIO

//=======================
const addNewPortfolio = async (body) => {
    console.log(body);
    const res = await axios.post(localHost + "/users/portfolio/newentry", body);
    // console.log(response);
    return res;
};

const removePortfolio = async (body) => {
    console.log(`backendAPI ${body}`);
    const res = await axios.post(
        localHost + "/users/portfolio/removeentry",
        body
    );
    console.log("Removed Entry", res);
    return res;
};

const editPortfolio = async (body) => {
    const res = await axios.post(
        localHost + "/users/portfolio/entryupdate",
        body
    );
    return res;
};

const submitEditedPortfolio = async (body) => {
    console.log(body);
    const res = await axios.post(
        localHost + "/users/portfolio/entryupdatesubmit",
        body
    );
    console.log("hello");
    return res;
};

const pullPortfolio = async (body) => {
    console.log(body);
    const res = await axios.post(localHost + "/users/portfolio/pull", body);
    return res;
};

//=======================

//      WATCHLIST

//=======================

const addWatchlist = async (body) => {
    console.log(body);
    const res = await axios.post(localHost + "/users/watchlist/newwatch", body);
    return res;
};

const callWatchlistData = async (body) => {
    console.log(body);
    const res = await axios.post(localHost + "/users/watchlist/getwatch", body);
    return res;
};

const removeWatchlist = async (body) => {
    console.log(body);
    const res = await axios.post(
        localHost + "/users/watchlist/removewatch",
        body
    );
    console.log(res);
    return res;
};

//=======================

//      EXTERNAL API

//=======================

const initialCall = async (body) => {
    console.log(body);
    const res = await axios.post(localHost + "/extAPI/initial", body);
    return res;
};

const apiCalls = {
    login,
    logout,
    createNewUser,
    addNewPortfolio,
    removePortfolio,
    editPortfolio,
    pullPortfolio,
    addWatchlist,
    removeWatchlist,
    callWatchlistData,
    submitEditedPortfolio,
    addUserNewPortfolio,
    loginStatus,
    status,
    initialCall,
};

export default apiCalls;
