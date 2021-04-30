import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/SyncLoader";
const Home = () => {
  const history = useHistory();
  const [local, setLocal] = useState([null]);
  const [isTrue, setIsTrue] = useState(false);
  const [question, setQuestion] = useState(null);
  const changeRoute = (route) => history.push(route);

  const getData = async () => {
    const response = await fetch(
      "http://my-json-server.typicode.com/DanielBarbakadze/Advanced-JS-and-React-Basics/db"
    );
    const data = await response.json();
    return setQuestion(data.questions.length);
  };

  useEffect(() => {
    const getLatestScore = () => {
      let arr = JSON.parse(localStorage.getItem("myArray"));
      if (arr) {
        arr.sort((a, b) => b.time.localeCompare(a.time));
        setLocal(arr);
        arr ? setIsTrue(true) : setIsTrue(false);
      }
    };

    getLatestScore();
    getData();
  }, []);

  return question ? (
    <div className="home-page">
      <div className="buttons">
        <button className="button" onClick={() => changeRoute("/quiz")}>
          START
        </button>
        <button className="button" onClick={() => changeRoute("/history")}>
          HISTORY
        </button>
      </div>
      {isTrue && local.length !== 0 && (
        <div className="latest">
          score: {local[0].scoree}/{question} | {local[0].time}
        </div>
      )}
    </div>
  ) : (
    <div className="home-page">
      <ClipLoader color="#f56b6c" size={15} />
    </div>
  );
};
export default Home;
