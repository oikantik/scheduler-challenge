import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import Schedule from "./components/Schedule";
import Load from "./components/Load";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant='h3' className={classes.title}>
        Schedule
      </Typography>
      <Schedule />

      <Typography variant='h3' className={classes.title}>
        Load
      </Typography>

      <Load />
    </Container>
  );
}

export default App;
