import { useContext, useEffect, useRef, useState } from "react";
import "./style.css";
import useFetch from "../utils/useFetch.js";
import CityContext from "../utils/CityContext.js";

const Header = () => {
  const [inputText, setInputText] = useState("");
  const [numInput, setNumInput] = useState("");
  const inputRef = useRef(null);
  const { setCities, limit, setItemsPerPage } = useContext(CityContext);
  const fetchedData = useFetch(inputText, limit);

  //   useEffect(() => {
  //     const handleKeyPress = (event) => {
  //       if (event.ctrlKey && event.key === "/") {
  //         if (inputRef.current) {
  //           inputRef.current.focus();
  //         }
  //       }
  //       if (event.key === "Enter") {
  //         console.log(1);
  //       }
  //     };

  //     window.addEventListener("keydown", handleKeyPress);

  //     return () => {
  //       window.removeEventListener("keydown", handleKeyPress);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     if (fetchedData) {
  //       setCities(fetchedData?.data);
  //     }
  //   }, [fetchedData]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === "/") {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    };

    const handleEnterPress = (event) => {
      if (event.key === "Enter") {
        if (fetchedData) {
          setCities(fetchedData?.data);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleEnterPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleEnterPress);
    };
  }, [fetchedData, setCities]);

  const handleOnChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    setItemsPerPage(numInput);
  };
  return (
    <div className="container">
      <div className="search-box">
        <input
          ref={inputRef}
          className="input-box"
          type="text"
          placeholder="Search Places..."
          value={inputText}
          onChange={handleOnChange}
        />
        <div className="shortcut">Ctrl+/</div>
      </div>
      <div className="city-perpage">
        <span>Cities Per Page : </span>
        <input
          type="number"
          className="input1"
          placeholder="Enter Items per Page"
          value={numInput}
          onChange={(e) => setNumInput(e.target.value)}
        />
        <button className="btn" onClick={handleClick}>
          Enter
        </button>
      </div>
    </div>
  );
};

export default Header;
