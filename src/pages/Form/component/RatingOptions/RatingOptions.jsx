import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const RatingOptions = ({ handleChange, value, options }) => {
  const renderRadioButtons = () => {
    return options.map((el) => (
      <FormControlLabel
        value={el}
        control={<Radio />}
        label={el}
        onChange={() => handleChange(el)}
        sx={{
          color: "white",
          transform: "scale(1.5)",
          marginLeft: "13px",
        }}
      />
    ));
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
      >
        {renderRadioButtons()}
      </RadioGroup>
    </FormControl>
  );
};

export default RatingOptions;
