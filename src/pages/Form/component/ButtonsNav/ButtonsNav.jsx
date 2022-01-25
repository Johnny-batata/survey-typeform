import React, { useContext } from "react";

import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ButtonGroup from "@mui/material/ButtonGroup";
import Context from "../../../../Provider/Context";

const ButtonsNav = () => {
  const { value } = useContext(Context);
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
        >
          <ArrowForwardIcon />
        </Button>
      </ButtonGroup>
    );
  };
  return renderNavButtons();
};

export default ButtonsNav;
