import React, { useEffect, useState } from "react";
import axios from 'axios'


const base_url = 'https://image.tmdb.org/t/p/original';
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response =await axios.get(`${process.env.REACT_APP_API}${fetchUrl}`)
    };
  });
  return (
    <div>
      <h2></h2>
    </div>
  );
};

export default Row;
