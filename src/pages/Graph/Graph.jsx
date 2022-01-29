/* eslint-disable no-return-assign */
/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from "react";
import { ref, get, child } from "firebase/database";

import db from "../../utils/firebase";

const Graph = () => {
  const [firstData, setFirstData] = useState([]);
  const [secondData, setSecondData] = useState([]);

  const filterAnswers = (items) => {
    const result = [];
    const data = [];
    items
      .map(({ answers }) => answers)
      .map((e) =>
        e.map((el) => {
          const arr = {
            id: el.value,
            label: el.id,
            color: "hsl(25, 70%, 50%)",
            value: 1,
          };

          data.push(arr);
          return result;
        })
      );
    const pa = data.reduce((group, curP) => {
      const newkey = curP.label;
      if (!group[newkey]) {
        group[newkey] = [];
      }
      group[newkey].push(curP);
      return group;
    }, {});
    result.push(pa);
    const keys = Object.keys(result[0]);
    const batata1 = [];
    const batata2 = [];
    keys.map((el) => {
      return result[0][el].map((e) => {
        if (el === "1") {
          const elementIndex = batata1.findIndex((item) => item.id === e.id);
          if (elementIndex >= 0) {
            return (batata1[elementIndex].value += 1);
          }
          return batata1.push(e);
        }
        const elementIndex = batata2.findIndex((item) => item.id === e.id);
        if (elementIndex >= 0) {
          return (batata2[elementIndex].value += 1);
        }
        return batata2.push(e);
      });
    });
    setFirstData(batata1);
    setSecondData(batata2);
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
