import React, { useState, useEffect } from "react";
import Single from "./Single";
import Multiple from "./Multiple";
const API_URL =
  "http://my-json-server.typicode.com/DanielBarbakadze/Advanced-JS-and-React-Basics/db";

const Quiz = () => {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [qurrentId, setQurrentID] = useState(0);
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
  const next = () => {
    setQurrentID(qurrentId + 1);
  };

  return answer ? (
    question[qurrentId].type === "single" ? (
      <div>
        <Single question={question[qurrentId]} answer={answer[qurrentId]} />
        <button className="button" onClick={() => next()}>
          next
        </button>
      </div>
    ) : (
      <div>
        <Multiple question={question[qurrentId]} answer={answer[qurrentId]} />
        <button className="button" onClick={() => next()}>
          next
        </button>
      </div>
    )
  ) : (
    <h1 className="loader">loading...</h1>
  );
};
export default Quiz;
