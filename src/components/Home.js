import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { Banner } from "./Banner";
import { Row } from "./Row";
import request from "../request";

const useStyle = makeStyles(() => ({
  container: {
    background: "#000",
    color: "#fff",
  },
  fadedBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "rgba(0, 0, 0, 0.7)",
  },
}));

export const Home = () => {
  const classes = useStyle();

  return (
    <Box className={classes.container}>
      <Banner />
      <Box>
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={request.fetchNetflixOriginals}
        />
        <Row title="TOP RATED" fetchUrl={request.fetchTopRated} />
        <Row title="TRENDING" fetchUrl={request.fetchTrending} />
        <Row title="DOCUMENTRIES" fetchUrl={request.fetchDocumentries} />
        <Row title="HORROR" fetchUrl={request.fetchHorrorMovies} />
        <Row title="ROMANCE" fetchUrl={request.fetchRomanceMovies} />
        <Row title="COMEDY" fetchUrl={request.fetchComedyMovies} />
        <Row title="ACTION" fetchUrl={request.fetchActionMovies} />
        <Row title="CARTOON" fetchUrl={request.fetchAnimation} />
      </Box>
    </Box>
  );
};
