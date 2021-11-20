import { Box, makeStyles } from "@material-ui/core";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Movie } from "./components/Movie";
import { UseForm } from "./components/singup/UseForm";
import { Login } from "./components/Login";
import { useEffect, useState } from "react";

const useStyle = makeStyles(() => ({
  container: {
    position: "relative",
    top: 80,
  },
}));
function App() {
  const classes = useStyle();
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    const loggedIn = localStorage.getItem("user");
    if (loggedIn) {
      setLoggedIn(true);
    }
  }, [setLoggedIn]);

  return (
    <div className={""}>
      <Router>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Box className={classes.container}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie_info" element={<Movie />} />
            <Route path="/signup" element={<UseForm />} />
            <Route
              path="/login"
              element={<Login setLoggedIn={setLoggedIn} />}
            />
          </Routes>
        </Box>
      </Router>
    </div>
  );
}

export default App;
