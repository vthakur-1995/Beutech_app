import { GetAppOutlined } from "@material-ui/icons";
import { getDefaultNormalizer } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    axios
      .get("https://api.publicapis.org/entries")
      .then((res) => {
        console.log(res.data.entries);
        setData(res.data.entries);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home-container">
      {loading && <h1>Loading...</h1>}

      {data.map((item, i) => (
        <div key={i} className="item-container">
          <div className="item-head">{item.API}</div>
          <div className="item-desc">{item.Description}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
