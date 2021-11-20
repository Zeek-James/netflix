import React, { useState } from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import { PleaseLogin } from "./PleaseLogin";
import { BigMess } from "./BigMess";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const useStyles = makeStyles(() => ({
  container: {
    // height: "calc(100vh - 80px)",
    height: "100%",
    background: "#000",
    color: "#fff",
    overflow: "hidden",
  },
  boxCon: {
    position: "absolute",
    top: 20,
    zIndex: 2,
    padding: 50,
  },
  img: {
    height: "calc(100vh - 80px)",
    // height: "100%",
    width: "100vw",
    objectFit: "cover",
  },

  info: {
    maxWidth: 600,
    minWidth: 500,
    padding: 30,
    background: "#000",
    borderRadius: 5,
    boxShadow: "0px 0px 50px 50px #000",
  },

  grid: {
    marginRight: 30,
  },

  rate: {
    color: "#000",
    background: "#fff",
    boxShadow: "0px 0px 5px 5px #fff",
    fontWeight: "bolder",
    padding: 10,
  },

  block: {
    display: "flex",
    margin: 20,
    alignItems: "center",
  },

  btn: {
    marginTop: 20,
    marginRight: 50,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
}));

export const Movie = () => {
  const classes = useStyles();

  const [trailerURL, setTrailerURL] = useState("");
  const [isLogged, setIsLogged] = useState(true);

  const req = localStorage.getItem("movie");
  const res = req !== null ? JSON.parse(req) : null;

  if (res === null) {
    return <BigMess />;
  }

  const auth = () => {
    const req = localStorage.getItem("user");
    const res = JSON.parse(req);
    if (res === null) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  };
  const handleClick = (movie) => {
    auth();
    movieTrailer(movie?.name || movie?.title || "").then((res) => {
      setTrailerURL(res);
      //   setMovietitle(movie?.name || movie?.title);
    });
  };

  const words = (str, n) => {
    return str.length > n ? `${str.substr(0, n)}...` : str;
  };

  return (
    <div className={classes.container}>
      <Box className={classes.boxCon}>
        <Box className={classes.info}>
          <Typography variant="h5"></Typography>
          <Typography variant="h2">
            {res.original_title || res.original_name || res.name}
          </Typography>
          <Box className={classes.block}>
            <Typography variant="h6" className={classes.grid}>
              {res.first_air_date}
            </Typography>
            <Typography variant="h5" className={classes.rate}>
              Rate: {res.vote_average}
            </Typography>
          </Box>
          <Typography variant="h6">{words(res.overview, 250)}</Typography>
          <Box className={classes.btns}>
            <Button
              className={classes.btn}
              variant="outlined"
              color="inherit"
              onClick={() => handleClick(res)}
            >
              Trailer
            </Button>
            <Button className={classes.btn} variant="contained">
              Add to My List
            </Button>
            <Link to="/" className={classes.link}>
              <Button
                className={classes.btn}
                variant="outlined"
                color="inherit"
              >
                Back
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <img
        className={classes.img}
        src={`${baseUrl}${res.backdrop_path}`}
        alt={res.original_title || res.original_name || res.name}
      />
      {isLogged ? (
        <div>
          {trailerURL && (
            <div key="lo" className={classes.trailer}>
              <ReactPlayer
                url={trailerURL}
                controls={true}
                height="450px"
                width="100%"
              />
            </div>
          )}
        </div>
      ) : (
        <PleaseLogin isLogged={isLogged} setIsLogged={setIsLogged} />
      )}
    </div>
  );
};
