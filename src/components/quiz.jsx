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

  const getData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  };

  const saveLocal = async () => {
    const data = await getData();
    const now = new Date();
    localStorage.setItem(
      "data",
      JSON.stringify({
        value: data,
        expiry: now.getTime() + 60000,
      })
    );
  };
  const getLocal = () => {
    const local = localStorage.getItem("data");
    if (!local) {
      return null;
    }
    const data = JSON.parse(local);
    const now = new Date();
    if (now.getTime() > data.expiry) {
      localStorage.removeItem("data");
      return null;
    }
    return data.value;
  };
  const myQuestions = async () => {
    if (getLocal() === null) {
      await saveLocal();
      console.log("movida");
      setQuestion(getLocal("data").questions);
      setAnswer(getLocal("data").answers);
    } else {
      setQuestion(getLocal("data").questions);
      setAnswer(getLocal("data").answers);
      console.log("iyo");
    }
  };

  useEffect(() => {
    myQuestions();
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
      <Spinner style={{ width: "4rem", height: "4rem", color: "#28a745" }} />{" "}
    </div>
  );
};
export default Quiz;
