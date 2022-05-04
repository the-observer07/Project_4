import React from "react";
import PortfolioResultsTable from "../component/unused/PortfolioResultsTable";
import PortfolioForm from "../component/PortfolioForm";
import backendAPIs from "../utils/backendAPIs";
import ResponsiveAppBar from "../component/ResponsiveAppBar";
import PortfolioTable from "../component/PortfolioTable";
import user from "../redux/user";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import userSlice, { userActions } from "../redux/user";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
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
        <div>
            <ResponsiveAppBar />

            <div className="container">
                <PortfolioForm />
                <PortfolioTable />
            </div>
        </div>
    );
};

export default Portfolio;
