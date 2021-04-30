import React, { useState, useEffect } from "react";
import Single from "./Single";
import Multiple from "./Multiple";
import Boolean from "./Boolean";
import ClipLoader from "react-spinners/SyncLoader";
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

  useEffect(() => {
    const saveLocal = async () => {
      const data = await getData();
      const now = new Date();
      localStorage.setItem(
        "data",
        JSON.stringify({
          value: data,
          expiry: now.getTime() + 600000,
        })
      );
    };
    const myQuestions = async () => {
      if (getLocal() === null) {
        await saveLocal();
        setQuestion(getLocal("data").questions);
        setAnswer(getLocal("data").answers);
      } else {
        setQuestion(getLocal("data").questions);
        setAnswer(getLocal("data").answers);
      }
    };
    myQuestions();
  }, []);

  const next = () => {
    setQurrentID(qurrentId + 1);
  };

  return answer ? (
    <div className="home-page">
      {qurrentId < question.length ? (
        question[qurrentId].type === "single" ? (
          <Single
            question={question[qurrentId]}
            click={next}
            answer={answer[qurrentId]}
            qurrentId={qurrentId}
            questions={question}
            score={score}
            setScore={setScore}
            length={question.length}
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
            length={question.length}
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
            length={question.length}
          />
        )
      ) : (
        <TryAgain score={score} question={question} />
      )}
    </div>
  ) : (
    <div className="home-page">
      <ClipLoader size={15} />
    </div>
  );
};
export default Quiz;
