import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function selectDevNr(reduxState) {
  return reduxState.developers.length;
}

function selectResNr(reduxState) {
  return reduxState.resources.length;
}

function App() {
  const devNr = useSelector(selectDevNr);
  const resNr = useSelector(selectResNr);
  return (
    <div className="App">
      <h2>Web development resources</h2>
      <p>number of devs: {devNr}</p>
      <p>number of resources: {resNr}</p>
    </div>
  );
}

export default App;
