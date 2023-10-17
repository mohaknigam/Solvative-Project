import { useContext, useEffect, useState } from "react";
import "./style.css";
import CityContext from "../utils/CityContext.js";
import EmptyTable from "./EmptyTable.js";

const Body = () => {
  const { cities, page, itemsPerPage } = useContext(CityContext);
  const [cityList, setCityList] = useState([]);
  useEffect(() => {
    console.log(cities);
    if (cities?.length > 0) {
      setCityList(cities);
    }
  }, [cities]);

  return cities?.length === 0 || cities === undefined ? (
    <EmptyTable />
  ) : (
    <div className="body">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Place Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {cityList
            ?.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)
            .map((item, index) => (
              <tr key={item.id}>
                <td className="col-1">{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item.country}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Body;
