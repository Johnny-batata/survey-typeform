const createAnswerObject = (el) => {
  return {
    id: el.value,
    label: el.value,
    color: "hsl(25, 70%, 50%)",
    value: 1,
    question: el.id,
  };
};

export default createAnswerObject;
