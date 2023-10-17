import { useEffect, useState } from "react";

const useFetch = (inputText, limit) => {
  const [data, setData] = useState(null);

  const myDebounce = (callback, delay) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("Deboun");
      const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${inputText}&limit=${limit}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "c11a975e10mshe29a01b14c62a33p106e2cjsn0746e37fef11",
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };
    const handleDebounce = myDebounce(fetchData, 800);
    handleDebounce();
  }, [inputText, limit]);

  return data;
};

export default useFetch;
