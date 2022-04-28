import React from "react";
import PortfolioResultsTable from "../component/PortfolioResultsTable";
import PortfolioForm from "../component/PortfolioForm";
import backendAPIs from "../utils/backendAPIs";
import ResponsiveAppBar from "../component/ResponsiveAppBar";
import PortfolioTable from "../component/PortfolioTable";

const Portfolio = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <PortfolioForm />
            <div className="container">
                <PortfolioTable />
            </div>
        </div>
    );
};

export default Portfolio;
