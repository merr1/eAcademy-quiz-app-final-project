import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const TryAgain = ({ score, question }) => {
  const [IsAgain, setIsAgain] = useState(false);

  const tryagain = () => {
    IsAgain === false ? setIsAgain(true) : setIsAgain(false);
  };
  const history = useHistory();

  const changeRoute = (page) => history.push(page);
  const addLocalstorige = () => {
    let arr = JSON.parse(localStorage.getItem("myArray")) || [];
    var date = new Date();
    var string = date.toLocaleTimeString([], {
      day: "numeric",
      year: "numeric",
      month: "numeric",
      hour12: false,
    });
    arr.unshift({ time: string, scoree: score });
    arr.sort(function (a, b) {
      return b.scoree - a.scoree;
    });
    localStorage.setItem("myArray", JSON.stringify(arr));
  };

  return (
    <div className="endQuiz">
      <div className="score">
        <p>testi dasrulebulia sheni qula: </p>

        <p>
          {score}/{question.length}
        </p>
      </div>
      <div className="column">
        <Button
          className="mt"
          outline
          color="success"
          onClick={() => tryagain()}
        >
          try again
        </Button>
        <Button
          className="mt"
          outline
          color="success"
          onClick={() => changeRoute("/history")}
        >
          See Attempts History
        </Button>
        {IsAgain && (
          <div className="pop">
            <div> Do you want to save this attempt?</div>
            <div>
              <Button outline color="info" onClick={() => changeRoute("/")}>
                no
              </Button>
              <Button
                outline
                color="info"
                onClick={() => {
                  addLocalstorige();
                  changeRoute("/");
                }}
              >
                yes
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default TryAgain;
