import React, { useState } from "react";
import commodityList from "./CommodityList";
import forexList from "./ForexList";
import { DropdownList } from "react-widgets/cjs";
import TokenList from "./TokenList";
import Crypto from "./Crypto";
import Forex from "./Forex";
import Commodity from "./Commodity";

const AggregateInput = (props) => {
  const forexNameArray = [];
  const forexName = forexList.map((chicken) => {
    return forexNameArray.push(chicken.name);
  });

  const [id, setId] = useState([]);
  const [aggregatedSearch, setAggregatedSearch] = useState("");
  const [content, setContent] = useState("");
  const [forexState, setForexState] = useState(false);
  const [cryptoState, setCryptoState] = useState(false);
  const [input, setInput] = useState("");

  const aggregatedArray = [];

  const mergeForex = forexNameArray.map((chicken) => {
    return aggregatedArray.push(chicken);
  });

  const mergeCrypto = id.map((chicken) => {
    return aggregatedArray.push(chicken);
  });

  const mergeCommodity = commodityList.map((chicken) => {
    return aggregatedArray.push(chicken);
  });

  const handleSearchAggregate = (event) => {
    const searchWord = event;

    if (commodityList.indexOf(searchWord) !== -1) {
      setContent(<Commodity commoditySearchWord={searchWord} />);
    } else if (
      forexList.find((element) => element.name === searchWord) !== undefined
    ) {
      setContent(
        <Forex
          forexSearchWord={searchWord}
          forexState={forexState}
          setForexState={setForexState}
        />
      );
    } else {
      setContent(
        <Crypto
          searchWord={searchWord}
          cryptoState={cryptoState}
          setCryptoState={setCryptoState}
        />
      );
    }
  };

  return (
    <div>
      <div className="int-container">
        <div className="holder">
          <br />
          <h2 className="header">QUERY YOUR MOONSHOT</h2>
          <br />
          <DropdownList
            data={aggregatedArray}
            onChange={handleSearchAggregate}
          />
          <br />
          <TokenList id={id} setId={setId} />
          {content}
        </div>
      </div>
    </div>
  );
};

export default AggregateInput;
