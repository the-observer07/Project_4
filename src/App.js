import React from "react";
import DataTicker from "./component/DataTicker";
import AggregateInput from "./component/AggregateInput";
import WatchList from "./component/WatchList";

const App = () => {
  return (
    <div>
      <DataTicker />
      <br />
      <br />
      <div className="container">
        <AggregateInput />
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* <WatchList /> */}
    </div>
  );
};

export default App;
