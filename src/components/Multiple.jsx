import React, { useState } from "react";

const Multiple = ({ question, answer }) => {
  const [isCorect, setIsCorect] = useState(null);
  const check = (id) => {
    id + 1 === answer.answer[0] || id + 1 === answer.answer[1]
      ? setIsCorect("#32CD32")
      : setIsCorect("#FF6347");
  };
  return (
    <div style={{ backgroundColor: isCorect }} className="quiz-page">
      <div>
        <h2 className="question">{question.question}</h2>
      </div>
      <div className="options">
        {question.options.map((item, idx) => (
          <div>
            <input
              type="checkbox"
              key={idx}
              onClick={() => check(idx)}
              className="option"
            />
            <label>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Multiple;
