import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
const Home = () => {
  const history = useHistory();
  const changeRoute = (route) => history.push(route);

  return (
    <div className="home-page">
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
