import React, { useState, useEffect } from "react";
import Single from "./Single";
import Multiple from "./Multiple";
import Boolean from "./Boolean";
import { Spinner } from "reactstrap";

import TryAgain from "./TryAgain";
const API_URL =
  "http://my-json-server.typicode.com/DanielBarbakadze/Advanced-JS-and-React-Basics/db";

const Quiz = () => {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [qurrentId, setQurrentID] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setQuestion(data.questions);
        setAnswer(data.answers);
      });
  }, []);
  const next = () => {
    setQurrentID(qurrentId + 1);
  };

  return answer ? (
    qurrentId < question.length ? (
      question[qurrentId].type === "single" ? (
        <Single
          question={question[qurrentId]}
          click={next}
          answer={answer[qurrentId]}
          qurrentId={qurrentId}
          questions={question}
          score={score}
          setScore={setScore}
        />
      ) : question[qurrentId].type === "multiple" ? (
        <Multiple
          question={question[qurrentId]}
          click={next}
          answer={answer[qurrentId]}
          qurrentId={qurrentId}
          questions={question}
          score={score}
          setScore={setScore}
        />
      ) : (
        <Boolean
          question={question[qurrentId]}
          click={next}
          answer={answer[qurrentId]}
          qurrentId={qurrentId}
          questions={question}
          score={score}
          setScore={setScore}
        />
      )
    ) : (
      <TryAgain score={score} question={question} />
    )
  ) : (
    <div className="home-page">
      <Spinner style={{ width: "4rem", height: "4rem" }} />{" "}
    </div>
  );
};
export default Quiz;
