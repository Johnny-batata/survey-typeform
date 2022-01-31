/* eslint-disable no-return-assign */
/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState, useContext } from "react";
import { ref, get, child } from "firebase/database";
import CircularProgress from "@mui/material/CircularProgress";
import MyResponsivePie from "./component/PieGraph/PieGraph";
import Header from "../GeneralComponents/Header/Header";
import MyResponsiveBar from "./component/BarGraph/BarGraph";
import apiData from "../../data";
import Context from "../../Provider/Context";
import ButtonsNav from "../Form/component/ButtonsNav/ButtonsNav";
import * as S from "./styles";

import db from "../../utils/firebase";

const Graph = () => {
  const [allAnswers, setAllAnswers] = useState([]);
  const { setCurrentQuestion, currentQuestion } = useContext(Context);
  const data = [];

  const checkDuplicateQuestion = (el) => data.findIndex((item) => item[el.id]);

  const checkDuplicateAswr = (arr, el, repeatedOptionsQuestionIDIndex) =>
    arr[repeatedOptionsQuestionIDIndex][el.id].findIndex(
      (itemI) => itemI.id === el.value
    );
  const createAnswerObject = (el) => {
    return {
      id: el.value,
      label: el.value,
      color: "hsl(25, 70%, 50%)",
      value: 1,
      question: el.id,
    };
  };

  const handleTypeOptionsAnswers = (el) => {
    // this function group questions by options type

    const checkQuestion = checkDuplicateQuestion(el);

    const arr = createAnswerObject(el);
    if (checkQuestion >= 0) {
      // this if check question id existence, if's not then create a new one

      const elementIndex = checkDuplicateAswr(data, el, checkQuestion);

      if (elementIndex >= 0) {
        // this if checks if that answer already exists, if already exists then increases value on one
        return (data[checkQuestion][el.id][elementIndex].value += 1);
      }
      // if that answer doesn't exist it's created bellow
      return data[checkQuestion][el.id].push(arr);
    }
    // if the question id doesn't exist its create bellow
    return data.push({ [el.id]: [arr] });
  };

  const handleTypeRating = (el) => {
    // this function group questions by rating type
    const arr = createAnswerObject(el);

    const checkQuestion = checkDuplicateQuestion(el);
    if (checkQuestion >= 0) {
      // this if check question id existence, if's not then create a new one

      const elementIndex = checkDuplicateAswr(data, el, checkQuestion);

      if (elementIndex >= 0) {
        // this if checks if that answer already exists, if already exists then increases value on one

        data[checkQuestion][el.id][elementIndex][el.value] += 1;
        return (data[checkQuestion][el.id][elementIndex].value += 1);
      }
      // if that answer doesn't exist it's created bellow
      return data[checkQuestion][el.id].push({
        [el.value]: 1,
        ...arr,
      });
    }

    return data.push({ [el.id]: [{ [el.value]: 1, ...arr }] });
  };

  const GroupAnswers = (items) => {
    // this functions get all answers from db by params and verify what question type is
    items
      .map(({ answers }) => answers)
      .forEach((e) =>
        e.forEach((el) => {
          const questionIndex = apiData.findIndex(
            (question) => question.id === el.id
          );

          if (apiData[questionIndex].type === "options") {
            return handleTypeOptionsAnswers(el);
          }
          return handleTypeRating(el);
        })
      );
    setAllAnswers(data);
  };

  const getAnswers = () => {
    const dbRef = ref(db);
    get(child(dbRef, "questions/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          GroupAnswers(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    setCurrentQuestion(0);
    getAnswers();
  }, []);
  const checkLoading = () => {
    if (allAnswers.length > 0) {
      if (apiData[currentQuestion].type === "options") {
        return (
          <MyResponsivePie
            data={allAnswers[currentQuestion][apiData[currentQuestion].id]}
          />
        );
      }
      if (apiData[currentQuestion].type === "rating") {
        return (
          <MyResponsiveBar
            data={allAnswers[currentQuestion][apiData[currentQuestion].id]}
            questionKeys={allAnswers[currentQuestion][
              apiData[currentQuestion].id
            ].map((e) => e.label)}
          />
        );
      }
    }
    return (
      <S.LoadingDiv>
        <CircularProgress
          disableShrink
          size={200}
          style={{ display: "flex", justifyContent: "center" }}
        />
      </S.LoadingDiv>
    );
  };
  return (
    <div>
      <Header />
      <main style={{ height: "600px" }}>
        <S.Title>{apiData[currentQuestion].question}</S.Title>
        {checkLoading()}
        <ButtonsNav />
      </main>
    </div>
  );
};

export default Graph;
