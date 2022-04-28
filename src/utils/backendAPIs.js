import axios from "axios";
const loginUrl = "/users";
const porfolioUrl = "/portfolio";
const watchlistUrl = "/watchlist";
const localHost = "http://127.0.0.1:5001";

const login = async () => {
    const response = await axios.post(localHost + "/login");
    console.log(response);
};

const logout = async () => {
    const response = await axios.get(localHost + "/logout");
    return response;
};

const createNewUser = async () => {
    const response = await axios.post(localHost + "/newuser");
    return response;
};

//
//PORTFOLIO
//

const addNewPortfolio = async (body) => {
    const response = await axios.post(localHost + "/portfolio/newentry", body);
    console.log(response);
    return response;
};
const removePortfolio = async () => {
    const response = await axios.delete(localHost + "/portfolio/removeentry");
    console.log("Removed Entry", response);
    return response;
};

const editPortFolio = async () => {
    await axios.patch(localHost + "/portfolio/entryupdate");
};

//
//WATCHLIST
//

const addWatchlist = async () => {
    await axios.post(localHost + "/watchlist/newwatch");
};

const removeWatchlist = async () => {
    await axios.delete(localHost + "/watchlist/removewatch");
};

const apiCalls = {
    login,
    logout,
    createNewUser,
    addNewPortfolio,
    removePortfolio,
    editPortFolio,
    addWatchlist,
    removeWatchlist,
};

export default apiCalls;
