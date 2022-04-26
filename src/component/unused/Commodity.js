import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

//============================================================================================================================================================================================

const commodityList = [
  "RICE",
  "WHEAT",
  "SUGAR",
  "CORN",
  "WTIOIL",
  "BRENTOIL",
  "SOYBEAN",
  "COFFEE",
  "XAU",
  "XAG",
  "XPD",
  "XPT",
  "XRH",
  "RUBBER",
  "ETHANOL",
  "CPO",
  "NG",
];

const Commodity = (props) => {
  const [type, setType] = useState([]);

  const commodityAPI = `https://www.commodities-api.com/api/latest?access_key=jhvo01w5j98zhcbi517u32j1mc14wgkh1zwzfp8rx4x3bdzujvnvx6gzody4&base=${props.commoditySearchWord}&symbols=USD`;

  const makeApiCall = async () => {
    const res = await fetch(commodityAPI);
    const rawData = await res.json();

    const rawDataArray = [rawData];
    const filteredData = rawDataArray.map((duck) => {
      return {
        price: duck.data.rates,
        unit: duck.data.unit,
      };
    });
    setType(filteredData);
  };

  const mappedData = type.map((element, index) => {
    return (
      <div key={index}>
        USD : ${element.price.USD} {element.unit}
        <br />
      </div>
    );
  });

  return (
    <div>
      <Col>
        <br />
        <Button onClick={makeApiCall} size="lg">
          Submit
        </Button>
        <br />
        <br />
        <div className="data">{mappedData}</div>
        {/* is propsing down to child (Result component) */}
        <br />
        {/* <input className="input-value" placeholder="Input value here."></input> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <DropdownList className="col" data={props.forexArray}></DropdownList> */}
        {/* <br /> */}
        {/* <Button>Swap</Button> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <DropdownList className="col" data={props.forexArraywx}></DropdownList> */}
      </Col>
    </div>
  );
};

export default Commodity;
