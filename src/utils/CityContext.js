import { createContext } from "react";

const CityContext = createContext({
  cityList: [],
  limit: 0,
  page: 0,
  itemsPerPage: 0,
});

export default CityContext;
