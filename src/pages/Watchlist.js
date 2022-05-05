import React from "react";
import ResponsiveAppBar from "../component/ResponsiveAppBar";
import WatchListTable from "../component/WatchListTable";
// import WatchlistTable from "../component/WatchListTable";
import user from "../redux/user";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import userSlice, { userActions } from "../redux/user";
import { useNavigate } from "react-router-dom";

const Watchlist = () => {
    let navigate = useNavigate();

    // const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const status = () => {
        if (user.auth === true) {
            console.log("you may enter");
        } else {
            navigate("/home");
        }
    };

    useEffect(() => {
        status();
    }, []);
    return (
        <>
            <ResponsiveAppBar />
            <br />
            <WatchListTable />
        </>
    );
};

export default Watchlist;
