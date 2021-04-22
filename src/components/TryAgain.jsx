import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const TryAgain = ({ score, question }) => {
  const [IsAgain, setIsAgain] = useState(false);
  const [scores, setScore] = useState([null]);

  const tryagain = () => {
    IsAgain === false ? setIsAgain(true) : setIsAgain(false);
  };
  const history = useHistory();

  const changeRoute = (page) => history.push(page);
  const addLocalstorige = () => {
    let arr = JSON.parse(localStorage.getItem("myArray")) || [];
    arr.push({ time: Date().toLocaleString(), scoree: score });
    localStorage.setItem("myArray", JSON.stringify(arr));
  };

  return (
    <div>
      <div>
        testi dasrulebulia sheni qula: {score}/{question.length}
      </div>
      <br />
      <Button outline color="success" onClick={() => tryagain()}>
        try again
      </Button>
      <Button outline color="success" onClick={() => changeRoute("/history")}>
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
  );
};
export default TryAgain;
