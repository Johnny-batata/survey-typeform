import React, { useContext } from "react";

import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
import { ref, push } from "firebase/database";
import dateformat from "dateformat";
import Context from "../../../../Provider/Context";
import db from "../../../../utils/firebase";

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

  const sendAnswers = (curr) => {
    try {
      const now = new Date();
      const date = dateformat(now, "dd/MM/yyyy");

      const result = [];
      answers.forEach((el) => result.push(el));
      result.push(curr);

      const docRef = push(ref(db, "questions/"), {
        date,
        answers: result,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log("Error adding document: ", e);
    }
    // });
  };

  const handleClick = async () => {
    const { id } = questions[currentQuestion];
    const curr = { id, value };
    setAnswers([...answers, curr]);

    if (currentQuestion + 1 >= questions.length) {
      sendAnswers(curr);
      return navigate("/form/result");
    }

    return setCurrentQuestion(currentQuestion + 1);
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
            marginTop: "40px",
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
            marginTop: "40px",
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
