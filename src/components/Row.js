import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";

const useStyles = makeStyles(() => ({
  container: {
    zIndex: 3,
    paddingLeft: 50,
  },
  posters: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
    overflowX: "scroll",
    overflowY: "hidden",
    "&::-webkit-scrollbar": {
      width: "0.4em",
      height: 5,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      background: "linear-gradient(45deg, #555 30%, #fff 90%)",
      outline: "1px solid #fff",
      borderRadius: 10,
    },
    marginBottom: 50,
  },

  poster: {
    positon: "relative",
    height: 400,
    objectFit: "contain",
    padding: 10,
    borderRadius: 15,
    transition: "1s ease-out all",

    "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer",
    },
  },
}));

const baseUrl = "https://image.tmdb.org/t/p/original/";

export const Row = ({ title, fetchUrl }) => {
  const classes = useStyles();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const req = await axios(fetchUrl);
      const data = req.data;
      setItems(data.results);
      setLoading(false);
    };
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    localStorage.setItem("movie", JSON.stringify(movie));
  };

  const movies = (movie) => {
    return (
      <Box key={movie.id}>
        <Link to="/movie_info">
          <img
            onClick={() => handleClick(movie)}
            className={classes.poster}
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.id}
          />
        </Link>
      </Box>
    );
  };

  return (
    <div className={classes.container}>
      <Typography variant="h4"> {title} </Typography>
      {loading ? (
        <div>loading</div>
      ) : (
        <div className={classes.posters}>{items.map(movies)}</div>
      )}
    </div>
  );
};
