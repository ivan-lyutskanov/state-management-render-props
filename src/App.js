import React from "react";
import "./App.css";
import DataProvider from "./DataProvider";
import DataConsumer from "./DataConsumer";

function App() {
  return <DataProvider render={data => <DataConsumer {...data} />} />;
}

export default App;
