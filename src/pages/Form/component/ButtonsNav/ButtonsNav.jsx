import React, { useContext } from "react";

import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
import Context from "../../../../Provider/Context";

const ButtonsNav = () => {
  const {
    value,
    setCurrentQuestion,
    currentQuestion,
    setAnswers,
    questions,
    answers,
  } = useContext(Context);
  const navigate = useNavigate();

  const handleClick = () => {
    const { id } = questions[currentQuestion];

    if (currentQuestion + 1 >= questions.length) {
      return navigate("/form/result");
    }
    setCurrentQuestion(currentQuestion + 1);
    const curr = { id, value };
    return setAnswers([...answers, curr]);
  };

  const renderNavButtons = () => {
    return (
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          boxShadow: "none",
        }}
      >
        <Button
          variant="contained"
          sx={{
            "margin-top": "40px",
            backgroundColor: "#0067ac",
          }}
          size="large"
          disabled
        >
          <ArrowBackIcon />
        </Button>
        <Button
          variant="contained"
          sx={{
            "margin-top": "40px",
            backgroundColor: "#0067ac",
          }}
          size="large"
          disabled={!value}
          onClick={handleClick}
        >
          <ArrowForwardIcon />
        </Button>
      </ButtonGroup>
    );
  };
  return renderNavButtons();
};

export default ButtonsNav;
