/* eslint-disable no-return-assign */
/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from "react";
import { ref, get, child } from "firebase/database";

import db from "../../utils/firebase";

const Graph = () => {
  const [firstData, setFirstData] = useState({});
  const [secondData, setSecondData] = useState({});
  const reduceArrays = (arr, item) => {
    const result = arr.reduce(
      (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
      {}
    );

    const keys = [result].reduce((acc, cur) => {
      acc[cur.label] = [...(acc[cur.label] || []), cur];
      return acc;
    }, {});

    // const data = arr.reduce((acc, cur) => {
    //   acc[cur.label] = [...(acc[cur.label] || []), cur];
    //   return acc;
    // }, {});
    console.log("keys", keys);
    console.log("result", result, "arr", arr);

    if (item === 1) {
      setFirstData([result]);
    }
    setSecondData([result]);
  };
  const filterAnswers = (items) => {
    const result = [];
    const firstAnswers = [];
    const secondAnswers = [];
    items
      .map(({ answers }) => answers)
      .map((e) =>
        e.map((el) => {
          const arr = [
            {
              id: el.value,
              label: el.id,
              color: "hsl(25, 70%, 50%)",
              value: 1,
            },
          ];
          if (el.id === 1) {
            firstAnswers.push({ [el.value]: arr });
            return result;
          }
          secondAnswers.push({ [el.value]: arr });
          return result;
        })
      );
    console.log(
      "sssss",
      firstAnswers.map((el) => el),
      firstAnswers.reduce((acc, cur) => {
        acc[cur.label] = [...(acc[cur.label] || []), cur];
        return acc;
      }, {})
    );
    const occurrences1 = firstAnswers.map((el) => Object.keys(el)[0]);
    const occurrences2 = secondAnswers.map((el) => Object.keys(el)[0]);

    reduceArrays(occurrences1, 1);
    reduceArrays(occurrences2, 2);
  };

  const getAnswers = () => {
    const dbRef = ref(db);
    get(child(dbRef, "questions/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          filterAnswers(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAnswers();
  }, []);
  return (
    <div>
      <p>fim</p>
      {console.log("a data ta aq", firstData, secondData)}
    </div>
  );
};

export default Graph;
