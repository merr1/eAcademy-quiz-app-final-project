import React, { useState, useEffect } from "react";

const API_URL =
  "http://my-json-server.typicode.com/DanielBarbakadze/Advanced-JS-and-React-Basics/db";

const Quiz = () => {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setQuestion(data.questions);
        setAnswer(data.answers);
      });
  }, []);
  console.log(answer);
  console.log(question);
  return (
    question && (
      <div className="quiz-page">
        <div>{question[0].question}</div>
      </div>
    )
  );
};
export default Quiz;
