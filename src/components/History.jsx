import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import ContextList from "./ContextList";
const History = () => {
  const history = useHistory();
  const changeRoute = () => history.push("/");
  var array = localStorage.getItem("myArray");
  array = JSON.parse(array);

  return (
    <div>
      <div>istoriis gverdze xar</div>
      <table>
        <tr>
          <th>#</th>
          <th>date</th>
          <th>score</th>
        </tr>

        {array &&
          array.map((item, idx) => (
            <ContextList id={idx + 1} time={item.time} score={item.scoree} />
          ))}
      </table>
      <Button onClick={changeRoute} size="lg" outline color="success">
        go home
      </Button>
    </div>
  );
};
export default History;
