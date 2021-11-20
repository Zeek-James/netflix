import React, { useEffect, useRef } from "react";
import { Box, LinearProgress, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  LoadingContainer: {
      overflow:'hidden',
    height: "100vh",
    display: "flex",
    background: "rgb(0, 10, 10)",
    justifyContent: "center",
    alignItems: "center",
    color: "red",
  },
}));
export const Loading = () => {
  const classes = useStyle();

  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.LoadingContainer}>
      <Box sx={{ width: "80%" }}>
        <LinearProgress
          variant="buffer"
          value={progress}
          valueBuffer={buffer}
          color="secondary"
        />
      </Box>
    </div>
  );
};
