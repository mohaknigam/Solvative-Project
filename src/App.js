import "./App.css";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import Pagination from "./Components/Pagination.js";
import CityContext from "./utils/CityContext.js";
import { useState } from "react";

function App() {
  const [cities, setCities] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  return (
    <div className="App">
      <CityContext.Provider
        value={{
          cities: cities,
          limit: limit,
          page: page,
          itemsPerPage: itemsPerPage,
          setCities,
          setLimit,
          setPage,
          setItemsPerPage,
        }}
      >
        <Header />
        <Body />
        <Pagination />
      </CityContext.Provider>
    </div>
  );
}

export default App;
