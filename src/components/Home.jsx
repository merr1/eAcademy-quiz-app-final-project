import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
const Home = () => {
  const history = useHistory();
  const [local, setLocal] = useState([null]);
  const [isTrue, setIsTrue] = useState(false);
  const changeRoute = (route) => history.push(route);

  const getLatestScore = () => {
    let arr = JSON.parse(localStorage.getItem("myArray"));
    if (arr) {
      arr.sort((a, b) => b.time.localeCompare(a.time));
      setLocal(arr);
      local ? setIsTrue(true) : setIsTrue(false);
    }
  };

  useEffect(() => {
    getLatestScore();
  }, []);

  return (
    <div className="home-page">
      {isTrue && (
        <div className="latest">
          score: {local[0].scoree} | time:{local[0].time}
        </div>
      )}

      <div className="buttons">
        <Button
          onClick={() => changeRoute("/quiz")}
          size="lg"
          outline
          color="success"
        >
          start
        </Button>
        <Button
          onClick={() => changeRoute("/history")}
          size="lg"
          outline
          color="success"
        >
          see history
        </Button>
      </div>
    </div>
  );
};
export default Home;
