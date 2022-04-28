import React from "react";
import PortfolioResultsTable from "../component/unused/PortfolioResultsTable";
import PortfolioForm from "../component/PortfolioForm";
import backendAPIs from "../utils/backendAPIs";
import ResponsiveAppBar from "../component/ResponsiveAppBar";
import PortfolioTable from "../component/PortfolioTable";

const Portfolio = () => {
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
