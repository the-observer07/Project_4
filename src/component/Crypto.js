import React, { useState, useEffect } from "react";

import tokenList from "./TokenListApiData";
import { Button, Container, Row, Col } from "react-bootstrap";
// import AggregateInput from "./AggregateInput";

const Crypto = (props) => {
  const [filterData, setFilterData] = useState("");
  const [tokenPrice, setTokenPrice] = useState([]);
  const [extractedData, setExtractedData] = useState("");

  const cryptoAPIQuery = `https://api.coingecko.com/api/v3/simple/price?ids=${filterData}&vs_currencies=USD`;

  useEffect(() => {
    getResults();
  }, [props.cryptoState]);

  const getResults = () => {
    const searchWord = props.searchWord;
    console.log(searchWord);
    const newFilter = Object.keys(tokenList).reduce((result, key) => {
      if (tokenList[key].name.match(searchWord)) {
        result = tokenList[key].id;
      }

      return result;
    }, "");
    setFilterData(newFilter);
    console.log(newFilter);
  };

  const makeApiCall = async () => {
    const res = await fetch(cryptoAPIQuery);
    const rawData = await res.json();

    setTokenPrice(rawData);
    console.log(rawData);

    const tokenPriceArray = [rawData];
    const obj1 = tokenPriceArray[0];
    console.log(obj1);

    const obj2 = obj1[Object.keys(obj1)[0]];
    console.log(obj2);

    const value = obj2[Object.keys(obj2)[0]];
    console.log(value);
    setExtractedData(value);
  };

  return (
    <div>
      <br />
      <Button onClick={makeApiCall} size="lg">
        Submit
      </Button>
      <br />
      <br />
      <br />
      <div className="data">Token price : ${extractedData}</div>
      <br />
    </div>
  );
};

export default Crypto;
