/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import * as S from "./styles";

const RatingBar = ({ handleClick }) => {
  return (
    <S.RatingDiv>
      <input type="radio" name="rating" id="rate10" onClick={handleClick} />
      <label htmlFor="rate10">10</label>
      <input type="radio" name="rating" id="rate9" onClick={handleClick} />
      <label htmlFor="rate9">9</label>
      <input type="radio" name="rating" id="rate8" onClick={handleClick} />
      <label htmlFor="rate8">8</label>
      <input type="radio" name="rating" id="rate7" onClick={handleClick} />
      <label htmlFor="rate7">7</label>
      <input type="radio" name="rating" id="rate6" onClick={handleClick} />
      <label htmlFor="rate6">6</label>
      <input type="radio" name="rating" id="rate5" onClick={handleClick} />
      <label htmlFor="rate5">5</label>
      <input type="radio" name="rating" id="rate4" onClick={handleClick} />
      <label htmlFor="rate4">4</label>
      <input type="radio" name="rating" id="rate3" onClick={handleClick} />
      <label htmlFor="rate3">3</label>
      <input type="radio" name="rating" id="rate2" onClick={handleClick} />
      <label htmlFor="rate2">2</label>
      <input type="radio" name="rating" id="rate1" onClick={handleClick} />
      <label htmlFor="rate1">1</label>
    </S.RatingDiv>
  );
};

export default RatingBar;
