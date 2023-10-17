import { useContext, useState } from "react";
import CityContext from "../utils/CityContext.js";

const Pagination = () => {
  const { page, cities, setPage, setLimit } = useContext(CityContext);
  const itemsPerPage = parseFloat(useContext(CityContext).itemsPerPage);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  const handleLimitChange = () => {
    const inputValue = parseInt(input);

    if (inputValue >= 5 && inputValue <= 10) {
      setLimit(inputValue);
      setError("");
    } else {
      setLimit(inputValue);
      setError("Please enter a value between 5 and 10.");
    }
  };

  return cities === undefined || cities?.length === 0 ? (
    <div></div>
  ) : (
    <div className="pagination">
      <h1>Pagination</h1>
      <div className="page-container">
        {Array(Math.ceil(cities?.length / itemsPerPage))
          .fill("")
          .map((_, idx) => {
            return (
              <span
                key={idx}
                onClick={() => setPage(idx + 1)}
                className={page === idx + 1 ? "pagination__selected" : ""}
              >
                {idx + 1}
              </span>
            );
          })}
      </div>
      <div className="div2">
        <span>Total Items from Server</span>
        <div className="limit-container">
          <input
            type="number"
            placeholder="Number of Cities..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn" onClick={handleLimitChange}>
            Enter
          </button>
        </div>
        {error && <div className="error-div">{error}</div>}
      </div>
    </div>
  );
};

export default Pagination;
