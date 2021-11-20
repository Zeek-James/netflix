import { useWindowSize } from "../utils/useWindowSize";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import requests from "../request";
import instance from "../axios";
import { Link } from "react-router-dom";
import { Loading } from "../utils/Loading";
// import { Loading } from "../utils/Loading";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const useStyle = makeStyles(() => ({
  container: {
    width: "100%",
    height: 450,
    marginBottom: 50,
  },
  bgImg: {
    height: "100%",
    objectFit: "cover",
    width: "100%",
  },
  gridContainer: {
    position: "absolute",
    top: 20,
    zIndex: 2,
  },
  info: {
    maxWidth: 500,
    lineHeight: 1.2,
    padding: 20,
    background: "#000",
    boxShadow: "10px 10px 70px 70px #000",
  },

  bannerBox: {
    border: "#fff solid 1px",
    objectFit: "cover",
    width: 250,
    height: 400,
    zIndex: 2,
  },

  title: {
    marginBottom: 30,
  },

  button: {
    color: "red",
    textDecoration: "none",
  },

  description: {
    marginTop: 30,
    lineHeight: 1.2,
  },

  fadedBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 450,
    width: "100%",
    background: "rgba(0, 0, 0, 0.7)",
  },
}));
export const Banner = () => {
  const classes = useStyle();
  const { width } = useWindowSize();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true;

  useEffect(() => {
    const fetchData = async () => {
      const req = await instance(requests.fetchNetflixOriginals);
      setMovie(
        req.data.results[Math.floor(Math.random() * req.data.results.length)]
      );
      setLoading(false);
      return req;
    };
    fetchData();
  }, []);

  const handleClick = (movie) => {
    localStorage.setItem("movie", JSON.stringify(movie));
  };

  const words = (str, n) => {
    if(!movie==={})
    return str.length > n ? `${str.substr(0, n)}...` : str;
  };

  return loading ? (
    <Loading/>
  ) : (
    <div className={classes.container}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className={classes.gridContainer}
      >
        <Grid className={classes.info} item>
          <Typography className={classes.title} variant="h4">
            {movie.title || movie.name}
          </Typography>
          <Link to="/movie_info" className={classes.button}>
            <Button
              variant="outlined"
              onClick={() => {
                handleClick(movie);
              }}
              color="inherit"
              size="large"
            >
              Check Out
            </Button>
          </Link>
          <Typography className={classes.description} variant="body1">
            {words(movie.overview, 250)}
          </Typography>
        </Grid>
        {width > 850 && (
          <Grid item>
            <img
              src={`${baseUrl}${movie.poster_path}`}
              alt={movie.title || movie.name}
              className={classes.bannerBox}
            />
          </Grid>
        )}
      </Grid>
      <img
        className={classes.bgImg}
        src={`${baseUrl}${movie.backdrop_path}`}
        alt={movie.title || movie.name}
      />
      <div className={classes.fadedBackground} />
    </div>
  );
};
