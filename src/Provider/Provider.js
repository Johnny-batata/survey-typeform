/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from "react";
import data from "../data";

import Context from "./Context";

const Provider = ({ children }) => {
  const [value, setValue] = useState("");
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState(data);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    setValue("");
  }, [currentQuestion]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const context = {
    answers,
    setAnswers,
    questions,
    setQuestions,
    handleChange,
    value,
    setValue,
    currentQuestion,
    setCurrentQuestion,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default Provider;
