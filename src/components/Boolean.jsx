import React, { useState } from "react";
import { Button, ButtonGroup, Progress } from "reactstrap";

const Boolean = ({
  question,
  answer,
  qurrentId,
  questions,
  click,
  score,
  setScore,
}) => {
  const [isCorect, setIsCorect] = useState(null);
  const [Selected, setSelected] = useState(null);
  const check = (bool) => {
    bool === answer.answer ? setIsCorect("#32CD32") : setIsCorect("#FF6347");
  };
  const qula = () => {
    isCorect === "#32CD32" ? setScore(score + 1) : setScore(score);
  };
  return (
    <div>
      <Progress value={((qurrentId + 1) / questions.length) * 100}>
        {qurrentId + 1}/{questions.length}
      </Progress>
      <div className="quiz-page" style={{ backgroundColor: isCorect }}>
        <h2 className="question">{question.question}</h2>
        <div>
          <ButtonGroup>
            <Button
              color="primary"
              onClick={() => {
                setSelected(0 + 1);
                check(true);
              }}
              active={Selected === 0 + 1}
            >
              true
            </Button>
            <Button
              color="primary"
              onClick={() => {
                setSelected(0 + 1);
                check(false);
              }}
              active={Selected === 1 + 1}
            >
              false
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <Button
        onClick={() => {
          click();
          qula();
        }}
        outline
        color="success"
      >
        next
      </Button>
    </div>
  );
};
export default Boolean;
