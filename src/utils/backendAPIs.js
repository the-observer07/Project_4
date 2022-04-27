import axios from "axios";
const loginUrl = "/users";
const porfolioUrl = "/portfolio";
const watchlistUrl = "/watchlist";

const login = async (body) => {
    const response = await axios.post(loginUrl + "/login", body, {});
    console.log(response);
};

const logout = async (id) => {
    const response = await axios.get(loginUrl + "/logout" + id, {});
    return response;
};

const createNewUser = async (id) => {
    const response = await axios.post(loginUrl + "/newuser" + id, {});
    return response;
};

//
//PORTFOLIO
//

const addNewPortfolio = async (coords) => {
    const response = await axios.post(porfolioUrl + "/newentry");
    return response;
};
const removePortfolio = async (body) => {
    const response = await axios.delete(porfolioUrl + "/removeentry");
    console.log("Removed Entry", response);
    return response;
};

const editPortFolio = async (body) => {
    await axios.patch(porfolioUrl + "/entryupdate", body);
};

//
//WATCHLIST
//

const addWatchlist = async (id) => {
    await axios.post(watchlistUrl + "/newwatch/" + id, {
        withCredentials: true,
    });
};

const removeWatchlist = async (body) => {
    await axios.delete(watchlistUrl + "/removewatch", body, {
        withCredentials: true,
    });
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
