import React, { useEffect } from "react";
import DataTicker from "../component/DataTicker";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
// import WatchList from "./component/WatchList";
// import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../component/ResponsiveAppBar";
import Table from "../component/Table";

const Home = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <DataTicker />
            <br />
            <div className="container">
                <Table />
            </div>
            <br />
            <br />
            <br />
            <br />
            {/* <WatchList /> */}
        </div>
    );
};

export default Home;
