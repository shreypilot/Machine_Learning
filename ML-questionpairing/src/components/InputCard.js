import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputField from "./InputField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    marginLeft: "5",
    marginTop: "2rem",
    position: "relative",
    "& > *": {
      marginLeft: "12%",
      marginTop: "50px",
      width: "100%",
      height: "100%",
      background: "rgb(245, 246, 247)",
    },
  },
}));

const InputCard = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Paper elevation={10}>
          <InputField />
        </Paper>
      </div>
    </>
  );
};
export default InputCard;
