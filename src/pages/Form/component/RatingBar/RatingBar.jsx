/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import * as S from "./styles";

const RatingBar = ({ handleClick }) => {
  return (
    <S.RatingDiv>
      <input
        type="radio"
        name="rating"
        id="rate10"
        onClick={handleClick}
        value={10}
      />
      <label htmlFor="rate10">10</label>
      <input
        type="radio"
        name="rating"
        id="rate9"
        onClick={handleClick}
        value={9}
      />
      <label htmlFor="rate9">9</label>
      <input
        type="radio"
        name="rating"
        id="rate8"
        onClick={handleClick}
        value={8}
      />
      <label htmlFor="rate8">8</label>
      <input
        type="radio"
        name="rating"
        id="rate7"
        onClick={handleClick}
        value={7}
      />
      <label htmlFor="rate7">7</label>
      <input
        type="radio"
        name="rating"
        id="rate6"
        onClick={handleClick}
        value={6}
      />
      <label htmlFor="rate6">6</label>
      <input
        type="radio"
        name="rating"
        id="rate5"
        onClick={handleClick}
        value={5}
      />
      <label htmlFor="rate5">5</label>
      <input
        type="radio"
        name="rating"
        id="rate4"
        onClick={handleClick}
        value={4}
      />
      <label htmlFor="rate4">4</label>
      <input
        type="radio"
        name="rating"
        id="rate3"
        onClick={handleClick}
        value={3}
      />
      <label htmlFor="rate3">3</label>
      <input
        type="radio"
        name="rating"
        id="rate2"
        onClick={handleClick}
        value={2}
      />
      <label htmlFor="rate2">2</label>
      <input
        type="radio"
        name="rating"
        id="rate1"
        onClick={handleClick}
        value={1}
      />
      <label htmlFor="rate1">1</label>
    </S.RatingDiv>
  );
};

export default RatingBar;
