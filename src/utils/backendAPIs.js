import axios from "axios";
const loginUrl = "/users";
const porfolioUrl = "/portfolio";
const watchlistUrl = "/watchlist";
const localHost = "http://127.0.0.1:5001";

const login = async () => {
    const res = await axios.post(localHost + "/users/login");
    return res;
    // console.log(res);
};

const logout = async () => {
    const res = await axios.get(localHost + "/users/logout");
    return res;
};

const createNewUser = async () => {
    const res = await axios.post(localHost + "/users/newuser");
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
const removePortfolio = async () => {
    const res = await axios.delete(localHost + "/portfolio/removeentry");
    console.log("Removed Entry", res);
    return res;
};

const editPortfolio = async () => {
    const res = await axios.patch(localHost + "/portfolio/entryupdate");
    return res;
};

const pullPortfolio = async () => {
    const res = await axios.get(localHost + "/portfolio/pull");
    return res;
};

//
//WATCHLIST
//

const addWatchlist = async () => {
    const res = await axios.post(localHost + "/watchlist/newwatch");
    return res;
};

const removeWatchlist = async () => {
    const res = await axios.delete(localHost + "/watchlist/removewatch");
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
};

export default apiCalls;
