import React, { useState } from "react";
import { Button, Progress } from "reactstrap";

const Single = ({
  question,
  answer,
  qurrentId,
  questions,
  click,
  score,
  setScore,
  length,
}) => {
  const [isCorect, setIsCorect] = useState(null);
  const [Selected, setSelected] = useState(null);
  const [next, setNext] = useState(false);
  const check = () => {
    Selected === answer.answer
      ? setIsCorect("corect")
      : setIsCorect("notcorect");
  };
  const qula = () => {
    isCorect === "corect" ? setScore(score + 1) : setScore(score);
  };

  return (
    <div className="home-page">
      <div className="quiz">
        <Progress value={((qurrentId + 1) / questions.length) * 100}>
          {qurrentId + 1}/{questions.length}
        </Progress>
      </div>

      <div className={`quiz-page ${isCorect}`}>
        <div>
          <h2 className="question">{question.question}</h2>
        </div>
        <div className="column">
          {question.options.map((item, idx) => (
            <Button
              className="mt"
              color="warning"
              key={idx}
              onClick={() => {
                setSelected(idx + 1);
              }}
              active={Selected === idx + 1}
              disabled={next}
            >
              {item}
            </Button>
          ))}
        </div>
        <p>Selected: {Selected}</p>
      </div>
      {!next ? (
        <Button
          onClick={() => {
            qula();
            check();
            setNext(!next);
          }}
          outline
          style={{ backgroundColor: "#ef6f6e", color: "white" }}
        >
          submit
        </Button>
      ) : (
        <Button
          onClick={() => {
            click();
          }}
          outline
          style={{ backgroundColor: "#ef6f6e", color: "white" }}
        >
          {qurrentId === length ? <span>finish</span> : <span>next</span>}
        </Button>
      )}
    </div>
  );
};
export default Single;
