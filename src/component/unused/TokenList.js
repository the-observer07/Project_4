import React, { useEffect, useState } from "react";
import Bottleneck from "bottleneck";

const TokenList = (props) => {
  const [data, setData] = useState([]);
  const [type, setType] = useState([]);

  const tickerData = "https://api.coingecko.com/api/v3/exchanges/binance";

  const limiter = new Bottleneck({
    reservoir: 100, // initial value
    reservoirRefreshAmount: 100,
    reservoirRefreshInterval: 60 * 500,

    // also use maxConcurrent and/or minTime for safety
    maxConcurrent: 1,
    minTime: 333, // pick a value that makes sense for your use case
  });

  const makeApiCall = async () => {
    const res = await fetch(tickerData);
    const rawData = await res.json();
    setData(rawData.tickers);
    const filteredData = rawData.tickers.map((duck) => {
      return {
        id: duck.base,
        price: duck.last,
      };
    });

    setType(filteredData);
    const emptyArray = [];
    const getId = filteredData.map((chicken) => {
      return emptyArray.push(chicken.id);
    });

    props.setId(emptyArray);
  };

  const throttledApiCall = limiter.wrap(makeApiCall);

  useEffect(() => {
    throttledApiCall();
    makeApiCall();
  }, []);

  const cryptoIdArray = [];
  const displayId = type.map((chicken) => {
    return cryptoIdArray.push(chicken.id);
  });

  return <div></div>;
};

export default TokenList;
