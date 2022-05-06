import React, { useState, useEffect, Component } from "react";
import Ticker, { FinancialTicker, NewsTicker } from "nice-react-ticker";
import "../index.css";

const DataTicker = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [newsData, setNewsData] = useState("");

    const cryptoApiTicker =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    const financialNewsTicker =
        "https://api.marketaux.com/v1/news/all?symbols=TSLA,GME,AMC&filter_entities=true&language=en&api_token=WMIGwTBG1aEbYNV6vYbrBbu8TXB4R0mAXH1Zu5tU";

    useEffect(() => {
        fetchFinancialNewsAPI();
        fetchCryptoAPI();
        setInterval(() => {
            fetchCryptoAPI();
        }, 10000);
    }, []);

    const fetchCryptoAPI = async () => {
        const percentageChange = "";

        const res = await fetch(cryptoApiTicker);
        const rawData = await res.json();
        // console.log(rawData);
        // let sevenData = rawData.tickers;
        // console.log(sevenData);
        const firstSeven = rawData.filter((element, index) => index < 10);
        // console.log(firstSeven);

        const filteredData = firstSeven.map((element, index) => {
            // console.log(element.price_change_percentage_24h);
            return (
                <FinancialTicker
                    id={index}
                    change={
                        percentageChange
                            ? element.price_change_percentage_24h < 0
                            : element.price_change_percentage_24h > 0
                    }
                    symbol={element.symbol} // to upper case it...
                    lastPrice={`${parseFloat(element.high_24h).toFixed(2)}`}
                    currentPrice={`${parseFloat(element.current_price).toFixed(
                        2
                    )}`}
                    percentage={`${parseFloat(
                        element.price_change_percentage_24h
                    ).toFixed(2)}`}
                />
            );
        });
        setCryptoData(filteredData);
    };

    const fetchFinancialNewsAPI = async () => {
        const res = await fetch(financialNewsTicker);
        const rawData = await res.json();
        const financialMappedData = rawData.data.map((element, index) => {
            return (
                <NewsTicker
                    id={index}
                    icon={element.image_url}
                    title={element.title}
                    url={element.url}
                />
            );
        });
        setNewsData(financialMappedData);
    };

    return (
        <div>
            <Ticker className="tickerItemFinancial" sx={{ display: "flex" }}>
                {cryptoData}
            </Ticker>
            <div className="newsticker">
                <Ticker isNewsTicker={true}>{newsData}</Ticker>
            </div>
        </div>
    );
};

export default DataTicker;
