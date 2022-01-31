import React, { useContext } from "react";
import Context from "../../Provider/Context";

import RatingBar from "./component/RatingBar/RatingBar";
import RatingOptions from "./component/RatingOptions/RatingOptions";
import ButtonsNav from "./component/ButtonsNav/ButtonsNav";

import Header from "../GeneralComponents/Header/Header";
import * as S from "./styles";

const Form = () => {
  const { questions, handleChange, value, setValue, currentQuestion } =
    useContext(Context);

  const handleComponents = () => {
    const { type, options } = questions[currentQuestion];
    if (type === "rating") {
      return <RatingBar handleClick={handleChange} />;
    }
    return (
      <RatingOptions handleChange={setValue} value={value} options={options} />
    );
  };

  return (
    <S.Main>
      <Header />
      <S.Wrapper>
        <S.Question>{questions[currentQuestion].question}</S.Question>
        {handleComponents()}
        <ButtonsNav />
      </S.Wrapper>
    </S.Main>
  );
};

export default Form;
