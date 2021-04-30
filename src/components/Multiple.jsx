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
  length,
}) => {
  const [isCorect, setIsCorect] = useState(null);
  const [Selected, setSelected] = useState([]);
  const [next, setNext] = useState(false);

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
      ? setIsCorect("corect")
      : setIsCorect("notcorect");
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
      <div className={`quiz-page ${isCorect}`}>
        <div>
          <h2 className="question">{question.question}</h2>
        </div>
        <ButtonGroup className="column ">
          {question.options.map((item, idx) => (
            <Button
              className="mt"
              key={idx}
              color="warning"
              onClick={() => onCheck(idx + 1)}
              active={Selected === idx + 1}
              disabled={next}
            >
              {item}
            </Button>
          ))}
        </ButtonGroup>
        <p>Selected: {JSON.stringify(Selected)}</p>
      </div>
      <div className="center">
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
            {qurrentId + 1 === length ? <span>finish</span> : <span>next</span>}
          </Button>
        )}
      </div>
    </div>
  );
};
export default Multiple;
