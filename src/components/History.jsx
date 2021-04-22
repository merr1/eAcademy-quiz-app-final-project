import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import ContextList from "./ContextList";
const History = () => {
  const history = useHistory();
  const [local, setLocal] = useState([]);
  const changeRoute = () => history.push("/");

  useEffect(() => {
    let arr = localStorage.getItem("myArray");
    arr = JSON.parse(arr);
    setLocal(arr);
  }, []);

  return (
    <div>
      <div>istoriis gverdze xar</div>
      <table>
        <tr>
          <th>#</th>
          <th>date</th>
          <th>score</th>
        </tr>

        {local &&
          local.map((item, idx) => (
            <ContextList
              key={idx}
              id={idx + 1}
              time={item.time}
              score={item.scoree}
              local={local}
              setLocal={setLocal}
            />
          ))}
      </table>
      <Button onClick={changeRoute} size="lg" outline color="success">
        go home
      </Button>
    </div>
  );
};
export default History;
