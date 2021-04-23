import React, { useState } from "react";
import { Button, ButtonGroup, Progress } from "reactstrap";

const Multiple = ({
  question,
  answer,
  qurrentId,
  questions,
  click,
  score,
  setScore,
}) => {
  const [isCorect, setIsCorect] = useState(null);
  const [Selected, setSelected] = useState([]);

  const onCheck = (selected) => {
    const index = Selected.indexOf(selected);
    if (index < 0) {
      Selected.push(selected);
    } else {
      Selected.splice(index, 1);
    }
    setSelected([...Selected]);
  };
  const check = () => {
    (answer.answer[0] === Selected[0] || answer.answer[0] === Selected[1]) &&
    (answer.answer[1] === Selected[0] || answer.answer[1] === Selected[1])
      ? setIsCorect("#32CD32")
      : setIsCorect("#FF6347");
  };
  const qula = () => {
    if (
      (answer.answer[0] === Selected[0] || answer.answer[0] === Selected[1]) &&
      (answer.answer[1] === Selected[0] || answer.answer[1] === Selected[1])
    ) {
      setScore(score + 1);
    }
  };
  return (
    <div>
      <Progress value={((qurrentId + 1) / questions.length) * 100}>
        {qurrentId + 1}/{questions.length}
      </Progress>
      <div style={{ backgroundColor: isCorect }} className="quiz-page">
        <div>
          <h2 className="question">{question.question}</h2>
        </div>
        <ButtonGroup className="column ">
          {question.options.map((item, idx) => (
            <Button
              className="mt"
              key={idx}
              color="primary"
              onClick={() => onCheck(idx + 1)}
              active={Selected.includes(idx + 1)}
            >
              {item}
            </Button>
          ))}
        </ButtonGroup>
        <p>Selected: {JSON.stringify(Selected)}</p>
        <div className="button" onClick={() => check()}>
          check
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
export default Multiple;
