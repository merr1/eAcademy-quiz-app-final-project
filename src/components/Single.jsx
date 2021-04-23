import React, { useState } from "react";
import { Button, ButtonGroup, Progress } from "reactstrap";

const Single = ({
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
  const check = (id) => {
    id + 1 === answer.answer ? setIsCorect("#32CD32") : setIsCorect("#FF6347");
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
        <div>
          <h2 className="question">{question.question}</h2>
        </div>
        <ButtonGroup className="column">
          {question.options.map((item, idx) => (
            <Button
              className="mt"
              key={idx}
              color="primary"
              onClick={() => {
                setSelected(idx + 1);
                check(idx);
              }}
              active={Selected === idx + 1}
            >
              {item}
            </Button>
          ))}
        </ButtonGroup>
        <p>Selected: {Selected}</p>
      </div>
      <Button
        onClick={() => {
          qula();
          click();
        }}
        outline
        color="success"
      >
        next
      </Button>
    </div>
  );
};
export default Single;
