import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { developersWithThisFavorite } from "./store/developers/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function selectDevs(reduxState) {
  return reduxState.developers;
}

function selectResources(reduxState) {
  console.log(reduxState.resources);
  return reduxState.resources;
}

function App() {
  const developers = useSelector(selectDevs);
  const resources = useSelector(selectResources);

  const dispatch = useDispatch();

  const [favoriteId, setFavoriteId] = useState(0);

  const [devFavArr, set_devFavArr] = useState([]);

  const devsWithThisFav = useSelector(developersWithThisFavorite(favoriteId));

  // const developersWithThisFavorite = useSelector((state) => {
  //   return state.developers.filter((dev) => dev.favorites.includes(favoriteId));
  // });

  return (
    <div className="App">
      <h2>Web development resources</h2>
      <p>number of devs: {developers.length}</p>
      <p>number of resources: {resources.length}</p>
      <p>
        Who likes{" "}
        <select
          value={favoriteId}
          onChange={(e) => setFavoriteId(parseInt(e.target.value))}
        >
          {resources.map((resource) => {
            return (
              <option key={resource.id} value={resource.id}>
                {resource.name}
              </option>
            );
          })}
        </select>
        ?
      </p>
      <ul>
        {devsWithThisFav.map((dev) => {
          return <li key={dev.id}>{dev.name}</li>;
        })}
      </ul>
      <div>
        What does{" "}
        <select
          value={devFavArr}
          onChange={(e) => set_devFavArr(e.target.value)}
        >
          {developers.map((developer) => {
            return (
              <option key={developer.id} value={developer.id}>
                {developer.name}
              </option>
            );
          })}
        </select>{" "}
        like?
      </div>
    </div>
  );
}

export default App;
