import axios from "axios";
const loginUrl = "/users";
const porfolioUrl = "/portfolio";
const watchlistUrl = "/watchlist";
const localHost = "http://127.0.0.1:5001";

const login = async (body) => {
    console.log(body);
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

const createNewUser = async () => {
    const res = await axios.post(localHost + "/users/newuser");
    return res;
};

const addUserNewPortfolio = async (body) => {
    console.log(body);
    const res = await axios.post(localHost + "/users/portfolio/newentry", body);
    // console.log(response);
    return res;
};

//
//PORTFOLIO
//

const addNewPortfolio = async (body) => {
    console.log(body);
    const res = await axios.post(localHost + "/portfolio/newentry", body);
    // console.log(response);
    return res;
};

const removePortfolio = async (body) => {
    console.log(`backendAPI ${body}`);
    const res = await axios.post(localHost + "/portfolio/removeentry", {
        token: body,
    });
    console.log("Removed Entry", res);
    return res;
};

const editPortfolio = async (body) => {
    const res = await axios.post(localHost + "/portfolio/entryupdate", {
        token: body,
    });
    return res;
};

const submitEditedPortfolio = async (body) => {
    console.log(body);
    const res = await axios.post(localHost + "/portfolio/entryupdatesubmit", {
        body,
    });
    console.log("hello");
    return res;
};

const pullPortfolio = async () => {
    const res = await axios.get(localHost + "/portfolio/pull");
    return res;
};

//
//WATCHLIST
//

const addWatchlist = async (body) => {
    const res = await axios.post(localHost + "/users/watchlist/newwatch", {
        token: body,
    });
    return res;
};

const callWatchlistData = async () => {
    const res = await axios.get(localHost + "/watchlist/getwatch");
    return res;
};

const removeWatchlist = async (body) => {
    console.log(body);
    const res = await axios.post(localHost + "/watchlist/removewatch", {
        token: body,
    });
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
};

export default apiCalls;
