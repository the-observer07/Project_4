import React from "react";
import PortfolioResultsTable from "../component/PortfolioResultsTable";
import PortfolioForm from "../component/PortfolioForm";
import backendAPIs from "../utils/backendAPIs";

const Portfolio = () => {
    return (
        <div>
            <PortfolioForm />
            <PortfolioResultsTable />
        </div>
    );
};

export default Portfolio;
