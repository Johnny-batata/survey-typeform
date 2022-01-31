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

  const GroupAnswers = (items) => {
    // this functions get all answers from db by params and group them by question(using it's id) then remove duplicates adding object's value that's supose to be duplicated on one
    const data = [];
    items
      .map(({ answers }) => answers)
      .forEach((e) =>
        e.forEach((el) => {
          const arr = {
            id: el.value,
            label: el.value,
            color: "hsl(25, 70%, 50%)",
            value: 1,
            question: el.id,
          };
          const questionIndex = apiData.findIndex(
            (question) => question.id === el.id
          );
          const repeatedOptionsQuestionIDIndex = data.findIndex(
            (item) => item[el.id]
          );

          if (apiData[questionIndex].type === "options") {
            if (repeatedOptionsQuestionIDIndex >= 0) {
              // this if check question id existence, if's not then create a new one
              const elementIndex = data[repeatedOptionsQuestionIDIndex][
                el.id
              ].findIndex((itemI) => itemI.id === el.value);

              if (elementIndex >= 0) {
                // this if checks if that answer already exists, if already exists then increases value on one
                return (data[repeatedOptionsQuestionIDIndex][el.id][
                  elementIndex
                ].value += 1);
              }
              // if that answer doesn't exist it's created bellow
              return data[repeatedOptionsQuestionIDIndex][el.id].push(arr);
            }
            // if the question id doesn't exist its create bellow
            return data.push({ [el.id]: [arr] });
          }

          const repeatedRatingQuestionIDIndex = data.findIndex((item) => {
            return item[el.id];
          });
          if (repeatedRatingQuestionIDIndex >= 0) {
            // this if check question id existence, if's not then create a new one

            const elementIndex = data[repeatedOptionsQuestionIDIndex][
              el.id
            ].findIndex((itemI) => {
              return itemI.id === el.value;
            });
            if (elementIndex >= 0) {
              // this if checks if that answer already exists, if already exists then increases value on one

              data[repeatedOptionsQuestionIDIndex][el.id][elementIndex][
                el.value
              ] += 1;
              return (data[repeatedOptionsQuestionIDIndex][el.id][
                elementIndex
              ].value += 1);
            }
            // if that answer doesn't exist it's created bellow
            return data[repeatedOptionsQuestionIDIndex][el.id].push({
              [el.value]: 1,
              ...arr,
            });
          }

          return data.push({ [el.id]: [{ [el.value]: 1, ...arr }] });
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
