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
  const removeItemFromStorage = (item) => {
    let arr = localStorage.getItem("myArray");
    arr = JSON.parse(arr);
    setLocal(arr.filter((list) => list.time !== item));
    localStorage.clear();
    localStorage.setItem(
      "myArray",
      JSON.stringify(arr.filter((list) => list.time !== item))
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>date</th>
            <th>score</th>
          </tr>
        </thead>

        <tbody>
          {local &&
            local.map((item, idx) => (
              <ContextList
                key={idx}
                id={idx + 1}
                time={item.time}
                score={item.scoree}
                removeItemFromStorage={removeItemFromStorage}
              />
            ))}
        </tbody>
      </table>
      <Button onClick={changeRoute} size="lg" outline color="success">
        go home
      </Button>
    </div>
  );
};
export default History;
