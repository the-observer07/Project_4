import React from "react";
import PortfolioResultsTable from "../component/PortfolioResultsTable";
import PortfolioForm from "../component/PortfolioForm";
import backendAPIs from "../utils/backendAPIs";
import ResponsiveAppBar from "../component/ResponsiveAppBar";

const Portfolio = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <PortfolioForm />
            <PortfolioResultsTable />
        </div>
    );
};

export default Portfolio;
