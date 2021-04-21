import React from "react";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  const changeRoute = () => history.push("/quiz");

  return (
    <div className="home-page">
      <div className="button" onClick={changeRoute}>
        start
      </div>
    </div>
  );
};
export default Home;
