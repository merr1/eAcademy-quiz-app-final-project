import React, { useState } from "react";

const Single = ({ question, answer }) => {
  const [isCorect, setIsCorect] = useState(null);
  const check = (id) => {
    id + 1 === answer.answer ? setIsCorect("#32CD32") : setIsCorect("#FF6347");
  };
  return (
    <div style={{ backgroundColor: isCorect }} className="quiz-page">
      <div>
        <h2 className="question">{question.question}</h2>
      </div>
      <div className="options">
        {question.options.map((item, idx) => (
          <div key={idx} onClick={() => check(idx)} className="option">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Single;
